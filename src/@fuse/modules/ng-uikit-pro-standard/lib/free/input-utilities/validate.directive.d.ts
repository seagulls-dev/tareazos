import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class MdbValidateDirective implements OnInit {
    private renderer;
    private el;
    private _validate;
    private _validateSuccess;
    private _validateError;
    mdbValidate: boolean;
    validate: boolean;
    validateSuccess: boolean;
    validateError: boolean;
    constructor(renderer: Renderer2, el: ElementRef);
    updateSuccessClass(): void;
    updateErrorClass(): void;
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MdbValidateDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<MdbValidateDirective, "[mdbValidate]", never, {
    "validate": "validate";
    "validateSuccess": "validateSuccess";
    "validateError": "validateError";
    "mdbValidate": "mdbValidate";
}, {}, never>;
}

//# sourceMappingURL=validate.directive.d.ts.map