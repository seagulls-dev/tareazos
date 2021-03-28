import { AfterContentInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { SBItemBodyComponent } from './sb-item.body';
import { MdbAccordionService } from '../mdb-accordion.service';
import * as ɵngcc0 from '@angular/core';
export declare class SBItemComponent implements AfterViewInit, AfterContentInit {
    private accordionService;
    private _cdRef;
    collapsed: boolean;
    customClass: string;
    autoExpand: boolean;
    idModifier: number;
    body: SBItemBodyComponent;
    constructor(accordionService: MdbAccordionService, _cdRef: ChangeDetectorRef);
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    toggle(collapsed: boolean): void;
    applyToggle(collapsed: boolean): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SBItemComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SBItemComponent, "mdb-item, mdb-accordion-item", ["sbItem"], {
    "collapsed": "collapsed";
    "customClass": "customClass";
}, {}, ["body"]>;
}

//# sourceMappingURL=sb-item.d.ts.map