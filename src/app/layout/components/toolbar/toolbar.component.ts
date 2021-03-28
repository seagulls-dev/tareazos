import {
    Component,
    OnDestroy,
    OnInit,
    ViewEncapsulation,
    Input,
} from "@angular/core";
import { Subject } from "rxjs";
import { takeUntil, startWith } from "rxjs/operators";
import { TranslateService } from "@ngx-translate/core";
import * as _ from "lodash";

import { FuseConfigService } from "@fuse/services/config.service";
import { FuseSidebarService } from "@fuse/components/sidebar/sidebar.service";

import { navigation } from "app/navigation/navigation";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Service } from "./service";
import {
    trigger,
    state,
    transition,
    style,
    animate,
} from "@angular/animations";
import { MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";
import { MatDialog } from "@angular/material/dialog";
import { FormDialogComponent as ClienteFormDialogComponent } from "app/main/clientes/add/form.component";
import { fuseAnimations } from "@fuse/animations";
import { LoginComponent } from "app/main/authentication/login/login.component";
import { AuthService } from "app/services/auth.service";
import { Router } from "@angular/router";
import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';

@Component({
    selector: "toolbar",
    templateUrl: "./toolbar.component.html",
    styleUrls: ["./toolbar.component.scss"],
    encapsulation: ViewEncapsulation.None,
    animations: [
        fuseAnimations,
        trigger("childAnimation", [
            state("true", style({ width: "55vw" })),
            state("false", style({ width: "400px" })),
            transition("false <=> true", animate(200)),
        ]),
    ],
})
export class ToolbarComponent implements OnInit, OnDestroy {
    fuseConfig: any;
    horizontalNavbar: boolean;
    rightNavbar: boolean;
    hiddenNavbar: boolean;
    languages: any;
    navigation: any;
    selectedLanguage: any;
    userStatusOptions: any[];
    @Input() pagos: any = [];
    data = [];
    filteredStates: any = [];
    SelectedClient: any = null;
    form: FormGroup;
    isOpen = false;
    dialogRef: any;
    catalogos: any;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FuseSidebarService} _fuseSidebarService
     * @param {TranslateService} _translateService
     * @param {Service} _service
     * @param {FormBuilder} _formBuilder
     * @param {MatDialog} _matDialog
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _fuseSidebarService: FuseSidebarService,
        private _translateService: TranslateService,
        private _service: Service,
        private _formBuilder: FormBuilder,
        public _matDialog: MatDialog,
        public authService: AuthService,
        public router: Router
    ) {
        // Set the defaults
        this.form = this.createForm();
        this.userStatusOptions = [
            {
                title: "Online",
                icon: "icon-checkbox-marked-circle",
                color: "#4CAF50",
            },
            {
                title: "Away",
                icon: "icon-clock",
                color: "#FFC107",
            },
            {
                title: "Do not Disturb",
                icon: "icon-minus-circle",
                color: "#F44336",
            },
            {
                title: "Invisible",
                icon: "icon-checkbox-blank-circle-outline",
                color: "#BDBDBD",
            },
            {
                title: "Offline",
                icon: "icon-checkbox-blank-circle-outline",
                color: "#616161",
            },
        ];

        this.languages = [
            {
                id: "en",
                title: "English",
                flag: "us",
            },
            {
                id: "tr",
                title: "Turkish",
                flag: "tr",
            },
        ];

        this.navigation = navigation;

        // Set the private defaults
        this._unsubscribeAll = new Subject();

        this.form
            .get("idCliente")
            .valueChanges.pipe(startWith(""))
            .subscribe((res) => {
                this.filteredStates = this._filterStates(res);
            });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Subscribe to the config changes
        this._fuseConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((settings) => {
                this.fuseConfig = settings;
                this.horizontalNavbar =
                    settings.layout.navbar.position === "top";
                this.rightNavbar = settings.layout.navbar.position === "right";
                this.hiddenNavbar = settings.layout.navbar.hidden === true;
            });

        this._service.getCatalogos().then((result) => {
            this.catalogos = result;
        });

        // Set the selected language from default languages
        this.selectedLanguage = _.find(this.languages, {
            id: this._translateService.currentLang,
        });

        this.changeOpcion("todos");
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
     * Create model form
     *
     * @returns {FormGroup}
     */
    createForm(): FormGroup {
        return this._formBuilder.group({
            idCliente: [""],
            opcion: ["todos"],
        });
    }

    displayFn(user: any): string {
        if (user === null) {
            return user;
        }

        if (typeof user === "object") {
            return user.titulo;
        } else {
            return user;
        }
    }

    private _filterStates(value: any): any[] {
        if (value !== undefined && value !== null) {
            const filterValue =
                typeof value === "object"
                    ? value.titulo.toLowerCase()
                    : value.toLowerCase();

            return this.data.filter((item) =>
                (item.titulo + " " + item.subtitulo + " " + item.descripcion)
                    .toLowerCase()
                    .includes(filterValue)
            );
        }
    }

    onFocus() {
        this.isOpen = true;
        this._fuseConfigService.setConfig({
            layout: { navbar: { secondaryBackground: "navy-dark-900" } },
        });
    }

    onBlur() {
        this.SelectedClient = "";
        this.form.get("idCliente").setValue("");

        if (this.SelectedClient === null || this.SelectedClient === "") {
            this.isOpen = false;
            this._fuseConfigService.setConfig({
                layout: { navbar: { secondaryBackground: "navy-dark-500" } },
            });
        }
    }

    public changeOpcion(id): void {
        this.data = [];
        this.filteredStates = [];
        this._service.getAutocomplete(id).then((result) => {
            this.data = result;
        });
    }

    selected(event: MatAutocompleteSelectedEvent): void {
        var model = this.data.filter((x) => x.id === event.option.value.id)[0];
        if (event.option.value.icono === "person") {
            this.dialogRef = this._matDialog.open(ClienteFormDialogComponent, {
                panelClass: "form-dialog",
                width: "400px",
                data: {
                    model: model.data,
                    action: "edit",
                    catalogo: this.catalogos,
                },
            });
        }

        this.dialogRef.afterClosed().subscribe((response: any) => {
            if (response === null) {
                return;
            }

            const actionType: string = response[0];

            if (actionType === "delete") {
                this.SelectedClient = "";
                this.data.splice(this.data.indexOf(model), 1);
                this.form.get("idCliente").setValue("");
                return;
                // this.data.filter(x => x.id === event.option.value.id)[0].data = response;
            }
        });
    }

    /**
     * Toggle sidebar open
     *
     * @param key
     */
    toggleSidebarOpen(key): void {
        this._fuseSidebarService.getSidebar(key).toggleOpen();
    }

    /**
     * Search
     *
     * @param value
     */
    search(value): void {
        // Do your search here...
    }

    /**
     * Set the language
     *
     * @param lang
     */
    setLanguage(lang): void {
        // Set the selected language for the toolbar
        this.selectedLanguage = lang;

        // Use the selected language for translations
        this._translateService.use(lang.id);
    }

    btnLogin() {
        const dialogRef = this._matDialog.open(LoginComponent, {
            width: "400px",
            maxHeight: "86%",
        });

        dialogRef.afterClosed().subscribe((result) => {
        });
    }

    home() {
        /*  if (this.authService.isLoggedIn) {
            this.router.navigate(['/mail/inbox']);
        } else { */
        this.router.navigate(["/home"]);
        
        // }
    }

    async logout() {
        await this.authService.logout();
        this.authService.asyncUser("hi");
    }
}
