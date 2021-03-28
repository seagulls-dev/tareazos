import { ElementRef, InjectionToken, OnInit } from '@angular/core';
import { ISelectedOption } from '../interfaces/selected-option.interface';
import { Subject, Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export interface MdbOptionParent {
    optionHeight: number;
    visibleOptions: number;
}
export declare const MDB_OPTION_PARENT: InjectionToken<MdbOptionParent>;
export declare class MdbOptionComponent implements OnInit {
    el: ElementRef;
    private _parent;
    value: string;
    disabled: boolean;
    _optionHeight: any;
    readonly optionHeight: any;
    clicked: boolean;
    selectedItem: ISelectedOption;
    clickSource: Subject<MdbOptionComponent>;
    click$: Observable<MdbOptionComponent>;
    constructor(el: ElementRef, _parent: MdbOptionParent);
    onClick(): void;
    readonly label: any;
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MdbOptionComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MdbOptionComponent, "mdb-option", never, {
    "value": "value";
    "disabled": "disabled";
}, {}, never>;
}

//# sourceMappingURL=mdb-option.component.d.ts.map