import { ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ModalOptions } from './modal.options';
import * as ɵngcc0 from '@angular/core';
export declare class ModalContainerComponent implements OnInit, OnDestroy {
    private _renderer;
    modalClass: string;
    tabindex: number;
    role: string;
    modal: boolean;
    private mdbModalService;
    config: ModalOptions;
    isShown: boolean;
    level: number;
    isAnimated: boolean;
    protected _element: ElementRef;
    private isModalHiding;
    private utils;
    onClick(event: any): void;
    onEsc(): void;
    onKeyDown(event: any): void;
    constructor(options: ModalOptions, _element: ElementRef, _renderer: Renderer2);
    ngOnInit(): void;
    focusModalElement(): void;
    updateContainerClass(): void;
    ngOnDestroy(): void;
    hide(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ModalContainerComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ModalContainerComponent, "mdb-modal-container", never, {}, {}, never>;
}

//# sourceMappingURL=modalContainer.component.d.ts.map