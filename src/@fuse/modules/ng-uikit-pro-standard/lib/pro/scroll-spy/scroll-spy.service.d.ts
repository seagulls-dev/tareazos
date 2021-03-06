import { QueryList } from '@angular/core';
import { ScrollSpyLinkDirective } from './scroll-spy-link.directive';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export interface ScrollSpy {
    id: string;
    links: QueryList<ScrollSpyLinkDirective>;
}
export declare class ScrollSpyService {
    private scrollSpys;
    private activeSubject;
    active$: Observable<any>;
    addScrollSpy(scrollSpy: ScrollSpy): void;
    removeScrollSpy(scrollSpyId: string): void;
    updateActiveState(scrollSpyId: string, activeLinkId: string): void;
    removeActiveState(scrollSpyId: string, activeLinkId: string): void;
    setActiveLink(activeLink: ScrollSpyLinkDirective | any): void;
    removeActiveLinks(scrollSpyId: string): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ScrollSpyService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ScrollSpyService>;
}

//# sourceMappingURL=scroll-spy.service.d.ts.map