import { OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export declare const CHECKBOX_CONTROL_VALUE_ACCESSOR: any;
/**
 * Add checkbox functionality to any element
 */
export declare class ButtonCheckboxDirective implements ControlValueAccessor, OnInit {
    /** Truthy value, will be set to ngModel */
    btnCheckboxTrue: any;
    /** Falsy value, will be set to ngModel */
    btnCheckboxFalse: any;
    state: boolean;
    protected value: any;
    protected isDisabled: boolean;
    protected onChange: any;
    protected onTouched: any;
    onClick(): void;
    ngOnInit(): any;
    protected readonly trueValue: boolean;
    protected readonly falseValue: boolean;
    toggle(state: boolean): void;
    writeValue(value: any): void;
    setDisabledState(isDisabled: boolean): void;
    registerOnChange(fn: (_: any) => {}): void;
    registerOnTouched(fn: () => {}): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ButtonCheckboxDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<ButtonCheckboxDirective, "[mdbCheckbox]", never, {
    "btnCheckboxTrue": "btnCheckboxTrue";
    "btnCheckboxFalse": "btnCheckboxFalse";
}, {}, never>;
}

//# sourceMappingURL=checkbox.directive.d.ts.map