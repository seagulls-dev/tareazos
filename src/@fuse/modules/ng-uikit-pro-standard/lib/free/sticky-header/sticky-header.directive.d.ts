import { AfterViewInit, ElementRef, EventEmitter, Renderer2, OnDestroy } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class StickyHeaderDirective implements AfterViewInit, OnDestroy {
    private _renderer;
    private _el;
    animationDuration: number;
    transitionEnd: EventEmitter<{
        state: string;
    }>;
    private _destroy$;
    private scrollDown$;
    private scrollUp$;
    constructor(_renderer: Renderer2, _el: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StickyHeaderDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<StickyHeaderDirective, "[mdbStickyHeader]", ["mdbStickyHeader"], {
    "animationDuration": "animationDuration";
}, {
    "transitionEnd": "transitionEnd";
}, never>;
}

//# sourceMappingURL=sticky-header.directive.d.ts.map