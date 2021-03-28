import { AfterContentInit, EventEmitter, OnDestroy, OnInit, QueryList } from '@angular/core';
import { ScrollSpyLinkDirective } from './scroll-spy-link.directive';
import { ScrollSpyService } from './scroll-spy.service';
import { Subscription } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class ScrollSpyDirective implements OnInit, AfterContentInit, OnDestroy {
    private scrollSpyService;
    links: QueryList<ScrollSpyLinkDirective>;
    id: string;
    private _id;
    activeLinkChange: EventEmitter<any>;
    activeSub: Subscription;
    constructor(scrollSpyService: ScrollSpyService);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ScrollSpyDirective>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ScrollSpyDirective, "[mdbScrollSpy]", never, {
    "id": "mdbScrollSpy";
}, {
    "activeLinkChange": "activeLinkChange";
}, ["links"]>;
}

//# sourceMappingURL=scroll-spy.directive.d.ts.map