import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatRippleModule } from "@angular/material/core";
import {
    MatDialogModule,
    MatDialogRef,
    MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatChipsModule } from "@angular/material/chips";
import { TranslateModule } from "@ngx-translate/core";
import { FuseSharedModule } from "@fuse/shared.module";
import { FuseSidebarModule } from "@fuse/components";
import { ProfileModule } from "../profile/profile.module";
import { MailService } from "./mail.service";
import { MailComponent } from "./mail.component";
import { MailListComponent } from "./mail-list/mail-list.component";
import { MailListItemComponent } from "./mail-list/mail-list-item/mail-list-item.component";
import { MailDetailsComponent } from "./mail-details/mail-details.component";
import { MailMainSidebarComponent } from "./sidebars/main/main-sidebar.component";
import { MailComposeDialogComponent } from "./dialogs/compose/compose.component";
import { MailContactDialogComponent } from "./dialogs/contact/compose.component";
import { OfferDialogComponent } from "./dialogs/compose/dialog-offer.component";
import { ListProvidersComponent } from "./list-providers/list-providers.component";
import { AuthService } from "../../services/auth.service";
import { SharedModule } from "../../shared/shared.module";
import { DialogBookingComponent } from "./dialogs/compose/dialog-booking.component";
import { RatingComponent } from "./rating/rating.component";
import { Ng5SliderModule } from "ng5-slider";
import { MatTableModule } from "@angular/material/table";
import { UserListComponent } from "./dialogs/user-list/user-list.component";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatSliderModule } from "@angular/material/slider";
import { MatTooltipModule } from "@angular/material/tooltip";
import { AuthGuard } from "app/security/guards/auth.guard";

const routes: Routes = [
    {
        path: "mail/label/:labelHandle",
        canActivate: [AuthGuard],
        component: MailComponent,
        resolve: {
            mail: MailService,
        },
    },
    {
        path: "mail/label/:labelHandle/:mailId",
        canActivate: [AuthGuard],
        component: MailComponent,
        resolve: {
            mail: MailService,
        },
    },
    {
        path: "mail/filter/:filterHandle",
        canActivate: [AuthGuard],
        component: MailComponent,
        resolve: {
            mail: MailService,
        },
    },
    {
        path: "mail/filter/:filterHandle/:mailId",
        canActivate: [AuthGuard],
        component: MailComponent,
        resolve: {
            mail: MailService,
        },
    },
    {
        path: "mail/:folderHandle",
        canActivate: [AuthGuard],
        component: MailComponent,
        resolve: {
            mail: MailService,
        },
    },
    {
        path: "mail/:folderHandle/:requestId",
        canActivate: [AuthGuard],
        component: MailComponent,
        resolve: {
            mail: MailService,
        },
    },
    {
        path: "mail/other/listprovider/",
        canActivate: [AuthGuard],
        component: ListProvidersComponent,
        resolve: {
            mail: MailService,
        },
    },
    {
        path: "mail/other/rating/",
        canActivate: [AuthGuard],
        component: ListProvidersComponent,
        resolve: {
            mail: MailService,
        },
    },
    {
        path: "**",
        canActivate: [AuthGuard],
        redirectTo: "inbox",
    },
];

@NgModule({
    declarations: [
        MailComponent,
        MailListComponent,
        MailListItemComponent,
        MailDetailsComponent,
        MailMainSidebarComponent,
        MailComposeDialogComponent,
        MailContactDialogComponent,
        ListProvidersComponent,
        OfferDialogComponent,
        DialogBookingComponent,
        RatingComponent,
        UserListComponent,
    ],
    imports: [
        RouterModule.forChild(routes),
        MatTableModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDialogModule,
        MatMenuModule,
        MatRippleModule,
        MatToolbarModule,
        MatTooltipModule,
        MatChipsModule,
        MatAutocompleteModule,
        ProfileModule,
        TranslateModule,
        SharedModule,
        FuseSharedModule,
        FuseSidebarModule,
        Ng5SliderModule,
        MatSliderModule,
    ],
    providers: [MailService, AuthService],
    entryComponents: [
        MailComposeDialogComponent,
        MailContactDialogComponent,
        OfferDialogComponent,
        DialogBookingComponent,
    ],
})
export class MailModule {}
