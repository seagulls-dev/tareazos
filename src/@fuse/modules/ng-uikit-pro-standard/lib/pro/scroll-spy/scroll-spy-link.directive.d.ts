import { OnInit, ChangeDetectorRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class ScrollSpyLinkDirective implements OnInit {
    private cdRef;
    private document;
    scrollIntoView: boolean;
    private _scrollIntoView;
    section: HTMLElement;
    private _section;
    private _id;
    constructor(cdRef: ChangeDetectorRef, document: any);
    id: string;
    active: boolean;
    onClick(): void;
    detectChanges(): void;
    assignSectionToId(): void;
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ScrollSpyLinkDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<ScrollSpyLinkDirective, "[mdbScrollSpyLink]", never, {
    "scrollIntoView": "scrollIntoView";
    "id": "mdbScrollSpyLink";
}, {}, never>;
}

//# sourceMappingURL=scroll-spy-link.directive.d.ts.map