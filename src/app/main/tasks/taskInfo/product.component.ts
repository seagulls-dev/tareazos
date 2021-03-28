import {
    Component,
    OnDestroy,
    OnInit,
    ViewChild,
    ViewEncapsulation,
} from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Location } from "@angular/common";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { fuseAnimations } from "@fuse/animations";
import { FuseUtils } from "@fuse/utils";

import { Product } from "./product.model";
import { EcommerceProductService } from "./product.service";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { MatDialog } from "@angular/material/dialog";
import { FuseConfirmDialogComponent } from "@fuse/components/confirm-dialog/confirm-dialog.component";
import { Router } from "@angular/router";

@Component({
    selector: "e-commerce-product",
    templateUrl: "./product.component.html",
    styleUrls: ["./product.component.scss"],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
})
export class EcommerceProductComponent implements OnInit, OnDestroy {
    product: Product;
    request: any;
    pageType: string;
    productForm: FormGroup;

    dataSource: MatTableDataSource<any>;
    displayedColumns = ["authorname", "awarded", "comments", "rate"];
    @ViewChild(MatPaginator) paginator: MatPaginator;
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {EcommerceProductService} _ecommerceProductService
     * @param {FormBuilder} _formBuilder
     * @param {Location} _location
     * @param {MatSnackBar} _matSnackBar
     */
    constructor(
        private _ecommerceProductService: EcommerceProductService,
        private _formBuilder: FormBuilder,
        private _location: Location,
        private _matSnackBar: MatSnackBar,
        private _matDialog: MatDialog,
        public router: Router
    ) {
        // Set the default
        this.product = new Product();

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
        // Subscribe to update product on changes
        this._ecommerceProductService.onProductChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((product) => {
                if (product) {
                    this.product = new Product(product);
                    this.pageType = "edit";
                } else {
                    this.pageType = "new";
                    this.product = new Product();
                }

                this.productForm = this.createProductForm();
            });

        this._ecommerceProductService.onRequestChanged.subscribe((request) => {
            this.request = request.data;
            if (request.data) {
                this.productForm.patchValue({
                    description: this.request[
                        this.request.subcategory ?? this.request.category
                    ].TaskDescription,
                    title: this.request.title,
                    dueDate: this.request.Request.dueDate.seconds * 1000,
                });

                if (request.data.offers) {
                    this.dataSource = new MatTableDataSource<any>(
                        request.data.offers
                    );
                    this.dataSource.paginator = this.paginator;
                }
            }
        });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Create product form
     *
     * @returns {FormGroup}
     */
    createProductForm(): FormGroup {
        return this._formBuilder.group({
            id: [this.product.id],
            title: [""],
            dueDate: [""],
            handle: [this.product.handle],
            description: [""],
            categories: [this.product.categories],
            tags: [this.product.tags],
            images: [this.product.images],
            priceTaxExcl: [this.product.priceTaxExcl],
            priceTaxIncl: [this.product.priceTaxIncl],
            taxRate: [this.product.taxRate],
            comparedPrice: [this.product.comparedPrice],
            quantity: [this.product.quantity],
            sku: [this.product.sku],
            width: [this.product.width],
            height: [this.product.height],
            depth: [this.product.depth],
            weight: [this.product.weight],
            extraShippingFee: [this.product.extraShippingFee],
            active: [this.product.active],
        });
    }

    /**
     * Save product
     */
    saveProduct(): void {
        const data = this.productForm.getRawValue();
        data.handle = FuseUtils.handleize(data.name);

        this._ecommerceProductService.saveProduct(data).then(() => {
            // Trigger the subscription with new data
            this._ecommerceProductService.onProductChanged.next(data);

            // Show the success message
            this._matSnackBar.open("Product saved", "OK", {
                verticalPosition: "top",
                duration: 2000,
            });
        });
    }

    /**
     * Add product
     */
    addProduct(): void {
        const data = this.productForm.getRawValue();
        data.handle = FuseUtils.handleize(data.name);

        this._ecommerceProductService.addProduct(data).then(() => {
            // Trigger the subscription with new data
            this._ecommerceProductService.onProductChanged.next(data);

            // Show the success message
            this._matSnackBar.open("Product added", "OK", {
                verticalPosition: "top",
                duration: 2000,
            });

            // Change the location with new one
            this._location.go(
                "apps/e-commerce/products/" +
                    this.product.id +
                    "/" +
                    this.product.handle
            );
        });
    }

    /**
     * Delete Task
     */
    deleteTask(product): void {
        var confirmDialogRef = this._matDialog.open(
            FuseConfirmDialogComponent,
            {
                disableClose: false,
            }
        );

        confirmDialogRef.componentInstance.confirmMessage =
            "¿Estás seguro que deseas eliminar esta tarea?";

        confirmDialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this._ecommerceProductService.deleteTask(product).then(() => {
                    this.router.navigate(["/tasks/products"]);
                });
            }
        });
    }

    /**
     * Update Task
     */
    updateStatus(product): void {
        var confirmDialogRef = this._matDialog.open(
            FuseConfirmDialogComponent,
            {
                disableClose: false,
            }
        );

        confirmDialogRef.componentInstance.confirmMessage =
            "¿Estás seguro que deseas cancelar esta tarea?";

        confirmDialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this._ecommerceProductService.updateStatus(product).then(() => {
                    this.request.status = "Canceled";
                });
            }
        });
    }
}
