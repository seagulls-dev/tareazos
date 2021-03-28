import {
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
    ViewChild,
    ViewEncapsulation,
} from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Subject, Subscription } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { fuseAnimations } from "@fuse/animations";

import { orderStatuses, ProviderStatus } from "./order-statuses";
import { Order } from "./order.model";
import { EcommerceOrderService } from "./order.service";
import { CatalogService } from "app/services/catalog.service";
import { MatDialog } from "@angular/material/dialog";
import { Platform } from "@angular/cdk/platform";
import { AddSkilDialogComponent } from "app/main/profile/addSkill/addSkill.component";
import { AlertDialogComponent } from "app/shared/components/alert-dialog/alert-dialog.component";
import { AuthService } from "app/services/auth.service";
import { BecomeProviderComponent } from "app/main/client-forms/become-provider/become-provider.component";
import { ActivatedRoute, Router } from "@angular/router";
import { analytics } from "firebase";
import { FilesDataSource } from "../list/orders.component";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { DetalleSolicitudComponent } from "./edit-profile/edit-profile.component";

@Component({
    selector: "e-commerce-order",
    templateUrl: "./order.component.html",
    styleUrls: ["./order.component.scss"],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
})
export class EcommerceOrderComponent implements OnInit, OnDestroy {
    user: any;
    taskerStatus: string;
    fundsWithdrawl: any = [];
    dialogRef: any;

    private routeSub: Subscription;
    userId = "";

    dataSource: MatTableDataSource<any>;
    displayedColumns = [
        "bank",
        "nameOnAccount",
        "accountType",
        "bankAccount",
        "amount",
        "requestedDate",
        "status",
        "options",
    ];
    @ViewChild(MatPaginator) paginator: MatPaginator;
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {EcommerceOrderService} _ecommerceOrderService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _ecommerceOrderService: EcommerceOrderService,
        private _formBuilder: FormBuilder,
        private CatalogService: CatalogService,
        public _matDialog: MatDialog,
        public _platform: Platform,
        private authService: AuthService,
        private _router: Router,
        private changeDetectorRef: ChangeDetectorRef,
        private route: ActivatedRoute
    ) {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.routeSub = this.route.params.subscribe((params) => {
            this.userId = params["id"]; //log the value of id
        });

        this._ecommerceOrderService.onUserChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((user) => {
                this.user = user;

                if (this.user) {
                    this.dataSource = new MatTableDataSource<any>(this.user);
                    this.dataSource.paginator = this.paginator;
                }
                // para que al cargar los documentos no se los cargue al administrador sino al usuario que se esta editando.
            });
    }

    getDate(date) {
        if (date.seconds !== undefined) {
            return new Date(date.seconds * 1000);
        } else {
            return date;
        }
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
        this.routeSub.unsubscribe();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Update status
     */
    updateStatus(order): void {
        console.log(order);
        var data = {
            userId: this.userId,
            transactionId: order.uid,
        };

        const dialogRef = this._matDialog.open(DetalleSolicitudComponent, {
            width: "80vh",
            height: "80vh",
            data: data,
        });

        dialogRef.afterClosed().subscribe((res) => {
            if (res) {
                this.CatalogService.updateDocWithFirestore(
                    "userData/" + this.userId + "/fundsWithdrawl/" + order.uid,
                    "status",
                    "Procesado"
                ).then(() => {
                    order.status = "Procesado";
                    order.pictures = res;
                    if (
                        this.user.filter(
                            (x) => x.status.toLowerCase() === "pendiente"
                        ).length <= 0
                    ) {
                        this.CatalogService.updateDocWithFirestore(
                            "userData/" + this.userId,
                            "fundsRequested",
                            false
                        ).then(() => {
                            this.dataSource = new MatTableDataSource<any>(
                                this.user
                            );
                            this.dataSource.paginator = this.paginator;
                        });
                    } else {
                        this.dataSource = new MatTableDataSource<any>(
                            this.user
                        );
                        this.dataSource.paginator = this.paginator;
                    }
                });
            }
        });
    }

    showAlert(msg, title) {
        var minWidth = "380px";
        var maxWidth = "380px";
        var minHeight = "190px";
        var maxHeight = "190px";
        if (window.innerWidth <= 800 && window.innerHeight <= 600) {
            minWidth = "80vw";
            maxWidth = "80vw";
            minHeight = "100%";
            maxHeight = "100%";
        }
        if (this._platform.ANDROID || this._platform.IOS) {
            minWidth = "80vw";
            maxWidth = "80vw";
            minHeight = "100%";
            maxHeight = "100%";
        }

        var dialogRef1 = this._matDialog.open(AlertDialogComponent, {
            minWidth: minWidth,
            maxWidth: maxWidth,
            minHeight: "240px",
            maxHeight: maxHeight,
        });

        dialogRef1.componentInstance.message = msg;
        dialogRef1.componentInstance.title = title;
    }
}
