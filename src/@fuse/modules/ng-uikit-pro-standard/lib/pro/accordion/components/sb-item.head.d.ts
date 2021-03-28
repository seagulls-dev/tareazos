import { AfterViewInit, ChangeDetectorRef, OnInit } from '@angular/core';
import { SBItemComponent } from './sb-item';
import * as ɵngcc0 from '@angular/core';
export declare class SBItemHeadComponent implements OnInit, AfterViewInit {
    private sbItem;
    private _cdRef;
    isDisabled: boolean;
    customClass: string;
    indicator: boolean;
    id: string;
    ariaExpanded: boolean;
    ariaControls: string;
    constructor(sbItem: SBItemComponent, _cdRef: ChangeDetectorRef);
    onKeyDown(event: KeyboardEvent): void;
    toggleClick(event: any): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SBItemHeadComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SBItemHeadComponent, "mdb-item-head, mdb-accordion-item-head", ["sbItemHead"], {
    "isDisabled": "isDisabled";
    "indicator": "indicator";
    "customClass": "customClass";
}, {}, never>;
}

//# sourceMappingURL=sb-item.head.d.ts.map