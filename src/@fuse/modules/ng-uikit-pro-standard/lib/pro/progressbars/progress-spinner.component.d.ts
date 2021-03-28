import { AfterViewInit, ElementRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class ProgressSpinnerComponent implements AfterViewInit {
    el: ElementRef;
    addClass: String;
    isBrowser: boolean;
    spinnerType: string;
    spinnerColor: string;
    constructor(el: ElementRef, platformId: string);
    ngAfterViewInit(): void;
    spinerRun(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProgressSpinnerComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ProgressSpinnerComponent, "mdb-spinner", never, {
    "spinnerType": "spinnerType";
    "spinnerColor": "spinnerColor";
}, {}, never>;
}

//# sourceMappingURL=progress-spinner.component.d.ts.map