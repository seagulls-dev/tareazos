import { ElementRef, QueryList, EventEmitter, ChangeDetectorRef, AfterContentInit, OnDestroy } from '@angular/core';
import { RouterLinkWithHref, Router } from '@angular/router';
import * as ɵngcc0 from '@angular/core';
export interface IAccordionAnimationState {
    state: string;
    accordionEl: ElementRef;
}
export declare class SBItemBodyComponent implements AfterContentInit, OnDestroy {
    el: ElementRef;
    private _cdRef;
    private router;
    customClass: string;
    animationStateChange: EventEmitter<IAccordionAnimationState>;
    routerLinks: QueryList<RouterLinkWithHref>;
    bodyEl: ElementRef;
    autoExpand: boolean;
    collapsed: boolean;
    id: string;
    height: string;
    private _destroy$;
    expandAnimationState: string;
    ariaLabelledBy: string;
    constructor(el: ElementRef, _cdRef: ChangeDetectorRef, router: Router);
    toggle(collapsed: boolean): void;
    animationCallback(): void;
    openSidenavOnActiveLink(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SBItemBodyComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SBItemBodyComponent, "mdb-item-body, mdb-accordion-item-body", ["sbItemBody"], {
    "customClass": "customClass";
}, {
    "animationStateChange": "animationStateChange";
}, ["routerLinks"]>;
}

//# sourceMappingURL=sb-item.body.d.ts.map