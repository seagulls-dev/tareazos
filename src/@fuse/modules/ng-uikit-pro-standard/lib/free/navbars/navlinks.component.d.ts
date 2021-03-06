import { NavbarService } from './navbar.service';
import { AfterContentInit, ElementRef, QueryList, EventEmitter, Renderer2 } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class NavlinksComponent implements AfterContentInit {
    private _navbarService;
    private renderer;
    links: QueryList<ElementRef>;
    linkClick: EventEmitter<any>;
    constructor(_navbarService: NavbarService, renderer: Renderer2);
    ngAfterContentInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NavlinksComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NavlinksComponent, "navlinks", never, {}, {
    "linkClick": "linkClick";
}, ["links"]>;
}

//# sourceMappingURL=navlinks.component.d.ts.map