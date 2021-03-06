import { ElementRef, Renderer2, OnInit } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class MdbTableScrollDirective implements OnInit {
    private renderer;
    private el;
    scrollY: boolean;
    maxHeight: any;
    scrollX: boolean;
    maxWidth: any;
    constructor(renderer: Renderer2, el: ElementRef);
    wrapTableWithVerticalScrollingWrapper(tableWrapper: ElementRef): void;
    wrapTableWithHorizontalScrollingWrapper(tableWrapper: ElementRef): void;
    wrapTableWithHorizontalAndVerticalScrollingWrapper(tableWrapper: ElementRef): void;
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MdbTableScrollDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<MdbTableScrollDirective, "[mdbTableScroll]", never, {
    "scrollY": "scrollY";
    "maxHeight": "maxHeight";
    "scrollX": "scrollX";
    "maxWidth": "maxWidth";
}, {}, never>;
}

//# sourceMappingURL=mdb-table-scroll.directive.d.ts.map