import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FuseSharedModule } from "@fuse/shared.module";
import { FuseConfirmDialogModule, FuseSidebarModule } from "@fuse/components";
import { ClientesComponent } from "./main.component";
import { FormDialogComponent } from "./add/form.component";
import { Service } from "./service";

import { MaterialModule } from "app/material.module";
import { NgxDnDModule } from "@swimlane/ngx-dnd";
import { AuthGuard,AuthGuardAdmin } from "app/security/guards/auth.guard";


const routes: Routes = [
    {
        path: "clientes",
        canActivate: [AuthGuardAdmin],
        component: ClientesComponent,
        resolve: {
            contacts: Service,
        },
    }
];

@NgModule({
    declarations: [ClientesComponent, FormDialogComponent],
    imports: [
        RouterModule.forChild(routes),
        MaterialModule,
        NgxDnDModule,

        FuseSharedModule,
        FuseConfirmDialogModule,
        FuseSidebarModule,
    ],
    providers: [Service],
    entryComponents: [FormDialogComponent],
})
export class ClientesModule {}
