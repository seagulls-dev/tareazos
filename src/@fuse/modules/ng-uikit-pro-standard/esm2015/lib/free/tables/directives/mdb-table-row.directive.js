/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Output, EventEmitter, ElementRef } from '@angular/core';
export class MdbTableRowDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.rowCreated = new EventEmitter();
        this.rowRemoved = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.rowCreated.emit({ created: true, el: this.el.nativeElement });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.rowRemoved.emit({ removed: true });
    }
}
MdbTableRowDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbTableRow]'
            },] }
];
/** @nocollapse */
MdbTableRowDirective.ctorParameters = () => [
    { type: ElementRef }
];
MdbTableRowDirective.propDecorators = {
    rowCreated: [{ type: Output }],
    rowRemoved: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    MdbTableRowDirective.prototype.rowCreated;
    /** @type {?} */
    MdbTableRowDirective.prototype.rowRemoved;
    /**
     * @type {?}
     * @private
     */
    MdbTableRowDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXRhYmxlLXJvdy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS90YWJsZXMvZGlyZWN0aXZlcy9tZGItdGFibGUtcm93LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFxQixVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLL0YsTUFBTSxPQUFPLG9CQUFvQjs7OztJQUsvQixZQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUh4QixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNyQyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUcvQyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7WUFqQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2FBQzFCOzs7O1lBSjRELFVBQVU7Ozt5QkFPcEUsTUFBTTt5QkFDTixNQUFNOzs7O0lBRFAsMENBQStDOztJQUMvQywwQ0FBK0M7Ozs7O0lBRW5DLGtDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgT25EZXN0cm95LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttZGJUYWJsZVJvd10nXG59KVxuZXhwb3J0IGNsYXNzIE1kYlRhYmxlUm93RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIEBPdXRwdXQoKSByb3dDcmVhdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSByb3dSZW1vdmVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yb3dDcmVhdGVkLmVtaXQoeyBjcmVhdGVkOiB0cnVlLCBlbDogdGhpcy5lbC5uYXRpdmVFbGVtZW50IH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5yb3dSZW1vdmVkLmVtaXQoeyByZW1vdmVkOiB0cnVlIH0pO1xuICB9XG5cbn1cbiJdfQ==