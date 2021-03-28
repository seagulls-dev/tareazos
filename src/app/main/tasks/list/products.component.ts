import {
    Component,
    ElementRef,
    OnInit,
    ViewChild,
    ViewEncapsulation,
} from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, fromEvent, merge, Observable, Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, map } from "rxjs/operators";

import { fuseAnimations } from "@fuse/animations";
import { FuseUtils } from "@fuse/utils";

import { EcommerceProductsService } from "./products.service";
import { takeUntil } from "rxjs/internal/operators";
import { CatalogService } from "app/services/catalog.service";
import { MatDialog } from "@angular/material/dialog";
import { FuseConfirmDialogComponent } from "@fuse/components/confirm-dialog/confirm-dialog.component";

@Component({
    selector: "e-commerce-products",
    templateUrl: "./products.component.html",
    styleUrls: ["./products.component.scss"],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None,
})
export class EcommerceProductsComponent implements OnInit {
    dataSource: FilesDataSource | null;
    displayedColumns = [
        "id",
        "category",
        "title",
        "subcategory",
        "createDate",
        "authorname",
        "status",
        "requestCancel",
        "options",
    ];

    @ViewChild(MatPaginator, { static: true })
    paginator: MatPaginator;

    @ViewChild(MatSort, { static: true })
    sort: MatSort;

    @ViewChild("filter", { static: true })
    filter: ElementRef;

    // Private
    private _unsubscribeAll: Subject<any>;

    constructor(
        private _ecommerceProductsService: EcommerceProductsService,
        private CatalogService: CatalogService,
        private _matDialog: MatDialog
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
        this.dataSource = new FilesDataSource(
            this._ecommerceProductsService,
            this.paginator,
            this.sort
        );

        fromEvent(this.filter.nativeElement, "keyup").subscribe(() => {
            if (!this.dataSource) {
                return;
            }
            this.dataSource.filter = this.filter.nativeElement.value;
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
                this._ecommerceProductsService.deleteTask(product).then();
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
                this._ecommerceProductsService.updateStatus(product).then();
            }
        });
    }
}

export class FilesDataSource extends DataSource<any> {
    private _filterChange = new BehaviorSubject("");
    private _filteredDataChange = new BehaviorSubject("");

    /**
     * Constructor
     *
     * @param {EcommerceProductsService} _ecommerceProductsService
     * @param {MatPaginator} _matPaginator
     * @param {MatSort} _matSort
     */
    constructor(
        private _ecommerceProductsService: EcommerceProductsService,
        private _matPaginator: MatPaginator,
        private _matSort: MatSort
    ) {
        super();

        this.filteredData = this._ecommerceProductsService.requests;
    }

    /**
     * Connect function called by the table to retrieve one stream containing the data to render.
     *
     * @returns {Observable<any[]>}
     */
    connect(): Observable<any[]> {
        const displayDataChanges = [
            this._ecommerceProductsService.onRequestsChanged,
            this._matPaginator.page,
            this._filterChange,
            this._matSort.sortChange,
        ];

        return merge(...displayDataChanges).pipe(
            map(() => {
                let data = this._ecommerceProductsService.requests.slice();

                data = this.filterData(data);

                this.filteredData = [...data];

                data = this.sortData(data);

                // Grab the page's slice of data.
                const startIndex =
                    this._matPaginator.pageIndex * this._matPaginator.pageSize;
                return data.splice(startIndex, this._matPaginator.pageSize);
            })
        );
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    // Filtered data
    get filteredData(): any {
        return this._filteredDataChange.value;
    }

    set filteredData(value: any) {
        this._filteredDataChange.next(value);
    }

    // Filter
    get filter(): string {
        return this._filterChange.value;
    }

    set filter(filter: string) {
        this._filterChange.next(filter);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Filter data
     *
     * @param data
     * @returns {any}
     */
    filterData(data): any {
        if (!this.filter) {
            return data;
        }
        return FuseUtils.filterArrayByString(data, this.filter);
    }

    /**
     * Sort data
     *
     * @param data
     * @returns {any[]}
     */
    sortData(data): any[] {
        if (!this._matSort.active || this._matSort.direction === "") {
            return data;
        }

        return data.sort((a, b) => {
            let propertyA: number | string = "";
            let propertyB: number | string = "";

            switch (this._matSort.active) {
                case "id":
                    [propertyA, propertyB] = [a.data.docId, b.data.docId];
                    break;
                case "category":
                    [propertyA, propertyB] = [a.data.category, b.data.category];
                    break;
                case "title":
                    [propertyA, propertyB] = [a.data.title, b.data.title];
                    break;
                case "subcategory":
                    [propertyA, propertyB] = [
                        a.data.subcategory,
                        b.data.subcategory,
                    ];
                    break;
                case "authorname":
                    [propertyA, propertyB] = [
                        a.data.authorname,
                        b.data.authorname,
                    ];
                    break;
                case "status":
                    [propertyA, propertyB] = [a.data.status, b.data.status];
                    break;
                case "requestCancel":
                    [propertyA, propertyB] = [
                        a.data.requestCancellation,
                        b.data.requestCancellation,
                    ];
                    break;
                case "createDate":
                    [propertyA, propertyB] = [
                        a.data.createDate,
                        b.data.createDate,
                    ];
                    break;
            }

            const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

            return (
                (valueA < valueB ? -1 : 1) *
                (this._matSort.direction === "asc" ? 1 : -1)
            );
        });
    }

    /**
     * Disconnect
     */
    disconnect(): void {}
}
