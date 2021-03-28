import {
    Component,
    ElementRef,
    OnDestroy,
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

import { EcommerceOrdersService } from "./orders.service";
import { takeUntil } from "rxjs/internal/operators";
import { ChangeDetectorRef } from "@angular/core";

@Component({
    selector: "e-commerce-orders",
    templateUrl: "./orders.component.html",
    styleUrls: ["./orders.component.scss"],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None,
})
export class EcommerceOrdersComponent implements OnInit, OnDestroy {
    dataSource: FilesDataSource | null;
    displayedColumns = [
        "id",
        "reference",
        "customer",
        "status",
        "date",
        "cellphone",
    ];

    @ViewChild(MatPaginator, { static: true })
    paginator: MatPaginator;

    @ViewChild("filter", { static: true })
    filter: ElementRef;

    @ViewChild(MatSort, { static: true })
    sort: MatSort;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {EcommerceOrdersService} _ecommerceOrdersService
     * @param {ChangeDetectorRef} _cdRef
     */
    constructor(
        private _ecommerceOrdersService: EcommerceOrdersService,
        private _cdRef: ChangeDetectorRef
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
            this._ecommerceOrdersService,
            this.paginator,
            this.sort
        );

        this.filter.nativeElement.value = this._ecommerceOrdersService.txtSearch;
        this.filterUsers();

        fromEvent(this.filter.nativeElement, "keyup").subscribe(() => {
            this.filterUsers();
        });
    }

    filterUsers() {
        if (!this.dataSource) {
            return;
        }
        this.dataSource.filter = this.filter.nativeElement.value;
        this._ecommerceOrdersService.txtSearch = this.filter.nativeElement.value;
    }

    getStatusColor(taskerStatus): string {
        if (taskerStatus == "Approved") return "green-300";

        if (taskerStatus == "Incomplete") return "red-500";

        if (taskerStatus == "Completed") return "yellow-500";

        return "blue-500";
    }

    UpdateDb() {
        localStorage.setItem("Providers", undefined);
        location.reload();
    }
    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    /**
     * After View Checked
     */
    ngAfterViewChecked() {
        this._cdRef.detectChanges();
    }
}

export class FilesDataSource extends DataSource<any> {
    // Private
    private _filterChange = new BehaviorSubject("");
    private _filteredDataChange = new BehaviorSubject("");

    /**
     * Constructor
     *
     * @param {EcommerceOrdersService} _ecommerceOrdersService
     * @param {MatPaginator} _matPaginator
     * @param {MatSort} _matSort
     */
    constructor(
        private _ecommerceOrdersService: EcommerceOrdersService,
        private _matPaginator: MatPaginator,
        private _matSort: MatSort
    ) {
        super();

        this.filteredData = this._ecommerceOrdersService.orders;
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
     * Connect function called by the table to retrieve one stream containing the data to render.
     *
     * @returns {Observable<any[]>}
     */
    connect(): Observable<any[]> {
        const displayDataChanges = [
            this._ecommerceOrdersService.onOrdersChanged,
            this._matPaginator.page,
            this._filterChange,
            this._matSort.sortChange,
        ];

        return merge(...displayDataChanges).pipe(
            map(() => {
                let data = this._ecommerceOrdersService.orders.slice();

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
                case "reference":
                    [propertyA, propertyB] = [a.data.docId, b.data.docId];
                    break;
                case "customer":
                    [propertyA, propertyB] = [
                        a.data.Generales.FirstName,
                        b.data.Generales.FirstName,
                    ];
                    break;
                case "total":
                    [propertyA, propertyB] = [a.data.total, b.data.total];
                    break;
                case "payment":
                    [propertyA, propertyB] = [
                        a.payment.method,
                        b.payment.method,
                    ];
                    break;
                case "status":
                    [propertyA, propertyB] = [
                        a.data.taskerStatus,
                        b.data.taskerStatus,
                    ];
                    break;
                case "date":
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
