import { ElementRef, OnInit, Renderer2, NgZone, AfterViewInit } from '@angular/core';
import { ScrollSpyService } from './scroll-spy.service';
import * as ɵngcc0 from '@angular/core';
export declare class ScrollSpyWindowDirective implements OnInit, AfterViewInit {
    private document;
    private el;
    private renderer;
    private ngZone;
    private scrollSpyService;
    private id;
    scrollSpyId: string;
    private _scrollSpyId;
    offset: number;
    constructor(document: any, el: ElementRef, renderer: Renderer2, ngZone: NgZone, scrollSpyService: ScrollSpyService);
    isElementInViewport(): boolean;
    updateActiveState(scrollSpyId: string, id: string): void;
    onScroll(): void;
    listenToScroll(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ScrollSpyWindowDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<ScrollSpyWindowDirective, "[mdbScrollSpyWindow]", never, {
    "offset": "offset";
    "scrollSpyId": "mdbScrollSpyWindow";
}, {}, never>;
}

//# sourceMappingURL=scroll-spy-window.directive.d.ts.map