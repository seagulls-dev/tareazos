import { Validator, AbstractControl } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export declare class EqualValidatorDirective implements Validator {
    validateEqual: string;
    reverse: string;
    constructor(validateEqual: string, reverse: string);
    private readonly isReverse;
    validate(c: AbstractControl): {
        [key: string]: any;
    } | null;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<EqualValidatorDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<EqualValidatorDirective, "[mdb-validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]", never, {}, {}, never>;
}

//# sourceMappingURL=equal-validator.directive.d.ts.map