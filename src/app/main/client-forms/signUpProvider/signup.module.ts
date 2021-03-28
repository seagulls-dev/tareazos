import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { FuseSharedModule } from '@fuse/shared.module';
import { SignupLandingComponent } from './signup-landing.component';
import {SignUpComponent} from './signup.component';

const routes = [
    {
        path     : 'auth/login-2',
        component: SignupLandingComponent
    }
];

@NgModule({
    declarations: [
        SignupLandingComponent,
        SignUpComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        FuseSharedModule
    ]
})
export class Login2Module
{
}
