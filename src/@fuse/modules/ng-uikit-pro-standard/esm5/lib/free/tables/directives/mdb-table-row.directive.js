/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Output, EventEmitter, ElementRef } from '@angular/core';
var MdbTableRowDirective = /** @class */ (function () {
    function MdbTableRowDirective(el) {
        this.el = el;
        this.rowCreated = new EventEmitter();
        this.rowRemoved = new EventEmitter();
    }
    /**
     * @return {?}
     */
    MdbTableRowDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.rowCreated.emit({ created: true, el: this.el.nativeElement });
    };
    /**
     * @return {?}
     */
    MdbTableRowDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.rowRemoved.emit({ removed: true });
    };
    MdbTableRowDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbTableRow]'
                },] }
    ];
    /** @nocollapse */
    MdbTableRowDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    MdbTableRowDirective.propDecorators = {
        rowCreated: [{ type: Output }],
        rowRemoved: [{ type: Output }]
    };
    return MdbTableRowDirective;
}());
export { MdbTableRowDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXRhYmxlLXJvdy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS90YWJsZXMvZGlyZWN0aXZlcy9tZGItdGFibGUtcm93LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFxQixVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0Y7SUFRRSw4QkFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUFIeEIsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDckMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFHL0MsQ0FBQzs7OztJQUVELHVDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Ozs7SUFFRCwwQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7O2dCQWpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7aUJBQzFCOzs7O2dCQUo0RCxVQUFVOzs7NkJBT3BFLE1BQU07NkJBQ04sTUFBTTs7SUFhVCwyQkFBQztDQUFBLEFBbkJELElBbUJDO1NBaEJZLG9CQUFvQjs7O0lBRS9CLDBDQUErQzs7SUFDL0MsMENBQStDOzs7OztJQUVuQyxrQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIE9uRGVzdHJveSwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWRiVGFibGVSb3ddJ1xufSlcbmV4cG9ydCBjbGFzcyBNZGJUYWJsZVJvd0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBAT3V0cHV0KCkgcm93Q3JlYXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgcm93UmVtb3ZlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucm93Q3JlYXRlZC5lbWl0KHsgY3JlYXRlZDogdHJ1ZSwgZWw6IHRoaXMuZWwubmF0aXZlRWxlbWVudCB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMucm93UmVtb3ZlZC5lbWl0KHsgcmVtb3ZlZDogdHJ1ZSB9KTtcbiAgfVxuXG59XG4iXX0=