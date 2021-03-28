import { EventEmitter, ChangeDetectorRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class CardRotatingComponent {
    private _cdRef;
    rotate: boolean;
    ANIMATION_TRANSITION_TIME: number;
    animationStart: EventEmitter<any>;
    animationEnd: EventEmitter<any>;
    constructor(_cdRef: ChangeDetectorRef);
    toggle(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CardRotatingComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CardRotatingComponent, "mdb-card-rotating, mdb-flipping-card", never, {}, {
    "animationStart": "animationStart";
    "animationEnd": "animationEnd";
}, never>;
}

//# sourceMappingURL=card-rotating.component.d.ts.map