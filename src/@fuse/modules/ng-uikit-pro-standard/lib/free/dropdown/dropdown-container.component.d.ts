import { OnDestroy } from '@angular/core';
import { BsDropdownState } from './dropdown.state';
import * as ɵngcc0 from '@angular/core';
export declare class BsDropdownContainerComponent implements OnDestroy {
    private _state;
    isOpen: boolean;
    display: string;
    position: string;
    readonly direction: 'down' | 'up';
    private _subscription;
    constructor(_state: BsDropdownState);
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BsDropdownContainerComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<BsDropdownContainerComponent, "mdb-dropdown-container", never, {}, {}, never>;
}

//# sourceMappingURL=dropdown-container.component.d.ts.map