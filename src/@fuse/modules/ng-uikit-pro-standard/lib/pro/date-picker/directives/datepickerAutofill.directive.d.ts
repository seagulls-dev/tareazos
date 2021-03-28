import { ElementRef, Renderer2 } from '@angular/core';
import { IMyInputAutoFill } from '../interfaces/inputAutofill.interface';
import * as ɵngcc0 from '@angular/core';
export declare class InputAutoFillDirective {
    private el;
    private rndr;
    opts: IMyInputAutoFill;
    constructor(el: ElementRef, rndr: Renderer2);
    onKeyUp(evt: KeyboardEvent): void;
    private endsWith;
    private insertPos;
    private getPartLength;
    private isNumber;
    private isDay;
    private isMonth;
    private getInputValue;
    private setInputValue;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<InputAutoFillDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<InputAutoFillDirective, "[mdbInputAutoFill]", never, {
    "opts": "opts";
}, {}, never>;
}

//# sourceMappingURL=datepickerAutofill.directive.d.ts.map