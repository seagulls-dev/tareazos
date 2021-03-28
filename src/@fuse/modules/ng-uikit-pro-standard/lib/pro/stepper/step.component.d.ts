import { TemplateRef, ElementRef, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export declare class MdbStepComponent implements OnInit {
    el: ElementRef;
    content: TemplateRef<any>;
    editable: boolean;
    name: string;
    label: string;
    stepForm: FormGroup;
    constructor(el: ElementRef);
    isDone: boolean;
    private _isDone;
    isWrong: boolean;
    private _isWrong;
    isActive: boolean;
    private _isActive;
    private _removeClasses;
    reset(): void;
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MdbStepComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MdbStepComponent, "mdb-step", ["mdbStep"], {
    "editable": "editable";
    "name": "name";
    "label": "label";
    "stepForm": "stepForm";
}, {}, never>;
}

//# sourceMappingURL=step.component.d.ts.map