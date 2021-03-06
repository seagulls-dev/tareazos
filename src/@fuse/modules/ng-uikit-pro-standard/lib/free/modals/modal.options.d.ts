import * as ɵngcc0 from '@angular/core';
export declare class ModalOptions {
    /**
     *  Includes a modal-backdrop element. Alternatively, specify static for a backdrop which doesn't close the modal on click.
     */
    backdrop?: boolean | 'static' | any;
    /**
     * Closes the modal when escape key is pressed.
     */
    keyboard?: boolean;
    focus?: boolean;
    /**
     * Shows the modal when initialized.
     */
    show?: boolean;
    /**
     * Ignore the backdrop click
     */
    ignoreBackdropClick?: boolean;
    /**
     * Css class for opened modal
     */
    class?: string;
    /**
     * Toggle animation
     */
    containerClass?: string;
    animated?: boolean;
    scroll?: boolean;
    data?: Object;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ModalOptions>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ModalOptions>;
}
export declare class MDBModalRef {
    /**
     * Reference to a component inside the modal. Null if modal's been created with TemplateRef
     */
    content?: any | null;
    /**
     * Hides the modal
     */
    hide(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MDBModalRef>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<MDBModalRef>;
}
export declare const modalConfigDefaults: ModalOptions;
export declare const ClassName: any;
export declare const Selector: any;
export declare const TransitionDurations: any;
export declare const DISMISS_REASONS: {
    BACKRDOP: string;
    ESC: string;
};

//# sourceMappingURL=modal.options.d.ts.map