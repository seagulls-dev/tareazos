import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, QueryList, Renderer2 } from '@angular/core';
import { SlideComponent } from './slide.component';
import { CarouselConfig } from './carousel.config';
import * as ɵngcc0 from '@angular/core';
export declare enum Direction {
    UNKNOWN = 0,
    NEXT = 1,
    PREV = 2
}
/**
 * Base element to create carousel
 */
export declare class CarouselComponent implements OnDestroy, AfterViewInit {
    protected el: ElementRef;
    private cdRef;
    private renderer;
    SWIPE_ACTION: {
        LEFT: string;
        RIGHT: string;
    };
    _slidesList: QueryList<SlideComponent>;
    readonly slides: SlideComponent[];
    private _destroy$;
    protected currentInterval: any;
    protected isPlaying: boolean;
    protected destroyed: boolean;
    protected animationEnd: boolean;
    protected _currentActiveSlide: number;
    protected carouselIndicators: any;
    isBrowser: any;
    noWrap: boolean;
    noPause: boolean;
    isControls: boolean;
    keyboard: boolean;
    class: String;
    type: String;
    animation: String;
    activeSlideIndex: number;
    activeSlideChange: EventEmitter<any>;
    activeSlide: number;
    protected _interval: number;
    checkNavigation(): boolean;
    checkDots(): boolean;
    getImg(slide: any): any;
    interval: number;
    readonly isBs4: boolean;
    constructor(config: CarouselConfig, el: ElementRef, platformId: string, cdRef: ChangeDetectorRef, renderer: Renderer2);
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    swipe(action?: string): void;
    nextSlide(force?: boolean): void;
    previousSlide(force?: boolean): void;
    protected fadeAnimation(goToIndex: number, direction?: any): void;
    protected slideAnimation(goToIndex: number, direction: any): void;
    selectSlide(index: number): void;
    play(): void;
    pause(): void;
    getCurrentSlideIndex(): number;
    isLast(index: number): boolean;
    private findNextSlideIndex;
    private _select;
    private restartTimer;
    private resetTimer;
    protected hasClass(el: any, className: any): any;
    protected classAdd(el: any, className: any): void;
    protected removeClass(el: any, className: any): void;
    keyboardControl(event: KeyboardEvent): void;
    focus(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CarouselComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CarouselComponent, "mdb-carousel", never, {
    "isControls": "isControls";
    "class": "class";
    "type": "type";
    "animation": "animation";
    "activeSlide": "activeSlide";
    "interval": "interval";
    "noWrap": "noWrap";
    "noPause": "noPause";
    "keyboard": "keyboard";
    "activeSlideIndex": "activeSlideIndex";
}, {
    "activeSlideChange": "activeSlideChange";
}, ["_slidesList"]>;
}

//# sourceMappingURL=carousel.component.d.ts.map