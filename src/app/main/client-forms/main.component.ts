import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { Subject } from "rxjs";
import { fuseAnimations } from "@fuse/animations";
import { FuseConfigService } from "@fuse/services/config.service";
import { CatalogService } from "app/services/catalog.service";
import { NotificationService } from "app/services/notifications.service";
import { AngularFireStorage } from "@angular/fire/storage";
import { AngularFirestore } from "@angular/fire/firestore";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Location } from "@angular/common";
import { AuthService } from "../../services/auth.service";
import { LoginComponent } from "../authentication/login/login.component";
import { MatDialog } from "@angular/material/dialog";
@Component({
    selector: "client-forms",
    templateUrl: "./main.component.html",
    styleUrls: ["./main.component.scss"],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
})
export class ClientFormsComponent implements OnInit, OnDestroy {
    file: any;
    filename: string = "";
    ServicesList: any;
    finalObject: any = {};
    categories: any[];
    courses: any[];
    coursesFilteredByCategory: any[];
    filteredCourses: any[];
    currentCategory: string;
    searchTerm: string;
    showForms: boolean = false;
    showRequestDetail: boolean = false;
    requestid: string;
    Formid: any;
    // Private
    private _unsubscribeAll: Subject<any>;

    constructor(
        private CatalogService: CatalogService,
        private NotificationService: NotificationService,
        private storage: AngularFireStorage,
        private firestore: AngularFirestore,
        private _fuseConfigService: FuseConfigService,
        private route: ActivatedRoute,
        private router: Router,
        private _location: Location,
        private authService: AuthService,
        public _matDialog: MatDialog
    ) {
        this._unsubscribeAll = new Subject();
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true,
                },
                toolbar: {
                    background: "fuse-transparent",
                },
            },
        };

        this.currentCategory = "all";
        this.searchTerm = "";

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    divScroll(e) {
        if (document.getElementById("academy-courses").scrollTop > 0) {
            //window.innerHeight) {
            this._fuseConfigService.config = {
                layout: {
                    toolbar: {
                        background: "fuse-white border-toolbar",
                    },
                },
            };
        } else {
            this._fuseConfigService.config = {
                layout: {
                    toolbar: {
                        background: "fuse-transparent",
                    },
                },
            };
        }
    }

    LoadForm(formtitle) {
        this.showForms = true;
        this.Formid = formtitle;
    }
    Clean() {
        this.showForms = false;
    }

    ngOnInit() {
        this.CatalogService.QueryItems("catalog", "name", "SERVICES").subscribe(
            (data) => {
                if (data.length > 0)
                    this.ServicesList = this.CatalogService.QueryItems2(
                        "catalog/" + data[0].key + "/items",
                        "enabled",
                        true
                    );
            }
        );
        //recorre cada stepper, busca las preguntas e inicializa el form
    }
    //esto hay que pasarlo a firebase database o function para que al habilitar una categoría nueva se pueda controlar
    GenerateTaskTitle(request) {
        if (request.title == "Mantenimiento de Aire") {
            return (request.title =
                request.title + " " + request["Mantenimiento de Aire"].brand);
        }
        if (request.title == "Pintura") {
            return (request.title =
                request.title +
                " " +
                request["Pintura"].paintingArea +
                " " +
                request["Pintura"].squareMeters +
                "Mts2");
        } else return request.title;
    }

    RecieveRequestForm(data) {
        if (!this.authService.isLogged) {
            const dialogRef = this._matDialog.open(LoginComponent, {
                width: "400px",
                height: "85vh",
            });

            dialogRef.afterClosed().subscribe((result) => {});
        } else {
            //Initial status of all requests to Open
            data.status = "Open";
            data.category = data.title;
            data.title = this.GenerateTaskTitle(data);
            data.authorid = this.authService.user.uid;
            data.authorname =
                this.authService.user.name +
                " " +
                this.authService.user.lastname;

            this.firestore
                .collection("Requests")
                .add(data)
                .then((data) => {
                    this.NotificationService.openSnackBar(
                        "Solicitud Enviada Correctamente",
                        "Cerrar"
                    );

                    this.router.navigate([
                        "/mail/inbox/",
                        { requestId: data.id },
                    ]);
                    // this._location.go('apps/mail/inbox/' + requesId);
                });
        }
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
}
