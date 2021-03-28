import { OnDestroy, ElementRef, NgZone, Renderer2 } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare type ProgressSpinnerMode = 'determinate' | 'indeterminate';
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
export declare class MdProgressSpinnerCssMatStylerDirective {
    true: any;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MdProgressSpinnerCssMatStylerDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<MdProgressSpinnerCssMatStylerDirective, "[mdbSpinners], mat-progress-spinner", never, {}, {}, never>;
}
/**
 * <md-progress-spinner> component.
 */
export declare class MdProgressSpinnerComponent implements OnDestroy {
    private _ngZone;
    private _elementRef;
    private _renderer;
    /** The id of the last requested animation. */
    private _lastAnimationId;
    /** The id of the indeterminate interval. */
    private _interdeterminateInterval;
    /** The SVG <path> node that is used to draw the circle. */
    private _path;
    private _mode;
    private _value;
    private _color;
    isBrowser: any;
    platformId: string;
    /**
     * Values for aria max and min are only defined as numbers when in a determinate mode.  We do this
     * because voiceover does not report the progress indicator as indeterminate if the aria min
     * and/or max value are number values.
     */
    readonly _ariaValueMin: 0 | null;
    readonly _ariaValueMax: 100 | null;
    /** @docs-private */
    /** @docs-private */
    interdeterminateInterval: any;
    /**
     * Clean up any animations that were running.
     */
    ngOnDestroy(): void;
    /** The color of the progress-spinner. Can be primary, accent, or warn. */
    color: string;
    /** Value of the progress circle. It is bound to the host as the attribute aria-valuenow. */
    value: any;
    /**
     * Mode of the progress circle
     *
     * Input must be one of the values from ProgressMode, defaults to 'determinate'.
     * mode is bound to the host as the attribute host.
     */
    mode: ProgressSpinnerMode;
    constructor(_ngZone: NgZone, _elementRef: ElementRef, _renderer: Renderer2, platformId?: string | any);
    /**
     * Animates the circle from one percentage value to another.
     *
     * @param animateFrom The percentage of the circle filled starting the animation.
     * @param animateTo The percentage of the circle filled ending the animation.
     * @param ease The easing function to manage the pace of change in the animation.
     * @param duration The length of time to show the animation, in milliseconds.
     * @param rotation The starting angle of the circle fill, with 0° represented at the top center
     *    of the circle.
     */
    private _animateCircle;
    /**
     * Starts the indeterminate animation interval, if it is not already running.
     */
    private _startIndeterminateAnimation;
    /**
     * Removes interval, ending the animation.
     */
    private _cleanupIndeterminateAnimation;
    /**
     * Renders the arc onto the SVG element. Proxies `getArc` while setting the proper
     * DOM attribute on the `<path>`.
     */
    private _renderArc;
    /**
     * Updates the color of the progress-spinner by adding the new palette class to the element
     * and removing the old one.
     */
    private _updateColor;
    /** Sets the given palette class on the component element. */
    private _setElementColor;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MdProgressSpinnerComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MdProgressSpinnerComponent, "mdb-Spinners, mat-progress-spinner", never, {
    "color": "color";
    "value": "value";
    "mode": "mode";
}, {}, never>;
}
/**
 * <md-spinner> component.
 *
 * This is a component definition to be used as a convenience reference to create an
 * indeterminate <md-progress-spinner> instance.
 */
export declare class MdSpinnerComponent extends MdProgressSpinnerComponent implements OnDestroy {
    true: any;
    constructor(elementRef: ElementRef, ngZone: NgZone, renderer: Renderer2);
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MdSpinnerComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MdSpinnerComponent, "mdb-spinners, mat-spinner, mdb-progress-spinner", never, {}, {}, never>;
}

//# sourceMappingURL=progress-spinner.component.d.ts.map