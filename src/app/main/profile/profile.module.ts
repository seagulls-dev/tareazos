import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MatDialogModule } from "@angular/material/dialog";
import { FuseSharedModule } from "@fuse/shared.module";
import {
    FuseConfirmDialogModule,
    FuseSidebarModule,
    FuseProgressBarModule,
} from "@fuse/components";
import { MatButtonModule } from "@angular/material/button";
import { NgxDnDModule } from "@swimlane/ngx-dnd";
import { AngularFireStorage } from "@angular/fire/storage";
import "firebase/storage";
import "firebase/firestore";
import { MaterialModule } from "app/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProfileComponent } from ".//profile.component";
import { ProfileService } from ".//profile.service";
import { ProfileTimelineComponent } from ".//timeline/timeline.component";
import { ProfileAboutComponent } from ".//about/about.component";

import { AuthService } from "../../services/auth.service";
import { AuthGuard } from "app/security/guards/auth.guard";
import { AlertDialogComponent } from "app/shared/components/alert-dialog/alert-dialog.component";
import {AddSkilDialogComponent} from './addSkill/addSkill.component';
import {SharedModule} from '../../shared/shared.module';

const routes: Routes = [
    {
        path: "profile/profile",
        canActivate: [AuthGuard],
        component: ProfileComponent,
        resolve: {
            contacts: ProfileService,
        },
    },
];

@NgModule({
    declarations: [
        ProfileComponent,
        ProfileTimelineComponent,
        ProfileAboutComponent,
        AddSkilDialogComponent
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
        MatDialogModule,
        SharedModule,
        MaterialModule,
       
    ],
    providers: [
        ProfileService,
        AngularFireStorage,
        ProfileService,
        AuthService,
    ],
    entryComponents: [AlertDialogComponent,AddSkilDialogComponent],
    exports: [
        ProfileComponent,
        ProfileTimelineComponent,
        ProfileAboutComponent,
    ],
})
export class ProfileModule {}
