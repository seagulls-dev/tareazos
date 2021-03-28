import { Component, OnInit } from '@angular/core';
import { FuseConfigService } from '@fuse/services/config.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { AuthService } from 'app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertDialogComponent } from 'app/shared/components/alert-dialog/alert-dialog.component';
import { NotificationService } from "app/services/notifications.service";
@Component({
  selector: 'passwordreset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {

  frmSetNewPassword: FormGroup;
  loginForm: FormGroup;
  code: string;
  constructor(
    private _fuseConfigService: FuseConfigService,
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<LoginComponent>,
    private authService: AuthService,
    private route: ActivatedRoute, private router: Router,
    private NotificationService: NotificationService,
  ) {
    this._fuseConfigService.config = {
      layout: {
        navbar: {
          hidden: true
        },
        toolbar: {
          hidden: true
        },
        footer: {
          hidden: true
        },
        sidepanel: {
          hidden: true
        }
      }
    };
  }

  ngOnInit(): void {


    this.code = this.route.snapshot.queryParams['oobCode'];
    if (this.code)
      this.frmSetNewPassword = this._formBuilder.group({
        password: [null, [Validators.required]],
        confirmPassword: [null, [Validators.required]]
      });
    else
      this.loginForm = this._formBuilder.group({
        email: ["", [Validators.required, Validators.email]],
      });

      this.authService.validateCode(this.code).then(value=>{
          console.log(value);
      }).catch(error=>{
        alert("El código no es válido");
        this.router.navigate(["home"]);
      })

  }

  sendPasswordResetEmail() {
    this.authService.sendPasswordResetEmail(this.loginForm.value.email).then(() => {
      alert("Te hemos enviado un correo con las instrucciones para cambiar tu contraseña, si no encuentras el correo en tu bandeja de entrada recuerda revisar tu bandeja de spam o mensajes no deseados.");
      this.router.navigate(["auth/login"]);
    }
    ).catch(error=>{
      this.NotificationService.openSnackBar('El correo no es válido o no existe','cerrar')
    });
  }

  setPassword() {
    const password = this.frmSetNewPassword.controls['password'].value;
    const confirmPassword = this.frmSetNewPassword.controls['confirmPassword'].value;

    if (password !== confirmPassword) {
     this.NotificationService.openSnackBar("La contraseña y la confirmación no son iguales",'Cerrar')
      return;
    }


    this.authService.confirmPasswordRest(this.code, password).then(() => {
      alert('Contraseña Actualizada Correctamente');
      this.router.navigate(["auth/login"]);
    }).catch(error => {
      alert(error);
    });



  }

}
