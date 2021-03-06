import { ElementRef, Renderer2, AfterViewInit, AfterViewChecked, OnInit, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class MdbInputDirective implements AfterViewChecked, OnInit, AfterViewInit, DoCheck, OnChanges {
    private _elRef;
    private _renderer;
    wrongTextContainer: any;
    rightTextContainer: any;
    el: ElementRef | any;
    elLabel: ElementRef | any;
    elIcon: Element | any;
    element: any;
    mdbInputDirective: MdbInputDirective;
    customRegex: any;
    mdbValidate: boolean;
    validateSuccess: boolean;
    validateError: boolean;
    focusCheckbox: boolean;
    focusRadio: boolean;
    errorMessage: string;
    successMessage: string;
    isBrowser: any;
    isClicked: boolean;
    constructor(_elRef: ElementRef, _renderer: Renderer2, platformId: string);
    onfocus(): void;
    onblur(): void;
    onchange(): void;
    oniput(): void;
    onkeydown(event: any): void;
    oncut(): void;
    onpaste(): void;
    ondrop(): void;
    updateErrorMsg(value: string): void;
    updateSuccessMsg(value: string): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngDoCheck(): void;
    validationFunction(): void;
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    resize(): void;
    delayedResize(): void;
    initComponent(): void;
    private checkValue;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MdbInputDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<MdbInputDirective, "[mdbInputDirective]", never, {
    "mdbValidate": "mdbValidate";
    "validateSuccess": "validateSuccess";
    "validateError": "validateError";
    "focusCheckbox": "focusCheckbox";
    "focusRadio": "focusRadio";
    "mdbInputDirective": "mdbInputDirective";
    "customRegex": "customRegex";
    "errorMessage": "errorMessage";
    "successMessage": "successMessage";
}, {}, never>;
}

//# sourceMappingURL=mdb-input.directive.d.ts.map