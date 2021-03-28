import { ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class MdbStickyDirective implements OnDestroy, AfterViewInit {
    stickyAfter: string;
    stickyAfterAlias: string;
    isBrowser: boolean;
    el: HTMLElement | any;
    parentEl: HTMLElement | any;
    fillerEl: HTMLElement | any;
    stickyOffsetTop: number;
    diff: any;
    original: any;
    constructor(el: ElementRef, platformId: string);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    attach(): void;
    detach(): void;
    scrollHandler: () => void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MdbStickyDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<MdbStickyDirective, "[mdbSticky]", never, {
    "stickyAfter": "stickyAfter";
    "stickyAfterAlias": "sticky-after";
}, {}, never>;
}

//# sourceMappingURL=sticky-content.directive.d.ts.map