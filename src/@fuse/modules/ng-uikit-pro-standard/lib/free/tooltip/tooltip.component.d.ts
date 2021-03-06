import { AfterViewInit, ElementRef } from '@angular/core';
import { TooltipConfig } from './tooltip.service';
import * as ɵngcc0 from '@angular/core';
export declare class TooltipContainerComponent implements AfterViewInit {
    elem: ElementRef;
    classMap: any;
    placement: string;
    popupClass: string;
    animation: boolean;
    containerClass: string;
    tooltipInner: ElementRef;
    tooltipArrow: ElementRef;
    show: boolean;
    readonly tooltipClasses: string;
    readonly isBs3: boolean;
    constructor(config: TooltipConfig, elem: ElementRef);
    ngAfterViewInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TooltipContainerComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TooltipContainerComponent, "mdb-tooltip-container", never, {
    "containerClass": "containerClass";
}, {}, never>;
}

//# sourceMappingURL=tooltip.component.d.ts.map