import { ElementRef, RendererFactory2, NgZone } from '@angular/core';
import { Options } from './models/index';
import * as ɵngcc0 from '@angular/core';
export interface PositioningOptions {
    /** The DOM element, ElementRef, or a selector string of an element which will be moved */
    element?: any;
    /** The DOM element, ElementRef, or a selector string of an element which the element will be attached to  */
    target?: any;
    /**
     * A string of the form 'vert-attachment horiz-attachment' or 'placement'
     * - placement can be "top", "bottom", "left", "right"
     * not yet supported:
     * - vert-attachment can be any of 'top', 'middle', 'bottom'
     * - horiz-attachment can be any of 'left', 'center', 'right'
     */
    attachment?: any;
    /** A string similar to `attachment`. The one difference is that, if it's not provided,
     * `targetAttachment` will assume the mirror image of `attachment`.
     */
    targetAttachment?: string;
    /** A string of the form 'vert-offset horiz-offset'
     * - vert-offset and horiz-offset can be of the form "20px" or "55%"
     */
    offset?: string;
    /** A string similar to `offset`, but referring to the offset of the target */
    targetOffset?: string;
    /** If true component will be attached to body */
    appendToBody?: boolean;
}
export declare class PositioningService {
    private _ngZone;
    options: Options;
    private update$$;
    private positionElements;
    constructor(rendererFactory: RendererFactory2, platformId: number, _ngZone: NgZone);
    position(options: PositioningOptions): void;
    addPositionElement(options: PositioningOptions): void;
    calcPosition(): void;
    deletePositionElement(elRef: ElementRef): void;
    setOptions(options: Options): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PositioningService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<PositioningService>;
}

//# sourceMappingURL=positioning.service.d.ts.map