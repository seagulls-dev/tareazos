import { EventEmitter } from '@angular/core';
import { BsComponentRef } from '../utils/component-loader/bs-component-ref.class';
import * as ɵngcc0 from '@angular/core';
export declare class BsDropdownState {
    direction: 'down' | 'up';
    autoClose: boolean;
    isOpenChange: EventEmitter<boolean>;
    isDisabledChange: EventEmitter<boolean>;
    toggleClick: EventEmitter<boolean>;
    /**
     * Content to be displayed as popover.
     */
    dropdownMenu: Promise<BsComponentRef<any>>;
    resolveDropdownMenu: (componentRef: BsComponentRef<any>) => void;
    constructor();
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BsDropdownState>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<BsDropdownState>;
}

//# sourceMappingURL=dropdown.state.d.ts.map