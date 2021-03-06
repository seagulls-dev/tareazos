import { ElementRef, OnDestroy } from '@angular/core';
import { BsDropdownState } from './dropdown.state';
import * as ɵngcc0 from '@angular/core';
export declare class BsDropdownToggleDirective implements OnDestroy {
    private _state;
    private _element;
    private _subscriptions;
    ariaHaspopup: boolean;
    isDisabled: boolean | any;
    isOpen: boolean;
    onClick(): void;
    onDocumentClick(event: any): void;
    onEsc(): void;
    constructor(_state: BsDropdownState, _element: ElementRef);
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BsDropdownToggleDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<BsDropdownToggleDirective, "[mdbDropdownToggle],[dropdownToggle]", ["bs-dropdown-toggle"], {}, {}, never>;
}

//# sourceMappingURL=dropdown-toggle.directive.d.ts.map