import { AfterViewInit, ElementRef, OnDestroy, OnInit, Renderer2, ChangeDetectorRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class SidenavComponent implements AfterViewInit, OnDestroy, OnInit {
    el: ElementRef;
    renderer: Renderer2;
    private _cdRef;
    windwosWidth: number;
    shown: boolean;
    slimSidenav: boolean;
    isBrowser: any;
    private _sidenavTransform;
    class: string;
    fixed: boolean;
    sidenavBreakpoint: any;
    side: string;
    private _side;
    sideNav: ElementRef;
    overlay: any;
    constructor(platformId: string, el: ElementRef, renderer: Renderer2, _cdRef: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    windwosResize(): void;
    show(): void;
    hide(): void;
    toggle(): void;
    toggleSlim(): void;
    showOverlay(): void;
    hideOverlay(): void;
    setShown(value: boolean): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SidenavComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SidenavComponent, "mdb-sidenav, mdb-side-nav", never, {
    "fixed": "fixed";
    "side": "side";
    "class": "class";
    "sidenavBreakpoint": "sidenavBreakpoint";
}, {}, never>;
}

//# sourceMappingURL=sidenav.component.d.ts.map