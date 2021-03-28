import {
    Component,
    Inject,
    OnDestroy,
    OnInit,
    ViewEncapsulation,
} from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Platform } from "@angular/cdk/platform";
import { Subject } from "rxjs";

import { FuseConfigService } from "@fuse/services/config.service";
import { FuseSidebarService } from "@fuse/components/sidebar/sidebar.service";
import { FuseSplashScreenService } from "@fuse/services/splash-screen.service";
import { CatalogService } from "app/services/catalog.service";

import { fuseAnimations } from "@fuse/animations";
import { MatDialog } from "@angular/material/dialog";
import { LoginComponent } from "app/main/authentication/login/login.component";
import { AuthService } from "app/services/auth.service";
import { AngularFirestore } from "angularfire2/firestore";
import { NotificationService } from "app/services/notifications.service";
import { Router } from "@angular/router";
import { SendMailDialogComponent } from "app/shared/components/send-mail-dialog/send-mail-dialog.component";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
})
export class HomeComponent implements OnInit, OnDestroy {
    showMenu = false;
    fuseConfig: any;
    navigation: any;
    showForms: boolean = false;
    Formid: any;
    ServicesList: any = [];
    slides: any = [[]];
    CAROUSEL_BREAKPOINT = 960;
    carouselDisplayMode = "multiple";
    reviews: any = [];
    appdownloadUrl:string;
    isJsLoaded = false;
    chunk(arr, chunkSize) {
        let R = [];
        for (let i = 0, len = arr.length; i < len; i += chunkSize) {
            R.push(arr.slice(i, i + chunkSize));
        }
        return R;
    }

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {DOCUMENT} document
     * @param {FuseConfigService} _fuseConfigService
     * @param {FuseNavigationService} _fuseNavigationService
     * @param {FuseSidebarService} _fuseSidebarService
     * @param {FuseSplashScreenService} _fuseSplashScreenService
     * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
     * @param {Platform} _platform
     * @param {TranslateService} _translateService
     */
    constructor(
        @Inject(DOCUMENT) private document: any,
        private _fuseConfigService: FuseConfigService,
        private _fuseSidebarService: FuseSidebarService,
        private _fuseSplashScreenService: FuseSplashScreenService,
        private _platform: Platform,
        private CatalogService: CatalogService,
        public _matDialog: MatDialog,
        public authService: AuthService,
        private firestore: AngularFirestore,
        private NotificationService: NotificationService,
        private router: Router
    ) {
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                style: "home",
                navbar: {
                    hidden: true,
                },
                toolbar: {
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

        // Add is-mobile class to the body if the platform is mobile
        if (this._platform.ANDROID || this._platform.IOS) {
            this.document.body.classList.add("is-mobile");

            if(this._platform.ANDROID)
            this.appdownloadUrl = 'https://play.google.com/store/apps/details?id=com.tareazos.tareazosApp'

            if(this._platform.IOS)
            this.appdownloadUrl = 'https://apps.apple.com/us/app/id1530751230';
        }

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.loadScript();
        this.CatalogService.QueryItems("catalog", "name", "SERVICES").subscribe(
            (data) => {
                if (data.length > 0) {
                    this.CatalogService.QueryItems2(
                        "catalog/" + data[0].key + "/items",
                        "enabled",
                        true
                    ).subscribe((res) => {
                        (this.ServicesList = res.sort((a, b) =>
                            a.description > b.description ? 1 : -1
                        )),
                            4;
                        this.slides = this.chunk(this.ServicesList, 4);
                    });
                }
            }
        );
    }

    public loadScript() {
        let srcs = [
            "/assets/themekit/scripts/jquery.min.js",
            "/assets/themekit/scripts/main.js",
            "/assets/themekit/scripts/parallax.min.js",
            "/assets/themekit/scripts/glide.min.js",
            "/assets/themekit/scripts/magnific-popup.min.js",
            "/assets/themekit/scripts/tab-accordion.js",
            "/assets/themekit/scripts/imagesloaded.min.js",
            "/assets/themekit/scripts/progress.js",
            "/assets/themekit/scripts/custom.js",
            "/assets/themekit/scripts/contact-form/contact-form.js",
        ];

        let body = <HTMLDivElement>document.body;
        for (let item of srcs) {
            let script = document.createElement("script");
            script.innerHTML = "";
            script.src = item;
            script.async = true;
            script.defer = true;
            body.appendChild(script);
        }
        this.isJsLoaded = true;
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
    LoadForm(formtitle) {
        // Por el momento se comenta y se muestra dialogo de pronto
        // this.showForms = true;
        // this.Formid = formtitle;
        var minWidth = "200px";
        var maxWidth = "400px";
        var minHeight = "200px";
        var maxHeight = "400px";
        if (window.innerWidth <= 800 && window.innerHeight <= 600) {
            minWidth = "80vw";
            maxWidth = "80vw";
            maxHeight = "100%";
        }
        if (this._platform.ANDROID || this._platform.IOS) {
            minWidth = "80vw";
            maxWidth = "80vw";
            maxHeight = "100%";
        }

        const dialogRef = this._matDialog.open(SendMailDialogComponent, {
            minWidth: minWidth,
            maxWidth: maxWidth,
            minHeight: minHeight,
            maxHeight: maxHeight,
        });

        dialogRef.componentInstance.message =
            "Descarga el app para crear tareas y encontrar Tareadores cerca de ti.";
    }

    Clean() {
        this.showForms = false;
    }

    /**
     * Toggle sidebar open
     *
     * @param key
     */
    toggleSidebarOpen(key): void {
        this._fuseSidebarService.getSidebar(key).toggleOpen();
    }

    btnLogin() {
        var width = "400px";
        var height = "";
        if (this._platform.ANDROID || this._platform.IOS) {
            width = "100vw";
            height = "100vh";
        }

        const dialogRef = this._matDialog.open(LoginComponent, {
            width: width,
            maxWidth: width,
            height: height,
            maxHeight: height,
        });

        dialogRef.afterClosed().subscribe(() => {
            if (this.authService.isLogged) {
                this.router.navigate(["/mail/inbox"]);
            }
        });
    }

    GenerateTaskTitle(request) {
        if (request.category == "Mantenimiento de Aire") {
            return (request.title =
                request.title + " " + request["Mantenimiento de Aire"].brand);
        }
        if (request.category == "Pintura") {
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

            dialogRef.afterClosed().subscribe((result) => {
                //Initial status of all requests to Open
                data.status = "Open";
                data.category = data.category;
                data.title = this.GenerateTaskTitle(data);
                data.authorid = this.authService.user.uid;

                this.firestore
                    .collection("userData")
                    .doc(this.authService.user.uid)
                    .get()
                    .subscribe((res) => {
                        if (res.exists) {
                            var user = res.data();
                            data.authorname = user.name + " " + user.lastname;

                            this.firestore
                                .collection("Requests")
                                .add(data)
                                .then((data) => {
                                    this.NotificationService.openSnackBar(
                                        "Solicitud Enviada Correctamente",
                                        "Cerrar"
                                    );
                                    this.CatalogService.updateDocWithFirestore(
                                        "Requests/" + data.id,
                                        "docId",
                                        data.id
                                    ).then((_) => {
                                        window.location.assign(
                                            "/mail/inbox/" + data.id
                                        );
                                    });

                                    // this.router.navigate(['/mail/inbox/',{requestId:data.id}]);
                                    // this._location.go('apps/mail/inbox/' + requesId);
                                });
                        }
                    });
            });
        } else {
            //Initial status of all requests to Open
            if (data.Request.Budget)
                data.Request.Budget = Number(data.Request.Budget);
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
                    this.CatalogService.updateDocWithFirestore(
                        "Requests/" + data.id,
                        "docId",
                        data.id
                    ).then((_) => {
                        window.location.assign("/mail/inbox/" + data.id);
                    });

                    // this.router.navigate(['/mail/inbox/',{requestId:data.id}]);
                    // this._location.go('apps/mail/inbox/' + requesId);
                });
        }
    }
    Opentab(){
        if(this.appdownloadUrl)
        window.open(this.appdownloadUrl);
        else
        window.open('https://play.google.com/store/apps/details?id=com.tareazos.tareazosApp');
    }

    async logout() {
        await this.authService.logout();
        this.authService.asyncUser("hi");
    }
}
