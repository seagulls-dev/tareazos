import { AfterViewInit, ElementRef, EventEmitter, OnDestroy, Renderer2 } from '@angular/core';
import { MdbAutoCompleterComponent } from '../components/mdb-auto-completer.component';
import { ControlValueAccessor } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export declare const MAT_AUTOCOMPLETE_VALUE_ACCESSOR: any;
export declare class MdbAutoCompleterDirective implements AfterViewInit, OnDestroy, ControlValueAccessor {
    private renderer;
    private el;
    private document;
    mdbAutoCompleter: MdbAutoCompleterComponent;
    ngModelChange: EventEmitter<any>;
    clearBtnClicked: EventEmitter<any>;
    private _destroy$;
    private _autocompleterInputChanges;
    private _clearButton;
    private _canOpenOnFocus;
    private utils;
    listenToClearClick: Function;
    listenFunc: Function;
    isBrowser: boolean;
    onKeydown(event: any): void;
    _handleInput(event: any): void;
    _handleFocusIn(): void;
    _handleBlurIn(): void;
    handleMouseDown(): void;
    constructor(renderer: Renderer2, el: ElementRef, platformId: string, document: any);
    private _renderClearButton;
    private _updateClearButtonVisibility;
    private _setStyles;
    private _addClass;
    private _clearInput;
    clear(): void;
    _handleKeyDown(event: any): void;
    getCoords(elem: any): any;
    private _isOpen;
    private _show;
    private _hide;
    private _appendDropdownToInput;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    _onChange: (value: any) => void;
    _onTouched: () => void;
    writeValue(value: any): void;
    registerOnChange(fn: (value: any) => {}): void;
    registerOnTouched(fn: () => {}): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MdbAutoCompleterDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<MdbAutoCompleterDirective, "input[mdbAutoCompleter], textarea[mdbAutoCompleter]", ["mdbAutoCompleterTrigger"], {
    "mdbAutoCompleter": "mdbAutoCompleter";
}, {
    "ngModelChange": "ngModelChange";
    "clearBtnClicked": "clearBtnClicked";
}, never>;
}

//# sourceMappingURL=mdb-auto-completer.directive.d.ts.map