import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { TranslateModule } from "@ngx-translate/core";
import "hammerjs";

import { FuseModule } from "@fuse/fuse.module";
import { FuseSharedModule } from "@fuse/shared.module";
import {
    FuseProgressBarModule,
    FuseSidebarModule,
    FuseThemeOptionsModule,
} from "@fuse/components";

import { fuseConfig } from "app/fuse-config";

import { AppComponent } from "app/app.component";
import { LayoutModule } from "app/layout/layout.module";
import { SampleModule } from "app/main/sample/sample.module";

import { AngularFireModule } from "@angular/fire";
import { environment as development } from "../environments/environment";
import { environment as production } from "../environments/environment.prod";
import { AngularFirestore } from "@angular/fire/firestore";
import { MAT_DATE_FORMATS } from "@angular/material/core";
import { MatPaginatorModule } from "@angular/material/paginator";
import { ClientesModule } from "./main/clientes/clientes.module";
import { CatalogosModule } from "./main/catalogos/catalogos.module";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { FakeDbService } from "./fake-db/fake-db.service";
import { CatalogService } from "app/services/catalog.service";
import {
    NotificationService,
    BottomSheetComponent,
} from "app/services/notifications.service";
import { QuestionControlService } from "app/services/question-control.service";
import { ExporterService } from "app/services/exporter.service";
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { MaterialModule } from "./material.module";
import { ClientFormsModule } from "./main/client-forms/client-forms.module";
import { MailModule } from "./main/mail/mail.module";
import { ProfileModule } from "./main/profile/profile.module";
import { LoginModule } from "./main/authentication/login/login.module";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AuthService } from "./services/auth.service";
import { SharedModule } from "./shared/shared.module";
import { HomeComponent } from "./home/home.component";
import { Service } from "./main/client-forms/service";
import { AngularFireFunctionsModule } from "@angular/fire/functions";

import { MatTableModule } from "@angular/material/table";
import { NosotrosComponent } from "./home/nosotros/nosotros.component";
import { AvisoLegalComponent } from "./home/aviso-legal/aviso-legal.component";
import { PoliticasComponent } from "./home/politicas/politicas.component";
import { TerminosCondicionesComponent } from "./home/terminos/terminos.component";
import { CargosComisionesComponent } from "./home/cargos-comisiones/cargos-comisiones.component";
import { UsersModule } from "./main/users/users.module";
import { FundsRequestedModule } from "./main/fundsRequested/fundsRequested.module";
import { TasksModule } from "./main/tasks/tasks.module";
const appRoutes: Routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full",
    },
    {
        path: "home",
        component: HomeComponent,
        resolve: {
            contacts: Service,
        },
    },
    {
        path: "nosotros",
        component: NosotrosComponent,
        resolve: {
            contacts: Service,
        },
    },
    {
        path: "aviso-legal",
        component: AvisoLegalComponent,
        resolve: {
            contacts: Service,
        },
    },
    {
        path: "cargos-comisiones",
        component: CargosComisionesComponent,
        resolve: {
            contacts: Service,
        },
    },
    {
        path: "politicas",
        component: PoliticasComponent,
        resolve: {
            contacts: Service,
        },
    },
    {
        path: "terminos-condiciones",
        component: TerminosCondicionesComponent,
        resolve: {
            contacts: Service,
        },
    },
    {
        path: "forms",
        loadChildren:
            "./main/client-forms/client-forms.module#ClientFormsModule",
    },
    {
        path: "catalogos",
        loadChildren: "./main/catalogos/catalogos.module#CatalogosModule",
    },
    {
        path: "scrumboard",
        loadChildren: "./main/scrumboard/scrumboard.module#ScrumboardModule",
    },
    {
        path: "mail",
        loadChildren: "./main/mail/mail.module#MailModule",
    },
    {
        path: "profile",
        loadChildren: "./main/profile/profile.module#ProfileModule",
    },
    {
        path: "users",
        loadChildren: "./main/users/users.module#UsersModule",
    },
    {
        path: "fundsRequested",
        loadChildren:
            "./main/fundsRequested/fundsRequested.module#FundsRequestedModule",
    },
    {
        path: "tasks",
        loadChildren: "./main/tasks/tasks.module#TasksModule",
    },
];

export const MY_FORMATS = {
    parse: {
        dateInput: "DD/MM/YYYY",
    },
    display: {
        dateInput: "DD/MM/YYYY",
        monthYearLabel: "MMM YYYY",
        dateA11yLabel: "DD/MM/YYYY",
        monthYearA11yLabel: "MM YYYY",
    },
};

@NgModule({
    declarations: [AppComponent, BottomSheetComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        // RouterModule.forRoot(appRoutes),
        RouterModule.forRoot(appRoutes),
        MatTableModule,
        TranslateModule.forRoot(),
        InMemoryWebApiModule.forRoot(FakeDbService, {
            delay: 0,
            passThruUnknownUrl: true,
        }),
        // Material moment date module
        MatMomentDateModule,

        // Material
        MaterialModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        SampleModule,
        ClientesModule,
        CatalogosModule,
        ClientFormsModule,
        MailModule,
        ProfileModule,
        SharedModule,
        AngularFireStorageModule,
        AngularFireModule.initializeApp(development.firebase),
        AngularFireAuthModule,
        AngularFireFunctionsModule,
        LoginModule,
        // Range Slider

        // Pagination
        MatPaginatorModule,
    ],
    providers: [
        AngularFirestore,
        { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
        ExporterService,
        CatalogService,
        QuestionControlService,
        AngularFireDatabase,
        NotificationService,
        AuthService,
    ],
    entryComponents: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
