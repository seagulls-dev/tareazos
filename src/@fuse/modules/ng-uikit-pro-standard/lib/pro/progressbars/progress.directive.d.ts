import { BarComponent } from './bar.component';
import * as ɵngcc0 from '@angular/core';
export declare class ProgressDirective {
    /** if `true` changing value of progress bar will be animated (note: not supported by Bootstrap 4) */
    animate: boolean;
    /** maximum total value of progress element */
    max: number;
    addClass: boolean;
    bars: any[];
    protected _max: number;
    addBar(bar: BarComponent): void;
    removeBar(bar: BarComponent): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProgressDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<ProgressDirective, "mdbProgress, [mdbProgress]", never, {
    "max": "max";
    "animate": "animate";
}, {}, never>;
}

//# sourceMappingURL=progress.directive.d.ts.map