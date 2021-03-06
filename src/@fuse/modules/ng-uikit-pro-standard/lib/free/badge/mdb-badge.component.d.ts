import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class MDBBadgeComponent implements OnInit {
    private _el;
    private _renderer;
    default: boolean;
    primary: boolean;
    success: boolean;
    info: boolean;
    warning: boolean;
    danger: boolean;
    pill: boolean;
    classInside: string;
    color: string;
    class: string;
    constructor(_el: ElementRef, _renderer: Renderer2);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MDBBadgeComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MDBBadgeComponent, "mdb-badge", never, {
    "default": "default";
    "primary": "primary";
    "success": "success";
    "info": "info";
    "warning": "warning";
    "danger": "danger";
    "pill": "pill";
    "classInside": "classInside";
    "color": "color";
    "class": "class";
}, {}, never>;
}

//# sourceMappingURL=mdb-badge.component.d.ts.map