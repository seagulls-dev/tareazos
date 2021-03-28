import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { FuseSharedModule } from "@fuse/shared.module";
import {
    FuseConfirmDialogModule,
    FuseSidebarModule,
    FuseProgressBarModule,
} from "@fuse/components";
import { ClientFormsComponent } from "./main.component";
import { FormDialogComponent } from "./add/form.component";
import { Service } from "./service";

import { NgxDnDModule } from "@swimlane/ngx-dnd";
import { AngularFireStorage } from "@angular/fire/storage";
import { DynamicfiltersComponent } from "app/directives/dynamicfilters/dynamicfilters.component";
import "firebase/storage";
import "firebase/firestore";
import { BecomeProviderComponent } from "./become-provider/become-provider.component";
import {
    ListRequestsComponent,
    OfferDialogComponent,
} from "./list-requests/list-requests.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RequestDetailComponent } from "./list-requests/request-detail/request-detail.component";
import { SignupLandingComponent as BecomeproviderSignUp } from "./signUpProvider/signup-landing.component";
import { SignUpComponent } from "./signUpProvider/signup.component";
import { AuthService } from "../../services/auth.service";
import { LoginModule } from "../authentication/login/login.module";
import { SharedModule } from "../../shared/shared.module";
import { HomeComponent } from "app/home/home.component";
import { MDBBootstrapModulesPro } from "@fuse/modules/ng-uikit-pro-standard";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatMenuModule } from "@angular/material/menu";
import { AuthGuard } from "app/security/guards/auth.guard";
import { NosotrosComponent } from "app/home/nosotros/nosotros.component";
import { AvisoLegalComponent } from "app/home/aviso-legal/aviso-legal.component";
import { PoliticasComponent } from "app/home/politicas/politicas.component";
import { TerminosCondicionesComponent } from "app/home/terminos/terminos.component";
import { CargosComisionesComponent } from "app/home/cargos-comisiones/cargos-comisiones.component";

const routes: Routes = [
    {
        path: "forms/list",
        component: ClientFormsComponent,
        canActivate: [AuthGuard],
        resolve: {
            contacts: Service,
        },
    },
    {
        path: "forms/new",
        component: FormDialogComponent,
        canActivate: [AuthGuard],
        resolve: {
            contacts: Service,
        },
    },
    {
        path: "forms/signup-provider",
        component: BecomeProviderComponent,
        canActivate: [AuthGuard],
        resolve: {
            contacts: Service,
        },
    },
    {
        path: "forms/signup",
        component: BecomeproviderSignUp,
        resolve: {
            contacts: Service,
        },
    },
    {
        path: "forms/list-requests",
        component: ListRequestsComponent,
        canActivate: [AuthGuard],
        resolve: {
            contacts: Service,
        },
    },
];

@NgModule({
    declarations: [
        ClientFormsComponent,
        HomeComponent,
        NosotrosComponent,
        AvisoLegalComponent,
        CargosComisionesComponent,
        PoliticasComponent,
        TerminosCondicionesComponent,
        FormDialogComponent,
        BecomeProviderComponent,
        BecomeproviderSignUp,
        ListRequestsComponent,
        OfferDialogComponent,
        RequestDetailComponent,
        DynamicfiltersComponent,
        SignUpComponent,
    ],
    imports: [
        RouterModule.forChild(routes),
        NgxDnDModule,
        FormsModule,
        ReactiveFormsModule,
        FuseSharedModule,
        FuseConfirmDialogModule,
        FuseSidebarModule,
        FuseProgressBarModule,
        MatIconModule,
        MatDialogModule,
        MatToolbarModule,
        MatSidenavModule,
        MatMenuModule,
        LoginModule,
        SharedModule,
        MDBBootstrapModulesPro,
    ],
    providers: [
        {
            provide: MatDialogRef,
            useValue: {},
        },
        Service,
        AngularFireStorage,
        AuthService,
    ],
    entryComponents: [FormDialogComponent, OfferDialogComponent],
})
export class ClientFormsModule {}
