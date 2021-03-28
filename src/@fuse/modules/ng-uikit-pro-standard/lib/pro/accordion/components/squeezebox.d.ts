import { AfterContentInit, OnDestroy, OnInit, QueryList } from '@angular/core';
import { SBItemComponent } from './sb-item';
import { MdbAccordionService } from '../mdb-accordion.service';
import * as ɵngcc0 from '@angular/core';
export declare class SqueezeBoxComponent implements OnInit, AfterContentInit, OnDestroy {
    private accordionService;
    private itemsChanges;
    multiple: boolean;
    autoExpand: boolean;
    private _multiple;
    items: QueryList<SBItemComponent>;
    constructor(accordionService: MdbAccordionService);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SqueezeBoxComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SqueezeBoxComponent, "mdb-squeezebox, mdb-accordion", ["squeezebox"], {
    "autoExpand": "autoExpand";
    "multiple": "multiple";
}, {}, ["items"]>;
}

//# sourceMappingURL=squeezebox.d.ts.map