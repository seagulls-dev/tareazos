import { OnInit, ElementRef, Renderer2, OnDestroy } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class MdbErrorDirective implements OnInit, OnDestroy {
    private el;
    private renderer;
    prefix: HTMLElement;
    id: string;
    errorMsg: boolean;
    messageId: string;
    textareaListenFunction: Function;
    private utils;
    constructor(el: ElementRef, renderer: Renderer2);
    private _calculateMarginTop;
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MdbErrorDirective>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MdbErrorDirective, "mdb-error", never, {
    "id": "id";
}, {}, never>;
}

//# sourceMappingURL=error.directive.d.ts.map