import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MainComponent } from "./main.component";
import { FuseSharedModule } from "@fuse/shared.module";
import { FuseConfirmDialogModule, FuseSidebarModule } from "@fuse/components";
import { MaterialModule } from "app/material.module";
import { NgxDnDModule } from "@swimlane/ngx-dnd";
import { AngularFireStorage } from "@angular/fire/storage";
import { SharedModule } from "../../shared/shared.module";
import "firebase/storage";
import { Service } from "./service";
import { AuthGuard,AuthGuardAdmin } from "app/security/guards/auth.guard";
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';
const routes: Routes = [
    {
        path: "catalogos",
        canActivate: [AuthGuardAdmin],
        component: MainComponent,
        resolve: {
            contacts: Service,
        },
    },
];

@NgModule({
    declarations: [MainComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialModule,
        NgxDnDModule,
        SharedModule,
        FuseSharedModule,
        FuseConfirmDialogModule,
        FuseSidebarModule,
        FuseWidgetModule
    ],
    providers: [Service, AngularFireStorage],
})
export class CatalogosModule {}
