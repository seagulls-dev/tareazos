import { ElementRef, OnInit, Renderer2, SimpleChanges, OnChanges } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class MdbBtnDirective implements OnInit, OnChanges {
    private el;
    private renderer;
    color: string;
    rounded: boolean;
    gradient: string;
    outline: boolean;
    flat: boolean;
    size: string;
    block: boolean;
    floating: boolean;
    simpleChange: string;
    simpleChangeValue: string;
    private colorClass;
    private gradientClass;
    private outlineClass;
    private flatClass;
    private roundedClass;
    private sizeClass;
    private blockClass;
    private floatingClass;
    constructor(el: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    initClasses(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MdbBtnDirective>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MdbBtnDirective, "[mdbBtn]", never, {
    "color": "color";
    "rounded": "rounded";
    "gradient": "gradient";
    "outline": "outline";
    "flat": "flat";
    "size": "size";
    "block": "block";
    "floating": "floating";
}, {}, never>;
}

//# sourceMappingURL=buttons.directive.d.ts.map