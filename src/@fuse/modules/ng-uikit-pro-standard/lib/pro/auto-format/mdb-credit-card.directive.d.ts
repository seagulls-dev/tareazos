import * as ɵngcc0 from '@angular/core';
export interface CreditCard {
    name: string;
    fullName: string;
    re: RegExp;
    pattern: RegExp;
    maxLength: number;
    cvvLength: number;
}
export declare class MdbCreditCardDirective {
    private standardPattern;
    cardName: string;
    cardFullName: string;
    private defaultCard;
    private cards;
    additionalCards: CreditCard[];
    private _additionalCards;
    separator: string;
    private _separator;
    constructor();
    maxLength: string;
    onInput(event: any): void;
    private formatInput;
    private getFormattedInput;
    private removeNonDigits;
    private hasStandardPattern;
    private isMatch;
    private updateCurrentCardNames;
    private findCardByNumber;
    addCards(newCards: CreditCard[]): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MdbCreditCardDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<MdbCreditCardDirective, "[mdbCreditCard]", ["mdbCreditCard"], {
    "additionalCards": "additionalCards";
    "separator": "separator";
}, {}, never>;
}

//# sourceMappingURL=mdb-credit-card.directive.d.ts.map