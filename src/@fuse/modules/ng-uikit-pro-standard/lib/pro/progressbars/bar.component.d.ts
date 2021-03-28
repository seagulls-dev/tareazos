import { OnDestroy, OnInit } from '@angular/core';
import { ProgressDirective } from './progress.directive';
import * as ɵngcc0 from '@angular/core';
export declare class BarComponent implements OnInit, OnDestroy {
    max: number;
    /** provide one of the four supported contextual classes: `success`, `info`, `warning`, `danger` */
    type: string;
    /** current value of progress bar */
    value: number;
    percent: number;
    transition: string;
    progress: ProgressDirective;
    protected _value: number;
    constructor(progress: ProgressDirective);
    ngOnInit(): void;
    ngOnDestroy(): void;
    recalculatePercentage(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BarComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<BarComponent, "mdb-bar", never, {
    "value": "value";
    "type": "type";
}, {}, never>;
}

//# sourceMappingURL=bar.component.d.ts.map