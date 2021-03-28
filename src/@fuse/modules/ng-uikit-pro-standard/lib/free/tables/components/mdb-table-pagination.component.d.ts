import { OnInit, EventEmitter, ChangeDetectorRef, OnChanges, SimpleChanges, AfterViewInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MdbTableDirective } from '../directives/mdb-table.directive';
import * as ɵngcc0 from '@angular/core';
export interface MdbPaginationIndex {
    first: number;
    last: number;
}
export declare class MdbTablePaginationComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    private cdRef;
    tableEl: MdbTableDirective;
    searchPagination: boolean;
    searchDataSource: any;
    ofKeyword: string;
    dashKeyword: string;
    paginationAlign: string;
    hideDescription: boolean;
    private _destroy$;
    maxVisibleItems: number;
    firstItemIndex: number;
    lastItemIndex: number;
    lastVisibleItemIndex: number;
    activePageNumber: number;
    allItemsLength: number;
    nextShouldBeDisabled: boolean;
    previousShouldBeDisabled: boolean;
    searchText: string;
    pagination: Subject<MdbPaginationIndex>;
    nextPageClick: EventEmitter<MdbPaginationIndex>;
    previousPageClick: EventEmitter<MdbPaginationIndex>;
    firstPageClick: EventEmitter<MdbPaginationIndex>;
    lastPageClick: EventEmitter<MdbPaginationIndex>;
    constructor(cdRef: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setMaxVisibleItemsNumberTo(value: number): void;
    searchTextObs(): Observable<any>;
    disableNextButton(data: any): void;
    calculateFirstItemIndex(): void;
    calculateLastItemIndex(): void;
    paginationChange(): Observable<any>;
    calculateHowManyPagesShouldBe(): number;
    previousPage(): void;
    nextPage(): void;
    firstPage(): void;
    lastPage(): void;
    nextPageObservable(): Observable<any>;
    previousPageObservable(): Observable<any>;
    checkIfNextShouldBeDisabled(): true | undefined;
    checkIfPreviousShouldBeDisabled(): true | undefined;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MdbTablePaginationComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MdbTablePaginationComponent, "mdb-table-pagination", never, {
    "searchPagination": "searchPagination";
    "searchDataSource": "searchDataSource";
    "ofKeyword": "ofKeyword";
    "dashKeyword": "dashKeyword";
    "paginationAlign": "paginationAlign";
    "hideDescription": "hideDescription";
    "tableEl": "tableEl";
}, {
    "nextPageClick": "nextPageClick";
    "previousPageClick": "previousPageClick";
    "firstPageClick": "firstPageClick";
    "lastPageClick": "lastPageClick";
}, never>;
}

//# sourceMappingURL=mdb-table-pagination.component.d.ts.map