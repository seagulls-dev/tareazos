import { ElementRef, EventEmitter, OnInit, Renderer2 } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class ImageModalComponent implements OnInit {
    element: ElementRef;
    renderer: Renderer2;
    _element: any;
    opened: boolean;
    imgSrc: string;
    currentImageIndex: number;
    loading: boolean;
    showRepeat: boolean;
    openModalWindow: any;
    caption: string;
    isMobile: any;
    clicked: any;
    isBrowser: any;
    zoomed: string;
    SWIPE_ACTION: {
        LEFT: string;
        RIGHT: string;
    };
    modalImages: any;
    imagePointer: number;
    fullscreen: boolean;
    zoom: boolean;
    smooth: boolean;
    type: String;
    galleryImg: ElementRef;
    galleryDescription: ElementRef;
    cancelEvent: EventEmitter<any>;
    constructor(platformId: string, element: ElementRef, renderer: Renderer2);
    toggleZoomed(): void;
    toggleRestart(): void;
    ngOnInit(): void;
    closeGallery(): void;
    prevImage(): void;
    nextImage(): void;
    openGallery(index: any): void;
    fullScreen(): any;
    readonly is_iPhone_or_iPod: boolean | undefined;
    keyboardControl(event: KeyboardEvent): void;
    swipe(action?: String): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ImageModalComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ImageModalComponent, "mdb-image-modal", never, {
    "smooth": "smooth";
    "zoom": "zoom";
    "modalImages": "modalImages";
    "imagePointer": "imagePointer";
    "fullscreen": "fullscreen";
    "type": "type";
}, {
    "cancelEvent": "cancelEvent";
}, never>;
}

//# sourceMappingURL=image-popup.d.ts.map