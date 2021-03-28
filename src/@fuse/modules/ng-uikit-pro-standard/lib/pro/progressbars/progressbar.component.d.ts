import { ProgressbarConfigComponent } from './progressbar.config.component';
import * as ɵngcc0 from '@angular/core';
export declare class ProgressbarComponent {
    /** if `true` changing value of progress bar will be animated (note: not supported by Bootstrap 4) */
    animate: boolean;
    /** maximum total value of progress element */
    max: number;
    /** provide one of the four supported contextual classes: `success`, `info`, `warning`, `danger` */
    type: string;
    /** current value of progress bar */
    value: number;
    constructor(config: ProgressbarConfigComponent);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProgressbarComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ProgressbarComponent, "mdb-progressbar, mdb-progress", never, {
    "animate": "animate";
    "max": "max";
    "type": "type";
    "value": "value";
}, {}, never>;
}

//# sourceMappingURL=progressbar.component.d.ts.map