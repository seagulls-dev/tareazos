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

import { fuseAnimations } from "@fuse/animations";
import { MatDialog } from "@angular/material/dialog";
import { LoginComponent } from "app/main/authentication/login/login.component";
import { AuthService } from "app/services/auth.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-aviso-legal",
    templateUrl: "./aviso-legal.component.html",
    styleUrls: ["./aviso-legal.component.scss"],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
})
export class AvisoLegalComponent implements OnInit, OnDestroy {
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
        private _platform: Platform,
        public _matDialog: MatDialog,
        public authService: AuthService,
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
        window.scrollTo(0, 0);
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
        if (window.innerWidth <= 800 && window.innerHeight <= 600) {
            width = "100vw";
            height = "100vh";
        }
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

    async logout() {
        await this.authService.logout();
        this.authService.asyncUser("hi");
    }
}
