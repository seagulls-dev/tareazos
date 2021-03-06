import { AfterViewInit, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class MdbTableDirective implements OnInit, AfterViewInit {
    private el;
    private renderer;
    striped: boolean;
    bordered: boolean;
    borderless: boolean;
    hover: boolean;
    small: boolean;
    responsive: boolean;
    stickyHeader: boolean;
    stickyHeaderBgColor: string;
    stickyHeaderTextColor: string;
    constructor(el: ElementRef, renderer: Renderer2);
    private _dataSource;
    private _dataSourceChanged;
    addRow(newRow: any): void;
    addRowAfter(index: number, row: any): void;
    removeRow(index: number): void;
    rowRemoved(): Observable<boolean>;
    removeLastRow(): void;
    getDataSource(): any;
    setDataSource(data: any): void;
    dataSourceChange(): Observable<any>;
    filterLocalDataBy(searchKey: string): any;
    filterLocalDataByFields(searchKey: string, keys: string[]): any;
    filterLocalDataByMultipleFields(searchKey: string, keys?: string[]): any;
    searchLocalDataBy(searchKey: string): any;
    searchLocalDataByFields(searchKey: string, keys: string[]): any;
    searchLocalDataByMultipleFields(searchKey: string, keys?: string[]): any;
    searchDataObservable(searchKey: string): Observable<any>;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MdbTableDirective>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MdbTableDirective, "[mdbTable]", ["mdbTable"], {
    "stickyHeader": "stickyHeader";
    "stickyHeaderBgColor": "stickyHeaderBgColor";
    "stickyHeaderTextColor": "stickyHeaderTextColor";
    "striped": "striped";
    "bordered": "bordered";
    "borderless": "borderless";
    "hover": "hover";
    "small": "small";
    "responsive": "responsive";
}, {}, never>;
}

//# sourceMappingURL=mdb-table.directive.d.ts.map