import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatChipsModule } from "@angular/material/chips";
import { MatRippleModule } from "@angular/material/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSelectModule } from "@angular/material/select";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { AgmCoreModule } from "@agm/core";
import { FuseSharedModule } from "@fuse/shared.module";
import { FuseWidgetModule } from "@fuse/components/widget/widget.module";
import { EcommerceProductsComponent } from "./list/products.component";
import { EcommerceProductsService } from "./list/products.service";
import { EcommerceProductComponent } from "./taskInfo/product.component";
import { EcommerceProductService } from "./taskInfo/product.service";
import { AuthGuardAdmin } from "app/security/guards/auth.guard";
import { ChatViewComponent } from "./chat-view/chat-view.component";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatRadioModule } from "@angular/material/radio";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";

const routes: Routes = [
    {
        path: "products",
        component: EcommerceProductsComponent,
        resolve: {
            data: EcommerceProductsService,
        },
    },
    {
        path: "product/:id",
        component: EcommerceProductComponent,
        resolve: {
            data: EcommerceProductService,
        },
    },
    {
        path: "product/:id/:handle",
        component: EcommerceProductComponent,
        resolve: {
            data: EcommerceProductService,
        },
    },
];

@NgModule({
    declarations: [
        EcommerceProductsComponent,
        EcommerceProductComponent,
        ChatViewComponent,
    ],
    imports: [
        RouterModule.forChild(routes),
        MatButtonModule,
        MatChipsModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatPaginatorModule,
        MatRippleModule,
        MatSelectModule,
        MatSortModule,
        MatSnackBarModule,
        MatTableModule,
        MatTabsModule,

        MatCardModule,
        MatListModule,
        MatMenuModule,
        MatRadioModule,
        MatSidenavModule,
        MatToolbarModule,

        AgmCoreModule.forRoot({
            apiKey: "AIzaSyAqD1NbAsWYYpnhzdP-gBq--gq8N0gB7f8",
        }),

        FuseSharedModule,
        FuseWidgetModule,
    ],
    providers: [EcommerceProductsService, EcommerceProductService],
})
export class TasksModule {}
