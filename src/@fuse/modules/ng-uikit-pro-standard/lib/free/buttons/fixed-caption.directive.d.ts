import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class FixedButtonCaptionDirective implements OnInit {
    private renderer;
    private el;
    caption: string;
    collapseButtonActivator: any;
    private paragraphEl;
    constructor(renderer: Renderer2, el: ElementRef);
    ngOnInit(): void;
    createCaptionElement(): void;
    showCaption(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FixedButtonCaptionDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<FixedButtonCaptionDirective, "[mdbFixedCaption]", never, {
    "caption": "mdbFixedCaption";
    "collapseButtonActivator": "collapseButton";
}, {}, never>;
}

//# sourceMappingURL=fixed-caption.directive.d.ts.map