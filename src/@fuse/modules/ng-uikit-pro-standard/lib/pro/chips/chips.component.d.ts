import { EventEmitter, ChangeDetectorRef, ElementRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class MaterialChipsComponent {
    private _cdRef;
    chipsInput: ElementRef;
    initialInput: ElementRef;
    placeholder: string;
    addAreaDisplayed: boolean;
    isTagsFocused: boolean;
    values: string[];
    labelToAdd: string;
    focused: string;
    selected: string;
    noop: any;
    keyCodes: {
        backspace: number;
        delete: number;
    };
    tagsfocusedChange: EventEmitter<{}>;
    labelsChange: EventEmitter<string[]>;
    readonly tagsfocused: boolean;
    private onTouchedCallback;
    private onChangeCallback;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    constructor(_cdRef: ChangeDetectorRef);
    removeValue(value: string): void;
    handleKeydown(event: any): void;
    private _removeLast;
    addValue(value: string, event: any): void;
    writeValue(value: string[]): void;
    onFocus(): void;
    focusOutFunction(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MaterialChipsComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MaterialChipsComponent, "mdb-material-chips", never, {
    "placeholder": "placeholder";
    "tagsfocused": "tagsfocused";
}, {
    "tagsfocusedChange": "tagsfocusedChange";
    "labelsChange": "labelsChange";
}, never>;
}

//# sourceMappingURL=chips.component.d.ts.map