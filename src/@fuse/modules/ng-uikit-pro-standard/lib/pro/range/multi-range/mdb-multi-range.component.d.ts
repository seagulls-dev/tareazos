import { ElementRef, EventEmitter, Renderer2, OnInit, AfterViewInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export declare const RANGE_VALUE_ACCESOR: any;
export declare class MdbMultiRangeInputComponent implements OnInit, AfterViewInit, ControlValueAccessor {
    private renderer;
    id: string;
    required: boolean;
    name: string;
    value: {
        first: number | string;
        second: number | string;
    };
    disabled: boolean;
    min: number;
    max: number;
    step: number;
    rangeValueChange: EventEmitter<{
        first: number;
        second: number;
    }>;
    firstInput: ElementRef;
    secondInput: ElementRef;
    firstRangeCloud: ElementRef;
    secondRangeCloud: ElementRef;
    rangeField: ElementRef;
    range: any;
    steps: number;
    stepLength: number;
    firstVisibility: boolean;
    secondVisibility: boolean;
    cloudRange: number;
    constructor(renderer: Renderer2);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    firstRangeInput(event: any): any;
    secondRangeInput(event: any): any;
    private moveValueCloud;
    focusRangeInput(element: string): void;
    blurRangeInput(element: string): void;
    checkIfSafari(): boolean;
    onChange: (_: any) => void;
    onTouched: () => void;
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MdbMultiRangeInputComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MdbMultiRangeInputComponent, "mdb-multi-range-input", never, {
    "value": "value";
    "min": "min";
    "max": "max";
    "disabled": "disabled";
    "id": "id";
    "required": "required";
    "name": "name";
    "step": "step";
}, {
    "rangeValueChange": "rangeValueChange";
}, never>;
}

//# sourceMappingURL=mdb-multi-range.component.d.ts.map