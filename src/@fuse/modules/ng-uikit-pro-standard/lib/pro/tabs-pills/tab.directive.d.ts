import { EventEmitter, TemplateRef, ElementRef, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { TabsetComponent } from './tabset.component';
import * as ɵngcc0 from '@angular/core';
export declare class TabDirective implements OnInit, OnDestroy {
    tabset: TabsetComponent;
    el: ElementRef;
    private renderer;
    type: string;
    /** tab header text */
    heading: string;
    /** if true tab can not be activated */
    disabled: boolean;
    private _disabled;
    /** if true tab can be removable, additional button will appear */
    removable: boolean;
    /** if set, will be added to the tab's class atribute */
    customClass: string;
    tabOrder: number;
    /** tab active state toggle */
    active: boolean;
    /** fired when tab became active, $event:Tab equals to selected instance of Tab component */
    select: EventEmitter<TabDirective>;
    /** fired when tab became inactive, $event:Tab equals to deselected instance of Tab component */
    deselect: EventEmitter<TabDirective>;
    /** fired before tab will be removed */
    removed: EventEmitter<TabDirective>;
    addClass: boolean;
    test: boolean;
    headingRef: TemplateRef<any>;
    private _active;
    isBrowser: any;
    constructor(platformId: string, tabset: TabsetComponent, el: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TabDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<TabDirective, "mdb-tab, [mdbTab]", never, {
    "disabled": "disabled";
    "active": "active";
    "removable": "removable";
    "type": "type";
    "heading": "heading";
    "customClass": "customClass";
    "tabOrder": "tabOrder";
}, {
    "select": "select";
    "deselect": "deselect";
    "removed": "removed";
}, never>;
}

//# sourceMappingURL=tab.directive.d.ts.map