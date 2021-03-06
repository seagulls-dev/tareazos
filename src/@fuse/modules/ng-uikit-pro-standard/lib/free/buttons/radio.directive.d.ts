import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export declare const RADIO_CONTROL_VALUE_ACCESSOR: any;
/**
 * Create radio buttons or groups of buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
export declare class ButtonRadioDirective implements ControlValueAccessor, OnInit {
    protected el: ElementRef;
    private renderer;
    onChange: any;
    onTouched: any;
    radioElementsArray: Array<any>;
    /** Radio button value, will be set to `ngModel` */
    mdbRadio: any;
    /** If `true` — radio button can be unchecked */
    uncheckable: boolean;
    /** Current value of radio component or group */
    value: any;
    readonly isActive: boolean;
    onClick(event?: any): void;
    constructor(el: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    onBlur(): void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ButtonRadioDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<ButtonRadioDirective, "[mdbRadio]", never, {
    "value": "value";
    "uncheckable": "uncheckable";
    "mdbRadio": "mdbRadio";
}, {}, never>;
}

//# sourceMappingURL=radio.directive.d.ts.map