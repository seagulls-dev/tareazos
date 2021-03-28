import { ApplicationRef, OnDestroy } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { GlobalConfig, ToastPackage } from './toast.config';
import * as ɵngcc0 from '@angular/core';
export declare class ToastComponent implements OnDestroy {
    toastPackage: ToastPackage;
    protected appRef: ApplicationRef;
    message: string | SafeHtml;
    title: string;
    options: GlobalConfig;
    /** width of progress bar */
    width: number;
    state: string;
    /** a combination of toast type and options.toastClass */
    toastClasses: string;
    /** controls animation */
    readonly animationParams: {
        value: string;
        params: {
            opacity: number | undefined;
        };
    };
    opacity: number | undefined;
    timeout: any;
    intervalId: any;
    hideTime: number;
    sub: Subscription;
    sub1: Subscription;
    protected toastService: any;
    constructor(toastPackage: ToastPackage, appRef: ApplicationRef);
    ngOnDestroy(): void;
    /**
     * activates toast and sets timeout
     */
    activateToast(): void;
    /**
     * updates progress bar width
     */
    updateProgress(): void;
    /**
     * tells toastrService to remove this toast after animation time
     */
    remove(): void;
    onActionClick(): void;
    tapToast(): void;
    stickAround(): void;
    delayedHideToast(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ToastComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ToastComponent, "mdb-toast-component", never, {}, {}, never>;
}

//# sourceMappingURL=toast.component.d.ts.map