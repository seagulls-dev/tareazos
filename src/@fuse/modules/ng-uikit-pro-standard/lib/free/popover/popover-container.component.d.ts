import { OnInit } from '@angular/core';
import { PopoverConfig } from './popover.config';
import * as ɵngcc0 from '@angular/core';
export declare class PopoverContainerComponent implements OnInit {
    placement: string;
    title: string;
    containerClass: string;
    bodyClass: string;
    headerClass: string;
    show: string;
    role: string;
    class: any;
    readonly isBs3: boolean;
    constructor(config: PopoverConfig);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PopoverContainerComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<PopoverContainerComponent, "mdb-popover-container", never, {
    "placement": "placement";
    "title": "title";
}, {}, never>;
}

//# sourceMappingURL=popover-container.component.d.ts.map