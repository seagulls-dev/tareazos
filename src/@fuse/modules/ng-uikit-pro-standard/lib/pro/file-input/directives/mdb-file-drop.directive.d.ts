import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { MDBUploaderService, UploaderOptions, UploadInput, UploadOutput } from '../classes/mdb-uploader.class';
import * as ɵngcc0 from '@angular/core';
export declare class MDBFileDropDirective implements OnInit, OnDestroy {
    private platform_id;
    private elementRef;
    uploadInput: EventEmitter<UploadInput>;
    options: UploaderOptions;
    uploadOutput: EventEmitter<UploadOutput>;
    private _destroy$;
    upload: MDBUploaderService;
    isServer: boolean;
    el: HTMLInputElement;
    constructor(platform_id: any, elementRef: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    stopEvent: (e: Event) => void;
    onDrop(e: any): void;
    onDragOver(e: Event): void;
    onDragLeave(e: Event): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MDBFileDropDirective>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MDBFileDropDirective, "[mdbFileDrop]", never, {
    "uploadInput": "uploadInput";
    "options": "options";
}, {
    "uploadOutput": "uploadOutput";
}, never>;
}

//# sourceMappingURL=mdb-file-drop.directive.d.ts.map