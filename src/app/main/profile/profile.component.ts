import {
    Component,
    ViewEncapsulation,
    Input,
    OnInit,
} from "@angular/core";
import { fuseAnimations } from "@fuse/animations";
import { FuseConfigService } from "@fuse/services/config.service";
import { CatalogService } from "app/services/catalog.service";
import { FuseUtils } from "@fuse/utils";
import { AuthService } from "../../services/auth.service";
import { environment } from "environments/environment";
import { AlertDialogComponent } from "app/shared/components/alert-dialog/alert-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { Platform } from "@angular/cdk/platform";
import { AddSkilDialogComponent } from "./addSkill/addSkill.component";
import { Router } from '@angular/router';

@Component({
    selector: "profile",
    templateUrl: "./profile.component.html",
    styleUrls: ["./profile.component.scss"],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
})
export class ProfileComponent implements OnInit {
    @Input() profile: any;
    dialogRef: any;
    /**
     * Constructor
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private authService: AuthService,
        private CatalogService: CatalogService,
        public _matDialog: MatDialog,
        public _platform: Platform,
        public router: Router,

    ) {
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true,
                },
            },
        };
    }
    ngOnInit() {
       
        if (!this.profile) {
            this.authService.afAuth.authState.subscribe((user) => {
                if (user) {
                    this.CatalogService.GetDocWithFirestore(
                        "Providers/" + user.uid
                    ).subscribe((data) => {
                        this.profile = data;
                        if(this.profile.data.taskerStatus== 'Incomplete'){
                            this.router.navigate(["forms/signup-provider"]);
                            return;
                        }
                        this.getProfilePic(this.profile.data);
                      
                        if(this.profile.data.taskerStatus == 'Completed'){
                        var msg = "Gracias por registrarte. Tu cuenta se encuentra en proceso de aprobación. Te notificaremos tan pronto puedas utilizar tu cuenta de Tareazos.";
                        this.showAlert(msg, 'Confirmación registro');
                        }
                    
                    });
                }
            });
        } else {
            this.getProfilePic(this.profile.data);
        }
    }
    deleteSkill(index) {
        if (this.profile.data.Habilidades.length > 1) {
            this.profile.data.Habilidades.splice(index, 1);
            this.CatalogService.updateDocWithFirestore('Providers/' + this.profile.id, 'Habilidades', this.profile.data.Habilidades);
        } else {
            var msg =
                "Debes contar con al menos una habilidad!";
            this.showAlert(msg, 'Alerta');
        }
    }

    addSkills() {
        var width = "400px";
        var height = "86%";
        if (window.innerWidth <= 800 && window.innerHeight <= 600) {
            width = "100vw";
            height = "100vh";
        }
        if (this._platform.ANDROID || this._platform.IOS) {
            width = "100vw";
            height = "100vh";
        }

        this.dialogRef = this._matDialog.open(AddSkilDialogComponent, {
            panelClass: 'scrumboard-card-dialog',
            width: width,
            maxWidth: width,
            // height: height,
            maxHeight: height,
        });

        this.dialogRef.afterClosed().subscribe((response) => {
            if (!response) {
                return;
            }
            else {

                var results = this.profile.data.Habilidades.filter((element) => (element.skill == response.skill && element.subcategory == response.subcategory));
                if (results.length == 0) {


                    this.profile.data.Habilidades.push(response);
                    var updatedobj={};
                    updatedobj[response.skill] = true;
                    var catpricetype =
                        response.skill + "_" + response.priceType;
                    if (response.subcategory)
                        catpricetype = response.subcategory + "_" + response.priceType;
                    updatedobj[catpricetype] = Number(response.rate);
                    
                    updatedobj['Habilidades'] = this.profile.data.Habilidades;
                    
                    this.CatalogService.updateDocWithFirestore2('Providers/' + this.profile.id, updatedobj);
                } else {
                    var msg =
                        "Ya agregaste esta habilidad. Intenta borrarla de tus habilidades y agregarla nuevamente.";
                    this.showAlert(msg, 'Alerta');
                }
            }
        });
    }


    getProfilePic(data) {
        if (data) {
            data.picture = "";
            data.color =
                environment.colors[
                Math.floor(Math.random() * environment.colors.length)
                ];

            if (this.profile.data) {
                if (this.profile.data.pictures)
                    if (this.profile.data.pictures.length > 0) {
                        data.picture = this.profile.data.pictures[0].downloadUrl;
                    }
            }
        }
    }

    capitalize(s) {
        if (typeof s !== "string") {
            return "";
        } else {
            var split = s.split(" ");
            var cap = "";
            for (let item of split) {
                cap =
                    cap +
                    item.charAt(0).toUpperCase() +
                    item.slice(1).toLowerCase() +
                    " ";
            }

            return cap.trim();
        }
    }

    showAlert(msg, title) {
        var minWidth = "380px";
        var maxWidth = "380px";
        var minHeight = "190px";
        var maxHeight = "190px";
        if (window.innerWidth <= 800 && window.innerHeight <= 600) {
            minWidth = "80vw";
            maxWidth = "80vw";
            minHeight = "100%";
            maxHeight = "100%";
        }
        if (this._platform.ANDROID || this._platform.IOS) {
            minWidth = "80vw";
            maxWidth = "80vw";
            minHeight = "100%";
            maxHeight = "100%";
        }

        var dialogRef1 = this._matDialog.open(AlertDialogComponent, {
            minWidth: minWidth,
            maxWidth: maxWidth,
            minHeight: "240px",
            maxHeight: maxHeight,
        });

        dialogRef1.componentInstance.message = msg;
        dialogRef1.componentInstance.title = title;
    }
}
