/**
 * <md-progress-bar> component.
 */
import * as ɵngcc0 from '@angular/core';
export declare class ProgressBarComponent {
    /** Color of the progress bar. */
    color: 'primary' | 'accent' | 'warn';
    private _value;
    /** Value of the progressbar. Defaults to zero. Mirrored to aria-valuenow. */
    value: number;
    private _bufferValue;
    /** Buffer value of the progress bar. Defaults to zero. */
    bufferValue: number;
    /**
     * Mode of the progress bar.
     *
     * Input must be one of these values: determinate, indeterminate, buffer, query, defaults to
     * 'determinate'.
     * Mirrored to mode attribute.
     */
    mode: 'determinate' | 'indeterminate' | 'buffer' | 'query';
    /** Gets the current transform value for the progress bar's primary indicator. */
    _primaryTransform(): {
        transform: string;
    };
    /**
     * Gets the current transform value for the progress bar's buffer indicator.  Only used if the
     * progress mode is set to buffer, otherwise returns an undefined, causing no transformation.
     */
    _bufferTransform(): {
        transform: string;
    } | undefined;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProgressBarComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ProgressBarComponent, "mdb-progress-bar, mat-progress-bar", never, {
    "color": "color";
    "mode": "mode";
    "value": "value";
    "bufferValue": "bufferValue";
}, {}, never>;
}

//# sourceMappingURL=progressbar.component.d.ts.map