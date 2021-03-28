import { ElementRef, Renderer2, ChangeDetectorRef, EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class CardRevealComponent {
    private _r;
    private _cdRef;
    cardReveal: ElementRef;
    cardFront: ElementRef;
    cardOverflow: ElementRef;
    animationStart: EventEmitter<any>;
    animationEnd: EventEmitter<any>;
    socials: any;
    show: boolean;
    onWindowResize(): void;
    constructor(_r: Renderer2, _cdRef: ChangeDetectorRef);
    toggle(): void;
    onAnimationStart(): void;
    onAnimationDone(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CardRevealComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CardRevealComponent, "mdb-card-reveal", never, {}, {
    "animationStart": "animationStart";
    "animationEnd": "animationEnd";
}, never>;
}

//# sourceMappingURL=card-reveal.component.d.ts.map