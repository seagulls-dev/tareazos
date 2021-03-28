import { ControlValueAccessor } from '@angular/forms';
import { ElementRef, Renderer2, AfterViewInit, EventEmitter, ChangeDetectorRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare const RANGE_VALUE_ACCESOR: any;
export declare class MdbRangeInputComponent implements ControlValueAccessor, AfterViewInit {
    private renderer;
    private cdRef;
    input: ElementRef;
    rangeCloud: ElementRef;
    rangeField: ElementRef;
    id: string;
    required: boolean;
    name: string;
    value: string;
    disabled: boolean;
    min: number;
    max: number;
    step: number;
    default: boolean;
    defaultRangeCounterClass: string;
    rangeValueChange: EventEmitter<any>;
    range: any;
    stepLength: number;
    steps: number;
    cloudRange: number;
    visibility: boolean;
    onchange(event: any): void;
    oninput(event: any): void;
    onclick(): void;
    onTouchStart(): void;
    onmouseleave(): void;
    constructor(renderer: Renderer2, cdRef: ChangeDetectorRef);
    focusRangeInput(): void;
    blurRangeInput(): void;
    coverage(event: any, value?: any): string | undefined;
    checkIfSafari(): boolean;
    ngAfterViewInit(): void;
    onChange: (_: any) => void;
    onTouched: () => void;
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MdbRangeInputComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MdbRangeInputComponent, "mdb-range-input", never, {
    "min": "min";
    "max": "max";
    "value": "value";
    "disabled": "disabled";
    "id": "id";
    "required": "required";
    "name": "name";
    "step": "step";
    "default": "default";
    "defaultRangeCounterClass": "defaultRangeCounterClass";
}, {
    "rangeValueChange": "rangeValueChange";
}, never>;
}

//# sourceMappingURL=mdb-range.component.d.ts.map