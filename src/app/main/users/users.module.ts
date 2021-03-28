import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { AgmCoreModule } from '@agm/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';


import { EcommerceOrdersComponent } from './list/orders.component';
import { EcommerceOrdersService } from './list/orders.service';
import { EcommerceOrderComponent } from './userInfo/order.component';
import { EcommerceOrderService } from './userInfo/order.service';
import { AuthGuardAdmin } from 'app/security/guards/auth.guard';
import { SharedModule } from 'app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDnDModule } from '@swimlane/ngx-dnd';
import { EditProfileComponent } from './userInfo/edit-profile/edit-profile.component';

const routes: Routes = [

    {
        path     : 'list',
        canActivate: [AuthGuardAdmin],
        component: EcommerceOrdersComponent,
        resolve  : {
            data: EcommerceOrdersService
        }
    },
    {
        path     : 'user/:id',
        canActivate: [AuthGuardAdmin],
        component: EcommerceOrderComponent,
        resolve  : {
            data: EcommerceOrderService
        }
    }
];

@NgModule({
    declarations: [
    
        EcommerceOrdersComponent,
        EcommerceOrderComponent,
        EditProfileComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        NgxDnDModule,
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
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAqD1NbAsWYYpnhzdP-gBq--gq8N0gB7f8'
        }),
        SharedModule,
        FuseSharedModule,
        FuseWidgetModule
    ],
    providers   : [
        
        EcommerceOrdersService,
        EcommerceOrderService
    ]
})
export class UsersModule
{
}
