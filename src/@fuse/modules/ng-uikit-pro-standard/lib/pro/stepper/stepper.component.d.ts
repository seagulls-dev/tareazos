import { QueryList, AfterContentInit, ElementRef, AfterViewInit, Renderer2, AfterContentChecked, EventEmitter, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MdbStepComponent } from './step.component';
import { WavesDirective } from '../../free/waves/waves-effect.directive';
import { Observable, Subject } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class StepChangeEvent {
    activeStep: MdbStepComponent;
    activeStepIndex: number;
    previousStep: MdbStepComponent;
    previousStepIndex: number;
}
export declare class MdbStepperComponent implements AfterContentInit, AfterViewInit, AfterContentChecked, OnDestroy {
    ripple: WavesDirective;
    private _renderer;
    private _cdRef;
    steps: QueryList<MdbStepComponent>;
    stepTitles: QueryList<ElementRef>;
    stepContents: QueryList<ElementRef>;
    container: ElementRef;
    linear: boolean;
    disableWaves: boolean;
    vertical: boolean;
    private _vertical;
    stepChange: EventEmitter<StepChangeEvent>;
    constructor(ripple: WavesDirective, _renderer: Renderer2, _cdRef: ChangeDetectorRef, platformId: string);
    private _destroy;
    isBrowser: boolean;
    horizontal: boolean;
    activeStepIndex: number;
    private _activeStepIndex;
    private _activeStep;
    private stepTextContent;
    stepChangeSubject: Subject<any>;
    stepChange$: Observable<any>;
    getStepChange$(): Observable<any>;
    onClick(index: number, event: any): void;
    private _isStepValid;
    getAnimationState(index: number): string;
    private _getStepByIndex;
    next(): void;
    previous(): void;
    submit(): void;
    setNewActiveStep(index: number): void;
    private _markCurrentAsDone;
    private _markCurrentAsWrong;
    private _markStepControlsAsDirty;
    private _removeStepValidationClasses;
    private _isNewStepLinear;
    private _setActiveStep;
    private _removeCurrentActiveStep;
    resetAll(): void;
    private _updateHorizontalStepperHeight;
    private _initStepperVariation;
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    ngAfterContentChecked(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MdbStepperComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MdbStepperComponent, "mdb-stepper", ["mdbStepper"], {
    "linear": "linear";
    "disableWaves": "disableWaves";
    "vertical": "vertical";
}, {
    "stepChange": "stepChange";
}, ["steps"]>;
}

//# sourceMappingURL=stepper.component.d.ts.map