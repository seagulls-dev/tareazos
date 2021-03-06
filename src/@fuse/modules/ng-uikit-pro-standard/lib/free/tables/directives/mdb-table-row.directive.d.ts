import { EventEmitter, OnInit, OnDestroy, ElementRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class MdbTableRowDirective implements OnInit, OnDestroy {
    private el;
    rowCreated: EventEmitter<any>;
    rowRemoved: EventEmitter<any>;
    constructor(el: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MdbTableRowDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<MdbTableRowDirective, "[mdbTableRow]", never, {}, {
    "rowCreated": "rowCreated";
    "rowRemoved": "rowRemoved";
}, never>;
}

//# sourceMappingURL=mdb-table-row.directive.d.ts.map