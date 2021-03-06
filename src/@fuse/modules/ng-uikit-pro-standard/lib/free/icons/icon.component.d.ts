import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Utils } from '../utils';
import * as ɵngcc0 from '@angular/core';
export declare class MdbIconComponent implements OnInit {
    private _el;
    private _renderer;
    icon: string;
    size: string;
    class: string;
    classInside: string;
    fab: boolean;
    far: boolean;
    fal: boolean;
    fas: boolean;
    sizeClass: string;
    utils: Utils;
    constructor(_el: ElementRef, _renderer: Renderer2);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MdbIconComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MdbIconComponent, "mdb-icon", never, {
    "icon": "icon";
    "size": "size";
    "class": "class";
    "classInside": "classInside";
}, {}, never>;
}

//# sourceMappingURL=icon.component.d.ts.map