import { Component, OnInit, ViewEncapsulation, Input } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { fuseAnimations } from "@fuse/animations";
import { MatDialogRef } from "@angular/material/dialog";
import { AuthService } from "app/services/auth.service";
import { NotificationService } from "app/services/notifications.service";
import { FuseConfigService } from '@fuse/services/config.service';
import { Router } from '@angular/router';

@Component({
    selector: "login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    @Input()
    isSignIn = true;

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<LoginComponent>,
        private authService: AuthService,
        private NotificationService: NotificationService,
        private router: Router
    ) {
        this._fuseConfigService.config = {
            layout: {
                navbar   : {
                    hidden: true
                },
                toolbar  : {
                    hidden: true
                },
                footer   : {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.loginForm = this._formBuilder.group({
            email: ["", [Validators.required, Validators.email]],
            password: ["", Validators.required],
        });
    }

    async login() {
        await this.authService
            .login(this.loginForm.value.email, this.loginForm.value.password)
            .then((res) => {
                if(this.dialogRef.id)
                this.dialogRef.close();
                else
                this.router.navigate(["profile/profile"]);
            })
            .catch((err) => {
                this.NotificationService.openSnackBar(err.message, "Cerrar");
            });
    }

    async loginWithGoogle() {
        await this.authService.loginWithGoogle();
        this.dialogRef.close();
        this.authService.asyncUser("hi");
    }

    cerrar() {
        this.dialogRef.close();
    }

    signIn() {
        this.isSignIn = !this.isSignIn;
    }
}
