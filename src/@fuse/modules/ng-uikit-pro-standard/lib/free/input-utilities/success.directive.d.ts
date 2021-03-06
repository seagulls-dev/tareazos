import { ElementRef, Renderer2, OnInit, OnDestroy } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class MdbSuccessDirective implements OnInit, OnDestroy {
    private el;
    private renderer;
    prefix: HTMLElement;
    id: string;
    successMsg: boolean;
    messageId: string;
    textareaListenFunction: Function;
    private utils;
    constructor(el: ElementRef, renderer: Renderer2);
    private _calculateMarginTop;
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MdbSuccessDirective>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MdbSuccessDirective, "mdb-success", never, {
    "id": "id";
}, {}, never>;
}

//# sourceMappingURL=success.directive.d.ts.map