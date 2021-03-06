import { ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { TooltipConfig } from './tooltip.service';
import { ComponentLoaderFactory } from '../utils/component-loader/component-loader.factory';
import { PositioningService } from '../utils/positioning/positioning.service';
import * as ɵngcc0 from '@angular/core';
export declare class TooltipDirective implements OnInit, OnDestroy, OnChanges {
    private _elementRef;
    private _positionService;
    private platformId;
    /**
     * Content to be displayed as tooltip.
     */
    mdbTooltip: string | TemplateRef<any>;
    /** Fired when tooltip content changes */
    tooltipChange: EventEmitter<string | TemplateRef<any>>;
    /**
     * Placement of a tooltip. Accepts: "top", "bottom", "left", "right"
     */
    placement: string;
    /**
     * Specifies events that should trigger. Supports a space separated list of
     * event names.
     */
    triggers: string;
    /**
     * A selector specifying the element the tooltip should be appended to.
     * Currently only supports "body".
     */
    container: string;
    /**
     * Returns whether or not the tooltip is currently being shown
     */
    isOpen: boolean;
    /**
     * Allows to disable tooltip
     */
    isDisabled: boolean;
    dynamicPosition: boolean;
    /**
     * Emits an event when the tooltip is shown
     */
    onShown: EventEmitter<any>;
    shown: EventEmitter<any>;
    /**
     * Emits an event when the tooltip is hidden
     */
    onHidden: EventEmitter<any>;
    hidden: EventEmitter<any>;
    delay: number;
    customHeight: string;
    fadeDuration: number;
    private _destroy$;
    protected _delayTimeoutId: any;
    private _tooltip;
    isBrowser: any;
    constructor(_renderer: Renderer2, _elementRef: ElementRef, _positionService: PositioningService, _viewContainerRef: ViewContainerRef, cis: ComponentLoaderFactory, config: TooltipConfig, platformId: string);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    toggle(): void;
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    show(): void;
    private showTooltip;
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    hide(): void;
    dispose(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TooltipDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<TooltipDirective, "[mdbTooltip]", ["mdb-tooltip"], {
    "dynamicPosition": "dynamicPosition";
    "delay": "delay";
    "fadeDuration": "fadeDuration";
    "isOpen": "isOpen";
    "mdbTooltip": "mdbTooltip";
    "placement": "placement";
    "triggers": "triggers";
    "container": "container";
    "isDisabled": "isDisabled";
    "customHeight": "customHeight";
}, {
    "tooltipChange": "tooltipChange";
    "onShown": "onShown";
    "shown": "shown";
    "onHidden": "onHidden";
    "hidden": "hidden";
}, never>;
}

//# sourceMappingURL=tooltip.directive.d.ts.map