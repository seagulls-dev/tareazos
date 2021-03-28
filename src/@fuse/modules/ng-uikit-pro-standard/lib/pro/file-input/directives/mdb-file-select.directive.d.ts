import { ElementRef, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { MDBUploaderService, UploadOutput } from '../classes/mdb-uploader.class';
import { UploaderOptions } from '../classes/mdb-uploader.class';
import * as ɵngcc0 from '@angular/core';
export declare class MDBFileSelectDirective implements OnInit, OnDestroy {
    private platform_id;
    private elementRef;
    uploadInput: EventEmitter<any>;
    options: UploaderOptions;
    uploadOutput: EventEmitter<UploadOutput>;
    private _destroy$;
    upload: MDBUploaderService;
    isServer: boolean;
    el: HTMLInputElement | any;
    constructor(platform_id: any, elementRef: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    fileListener: () => void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MDBFileSelectDirective>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MDBFileSelectDirective, "[mdbFileSelect]", never, {
    "uploadInput": "uploadInput";
    "options": "options";
}, {
    "uploadOutput": "uploadOutput";
}, never>;
}

//# sourceMappingURL=mdb-file-select.directive.d.ts.map