import { ElementRef, OnInit, Renderer2, NgZone, AfterViewInit } from '@angular/core';
import { ScrollSpyService } from './scroll-spy.service';
import * as ɵngcc0 from '@angular/core';
export declare class ScrollSpyElementDirective implements OnInit, AfterViewInit {
    private el;
    private renderer;
    private ngZone;
    private scrollSpyService;
    private id;
    scrollSpyId: string;
    private _scrollSpyId;
    offset: number;
    constructor(el: ElementRef, renderer: Renderer2, ngZone: NgZone, scrollSpyService: ScrollSpyService);
    isElementInViewport(): boolean;
    updateActiveState(scrollSpyId: string, id: string): void;
    onScroll(): void;
    listenToScroll(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ScrollSpyElementDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<ScrollSpyElementDirective, "[mdbScrollSpyElement]", never, {
    "offset": "offset";
    "scrollSpyId": "mdbScrollSpyElement";
}, {}, never>;
}

//# sourceMappingURL=scroll-spy-element.directive.d.ts.map