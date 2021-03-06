import { OnInit, EventEmitter, QueryList, ChangeDetectorRef } from '@angular/core';
import { FixedButtonCaptionDirective } from '../buttons/fixed-caption.directive';
import * as ɵngcc0 from '@angular/core';
export declare class CollapseComponent implements OnInit {
    private _cdRef;
    captions: QueryList<FixedButtonCaptionDirective>;
    isCollapsed: boolean;
    showBsCollapse: EventEmitter<any>;
    shownBsCollapse: EventEmitter<any>;
    hideBsCollapse: EventEmitter<any>;
    hiddenBsCollapse: EventEmitter<any>;
    collapsed: EventEmitter<any>;
    expanded: EventEmitter<any>;
    constructor(_cdRef: ChangeDetectorRef);
    expandAnimationState: string;
    overflow: string;
    onExpandBodyDone(event: any): void;
    showCaptions(): void;
    toggle(): void;
    show(): void;
    hide(): void;
    initializeCollapseState(): void;
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CollapseComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CollapseComponent, "[mdbCollapse]", ["bs-collapse"], {
    "isCollapsed": "isCollapsed";
}, {
    "showBsCollapse": "showBsCollapse";
    "shownBsCollapse": "shownBsCollapse";
    "hideBsCollapse": "hideBsCollapse";
    "hiddenBsCollapse": "hiddenBsCollapse";
    "collapsed": "collapsed";
    "expanded": "expanded";
}, ["captions"]>;
}

//# sourceMappingURL=collapse.component.d.ts.map