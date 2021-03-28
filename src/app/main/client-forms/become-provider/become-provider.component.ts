import { Component, OnInit, Inject } from "@angular/core";
import { fuseAnimations } from "@fuse/animations";
import { AngularFirestore } from "@angular/fire/firestore";
import {
    MatDialogRef,
    MAT_DIALOG_DATA,
    MatDialog,
} from "@angular/material/dialog";
import { AuthService } from "app/services/auth.service";
import { FuseSplashScreenService } from "@fuse/services/splash-screen.service";
import { Router } from "@angular/router";
import { Platform } from "@angular/cdk/platform";
import { AlertDialogComponent } from "app/shared/components/alert-dialog/alert-dialog.component";
import { FuseConfigService } from "@fuse/services/config.service";
import {CatalogService} from "app/services/catalog.service";
@Component({
    selector: "app-become-provider",
    templateUrl: "./become-provider.component.html",
    styleUrls: ["./become-provider.component.scss"],
    animations: fuseAnimations,
})
export class BecomeProviderComponent implements OnInit {
    constructor(
        private _fuseConfigService: FuseConfigService,
        private firestore: AngularFirestore,
        private CatalogService: CatalogService,
        private _fuseSplashScreenService: FuseSplashScreenService,
        public dialogRef: MatDialogRef<BecomeProviderComponent>,
        public router: Router,
        public _platform: Platform,
        public _matDialog: MatDialog,
        private authService: AuthService // @Inject(MAT_DIALOG_DATA) public data: any
    ) {
        this._fuseConfigService.config = {
            layout: {
                sidebar: {
                    hidden: true,
                },
                navbar: {
                    hidden: true,
                },
                footer: {
                    hidden: true,
                },
                sidepanel: {
                    hidden: true,
                },
            },
        };
    }

    ngOnInit(): void {
        this.CatalogService.updateDocWithFirestore('Providers/'+this.authService.user.uid,"taskerStatus","Incomplete");
        this.CatalogService.updateDocWithFirestore('userData/'+this.authService.user.uid,"taskerStatus","Incomplete");
        window.addEventListener("beforeunload", function (e) {
            var confirmationMessage = "";
            e.returnValue = confirmationMessage;     // Gecko, Trident, Chrome 34+
            return confirmationMessage;              // Gecko, WebKit, Chrome <34
        });
       
     }

     

    RecieveProvidersForm(data) {
        //para poder filtrar luego en
        try {
            if (data.Habilidades) {
                if (data.Habilidades.length > 0)
                    data.Habilidades.forEach((element) => {
                        data[element.skill] = true;
                        var catpricetype =
                            element.skill + "_" + element.priceType;
                        if (element.subcategory)
                            catpricetype =
                                element.subcategory + "_" + element.priceType;
                        data[catpricetype] = Number(element.rate);
                    });
                else {
                    alert("Debes registrar al menos una habilidad");
                    return;
                }
            } else {
                alert("Debes registrar al menos una habilidad");
                return;
            }
            //guardar el propio id como property para que sirva para el paginador luego.
            data.docId = this.authService.user.uid;
            // data.Generales.FirstName = this.data.name;
            // data.Generales.LastName = this.data.lastname;
            // data.Generales.Cellphone = this.data.cellphone;
            data.taskerStatus="Completed";
            this._fuseSplashScreenService.show();
            this.firestore
                .collection("Providers")
                .doc(this.authService.user.uid)
                .set(data, { merge: true })
                .then(() => {
                    this.firestore
                        .collection("userData")
                        .doc(this.authService.user.uid)
                        .set(
                            {
                                isTasker: true,
                                currentRole: "isTasker",
                                taskerStatus: "Completed"
                            },
                            { merge: true }
                        )
                        .then(() => {
                            this._fuseSplashScreenService.hide();
                            this.router.navigate(["profile/profile"]);
                        });
                });
        } catch (e) {
            alert("No se pudo guardar la informacion del tareador " + e);
            // this.router.navigate(["mail/inbox"]);
        }
    }
}
