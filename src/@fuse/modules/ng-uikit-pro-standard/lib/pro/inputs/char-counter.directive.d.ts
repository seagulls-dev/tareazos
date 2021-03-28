import { OnInit, ElementRef, Renderer2 } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class CharCounterDirective implements OnInit {
    private _elRef;
    private _renderer;
    length: number;
    textContainer: any;
    constructor(_elRef: ElementRef, _renderer: Renderer2);
    ngOnInit(): void;
    onKeyUp(): void;
    hide(): void;
    show(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CharCounterDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CharCounterDirective, "[mdbCharCounter]", never, {
    "length": "length";
}, {}, never>;
}

//# sourceMappingURL=char-counter.directive.d.ts.map