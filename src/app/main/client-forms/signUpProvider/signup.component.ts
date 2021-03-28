import { Component, OnInit, ViewEncapsulation, Input } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginComponent } from "app/main/authentication/login/login.component";
import { fuseAnimations } from "@fuse/animations";
import { Router } from "@angular/router";
import { NotificationService } from "app/services/notifications.service";
import { AuthService } from "app/services/auth.service";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";

import { Platform } from "@angular/cdk/platform";
import { AlertDialogComponent } from "app/shared/components/alert-dialog/alert-dialog.component";


@Component({
    selector: "signup",
    templateUrl: "./signup.component.html",

    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
})
export class SignUpComponent implements OnInit {
    loginForm: FormGroup;

    @Input()
    isSignIn = false;

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<SignUpComponent>,
        private authService: AuthService,
        private NotificationService: NotificationService,
        public _matDialog: MatDialog,
        public router: Router,
        public _platform: Platform
    ) {}

    ngOnInit(): void {
        this.loginForm = this._formBuilder.group({
            name: ["", [Validators.required]],
            lastname: ["", Validators.required],
            cellphone: ["", Validators.required],
            email: ["", [Validators.required, Validators.email]],
            password: ["", Validators.required],
            isTasker: [""],
        });

        this.loginForm.patchValue({ isTasker: true });
        this.loginForm.get("isTasker").disable();
    }

    btnLogin() {
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

        const dialogRef = this._matDialog.open(LoginComponent, {
            width: width,
            maxWidth: width,
            // height: height,
            maxHeight: height,
        });

        dialogRef.afterClosed().subscribe(() => {
            if (this.authService.isLogged) {
                this.router.navigate(["/profile/profile"]);
            }
        });
    }

    async loginWithGoogle() {
        await this.authService.loginWithGoogle().then((data) => {
            // this.router.navigate(["mail/inbox"]);
            this.showAlert();
        });
    }

    async signUp() {
        await this.authService
            .register(this.loginForm.value)
            .then((res) => {
                if (this.authService.isLogged) {
                    if (this.loginForm.get("isTasker").value) {    
                        this.router.navigate(["forms/signup-provider"]);
                    } else {
                        this.showAlert();
                        this.router.navigate(["home"]);
                    }
                } else {
                    this.NotificationService.openSnackBar(
                        "No se pudo realizar el registro",
                        "Cerrar"
                    );
                }
            })
            .catch((err) => {
                this.NotificationService.openSnackBar(err.message, "Cerrar");
            });
        this.authService.asyncUser("hi");
    }

    signIn() {
        this.isSignIn = !this.isSignIn;
    }

    showAlert() {
        var minWidth = "380px";
        var maxWidth = "380px";
        var minHeight = "190px";
        var maxHeight = "190px";
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

        var dialogRef1 = this._matDialog.open(AlertDialogComponent, {
            minWidth: minWidth,
            maxWidth: maxWidth,
            minHeight: minHeight,
            maxHeight: maxHeight,
        });

        dialogRef1.componentInstance.message =
            "Gracias por registrarte. Tu cuenta se encuentra en proceso de aprobación. Te notificaremos tan pronto puedas utilizar tu cuenta de Tareazos";

        dialogRef1.componentInstance.title = "Confirmación registro"

        dialogRef1.afterClosed().subscribe(() => {
            this.router.navigate(["home"]);
        });
    }
}
