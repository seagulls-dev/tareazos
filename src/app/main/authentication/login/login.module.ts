import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDivider, MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { FuseSharedModule } from "@fuse/shared.module";
import { LoginComponent } from "./login.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDialogModule } from "@angular/material/dialog";
import {PasswordResetComponent} from '../password-reset/password-reset.component';
const routes = [
    {
        path: "auth/login",
        component: LoginComponent,
        
    },
    {
        path:"auth/reset-password",
        component: PasswordResetComponent
    }
];

@NgModule({
    declarations: [LoginComponent,PasswordResetComponent],
    imports: [
        RouterModule.forChild(routes),
        MatDividerModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatToolbarModule,
        MatDialogModule,
        FuseSharedModule,
    ],
    entryComponents: [LoginComponent],
    exports: [LoginComponent],
})
export class LoginModule { }
