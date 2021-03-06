import { NavbarService } from './navbar.service';
import { AfterContentChecked, AfterViewInit, ElementRef, OnInit, Renderer2, ChangeDetectorRef, NgZone, OnDestroy } from '@angular/core';
import { LinksComponent } from './links.component';
import * as ɵngcc0 from '@angular/core';
export declare class NavbarComponent implements AfterViewInit, OnInit, AfterContentChecked, OnDestroy {
    renderer: Renderer2;
    private _navbarService;
    private _cdRef;
    private _ngZone;
    private _document;
    iconBackground: string | string[];
    SideClass: string;
    containerInside: boolean;
    collapseId: string;
    scrollSensitivity: number;
    scrollableNavbar: boolean;
    private _destroy$;
    navbarLinkClicks: any;
    shown: boolean;
    doubleNav: boolean;
    height: number;
    duration: number;
    collapse: boolean;
    showClass: boolean;
    collapsing: boolean;
    private _itemsLength;
    ariaExpanded: boolean;
    el: ElementRef;
    mobile: ElementRef;
    navbar: ElementRef;
    container: ElementRef;
    toggler: ElementRef;
    links: LinksComponent;
    constructor(renderer: Renderer2, _navbarService: NavbarService, _cdRef: ChangeDetectorRef, _ngZone: NgZone, _document: any);
    closeNavbarOnClick(navbarLinkClicks: any): void;
    addTogglerIconClasses(): void;
    private _listenToScroll;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    toggle(): void;
    show(): void;
    hide(): void;
    readonly displayStyle: "" | "flex";
    onResize(event: any): void;
    ngAfterContentChecked(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NavbarComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NavbarComponent, "mdb-navbar", never, {
    "containerInside": "containerInside";
    "collapseId": "collapseId";
    "scrollSensitivity": "scrollSensitivity";
    "scrollableNavbar": "scrollableNavbar";
    "iconBackground": "iconBackground";
    "SideClass": "SideClass";
}, {}, ["links"]>;
}

//# sourceMappingURL=navbar.component.d.ts.map