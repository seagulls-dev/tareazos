import { EventEmitter, ElementRef, Renderer2, OnInit } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export interface SortedData {
    data: any[];
    sortOrder: string;
    sortBy: string;
}
export declare class MdbTableSortDirective implements OnInit {
    private el;
    private renderer;
    sortedInto: boolean;
    order: string;
    dataSource: Array<any>;
    sortBy: string;
    sortEnd: EventEmitter<any[]>;
    sorted: EventEmitter<SortedData>;
    constructor(el: ElementRef, renderer: Renderer2);
    onclick(): void;
    trimWhiteSigns(headElement: any): string;
    moveArrayItem(arr: any, oldIndex: number, newIndex: number): any;
    sortDataBy(key: string | any): void;
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MdbTableSortDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<MdbTableSortDirective, "[mdbTableSort]", never, {
    "dataSource": "mdbTableSort";
    "sortBy": "sortBy";
}, {
    "sortEnd": "sortEnd";
    "sorted": "sorted";
}, never>;
}

//# sourceMappingURL=mdb-table-sort.directive.d.ts.map