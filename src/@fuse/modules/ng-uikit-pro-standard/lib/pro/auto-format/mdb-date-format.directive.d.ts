import { OnInit } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class MdbDateFormatDirective implements OnInit {
    resultLength: number;
    separatorsNumber: number;
    separator: string;
    format: string[];
    onInput(event: any): void;
    ngOnInit(): void;
    setSeparatorsNumber(): void;
    setResultLength(): void;
    getFormattedDate(date: string): string;
    getDateParts(date: string): string[];
    getDigits(value: string): string;
    formatDateParts(datePart: any, index: number): any;
    getFormattedDay(value: string): string | undefined;
    getFormattedMonth(value: string): string | undefined;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MdbDateFormatDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<MdbDateFormatDirective, "[mdbDateFormat]", never, {
    "separator": "separator";
    "format": "format";
}, {}, never>;
}

//# sourceMappingURL=mdb-date-format.directive.d.ts.map