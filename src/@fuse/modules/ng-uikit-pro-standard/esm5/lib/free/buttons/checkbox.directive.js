/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostBinding, HostListener, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
/** @type {?} */
export var CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    // tslint:disable-next-line: no-use-before-declare
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return ButtonCheckboxDirective; })),
    multi: true,
};
/**
 * Add checkbox functionality to any element
 */
var ButtonCheckboxDirective = /** @class */ (function () {
    function ButtonCheckboxDirective() {
        /**
         * Truthy value, will be set to ngModel
         */
        this.btnCheckboxTrue = true;
        /**
         * Falsy value, will be set to ngModel
         */
        this.btnCheckboxFalse = false;
        this.state = false;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    // view -> model
    // view -> model
    /**
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.onClick = 
    // view -> model
    /**
     * @return {?}
     */
    function () {
        if (this.isDisabled) {
            return;
        }
        this.toggle(!this.state);
        this.onChange(this.value);
    };
    /**
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.toggle(this.trueValue === this.value);
    };
    Object.defineProperty(ButtonCheckboxDirective.prototype, "trueValue", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return typeof this.btnCheckboxTrue !== 'undefined' ? this.btnCheckboxTrue : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonCheckboxDirective.prototype, "falseValue", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return typeof this.btnCheckboxFalse !== 'undefined' ? this.btnCheckboxFalse : false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} state
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.toggle = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this.state = state;
        this.value = this.state ? this.trueValue : this.falseValue;
    };
    // ControlValueAccessor
    // model -> view
    // ControlValueAccessor
    // model -> view
    /**
     * @param {?} value
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.writeValue = 
    // ControlValueAccessor
    // model -> view
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.state = this.trueValue === value;
        this.value = value ? this.trueValue : this.falseValue;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.isDisabled = isDisabled;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    ButtonCheckboxDirective.decorators = [
        { type: Directive, args: [{ selector: '[mdbCheckbox]', providers: [CHECKBOX_CONTROL_VALUE_ACCESSOR] },] }
    ];
    ButtonCheckboxDirective.propDecorators = {
        btnCheckboxTrue: [{ type: Input }],
        btnCheckboxFalse: [{ type: Input }],
        state: [{ type: HostBinding, args: ['class.active',] }],
        onClick: [{ type: HostListener, args: ['click',] }]
    };
    return ButtonCheckboxDirective;
}());
export { ButtonCheckboxDirective };
if (false) {
    /**
     * Truthy value, will be set to ngModel
     * @type {?}
     */
    ButtonCheckboxDirective.prototype.btnCheckboxTrue;
    /**
     * Falsy value, will be set to ngModel
     * @type {?}
     */
    ButtonCheckboxDirective.prototype.btnCheckboxFalse;
    /** @type {?} */
    ButtonCheckboxDirective.prototype.state;
    /**
     * @type {?}
     * @protected
     */
    ButtonCheckboxDirective.prototype.value;
    /**
     * @type {?}
     * @protected
     */
    ButtonCheckboxDirective.prototype.isDisabled;
    /**
     * @type {?}
     * @protected
     */
    ButtonCheckboxDirective.prototype.onChange;
    /**
     * @type {?}
     * @protected
     */
    ButtonCheckboxDirective.prototype.onTouched;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvYnV0dG9ucy9jaGVja2JveC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hHLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFekUsTUFBTSxLQUFPLCtCQUErQixHQUFRO0lBQ2xELE9BQU8sRUFBRSxpQkFBaUI7O0lBRTFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxjQUFNLE9BQUEsdUJBQXVCLEVBQXZCLENBQXVCLEVBQUM7SUFDdEQsS0FBSyxFQUFFLElBQUk7Q0FDWjs7OztBQUtEO0lBQUE7Ozs7UUFHa0Isb0JBQWUsR0FBUSxJQUFJLENBQUM7Ozs7UUFFNUIscUJBQWdCLEdBQVEsS0FBSyxDQUFDO1FBRVYsVUFBSyxHQUFHLEtBQUssQ0FBQztRQUt4QyxhQUFRLEdBQVEsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUNuQyxjQUFTLEdBQVEsUUFBUSxDQUFDLFNBQVMsQ0FBQztJQWdEaEQsQ0FBQztJQTlDQyxnQkFBZ0I7Ozs7O0lBRVQseUNBQU87Ozs7O0lBRGQ7UUFFRSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7O0lBRU0sMENBQVE7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsc0JBQWMsOENBQVM7Ozs7O1FBQXZCO1lBQ0UsT0FBTyxPQUFPLElBQUksQ0FBQyxlQUFlLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDbkYsQ0FBQzs7O09BQUE7SUFFRCxzQkFBYywrQ0FBVTs7Ozs7UUFBeEI7WUFDRSxPQUFPLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDdEYsQ0FBQzs7O09BQUE7Ozs7O0lBRU0sd0NBQU07Ozs7SUFBYixVQUFjLEtBQWM7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzdELENBQUM7SUFFRCx1QkFBdUI7SUFDdkIsZ0JBQWdCOzs7Ozs7O0lBQ1QsNENBQVU7Ozs7Ozs7SUFBakIsVUFBa0IsS0FBVTtRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLEtBQUssS0FBSyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3hELENBQUM7Ozs7O0lBRU0sa0RBQWdCOzs7O0lBQXZCLFVBQXdCLFVBQW1CO1FBQ3pDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRU0sa0RBQWdCOzs7O0lBQXZCLFVBQXdCLEVBQWtCO1FBQ3hDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRU0sbURBQWlCOzs7O0lBQXhCLFVBQXlCLEVBQVk7UUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Z0JBNURGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUMsRUFBRTs7O2tDQUduRixLQUFLO21DQUVMLEtBQUs7d0JBRUwsV0FBVyxTQUFDLGNBQWM7MEJBUzFCLFlBQVksU0FBQyxPQUFPOztJQTZDdkIsOEJBQUM7Q0FBQSxBQTdERCxJQTZEQztTQTVEWSx1QkFBdUI7Ozs7OztJQUVsQyxrREFBNEM7Ozs7O0lBRTVDLG1EQUE4Qzs7SUFFOUMsd0NBQWtEOzs7OztJQUVsRCx3Q0FBcUI7Ozs7O0lBQ3JCLDZDQUE4Qjs7Ozs7SUFFOUIsMkNBQTZDOzs7OztJQUM3Qyw0Q0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkluaXQsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGNvbnN0IENIRUNLQk9YX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdXNlLWJlZm9yZS1kZWNsYXJlXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEJ1dHRvbkNoZWNrYm94RGlyZWN0aXZlKSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG4vKipcbiAqIEFkZCBjaGVja2JveCBmdW5jdGlvbmFsaXR5IHRvIGFueSBlbGVtZW50XG4gKi9cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1ttZGJDaGVja2JveF0nLCBwcm92aWRlcnM6IFtDSEVDS0JPWF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXSB9KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNoZWNrYm94RGlyZWN0aXZlIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCB7XG4gIC8qKiBUcnV0aHkgdmFsdWUsIHdpbGwgYmUgc2V0IHRvIG5nTW9kZWwgKi9cbiAgQElucHV0KCkgcHVibGljIGJ0bkNoZWNrYm94VHJ1ZTogYW55ID0gdHJ1ZTtcbiAgLyoqIEZhbHN5IHZhbHVlLCB3aWxsIGJlIHNldCB0byBuZ01vZGVsICovXG4gIEBJbnB1dCgpIHB1YmxpYyBidG5DaGVja2JveEZhbHNlOiBhbnkgPSBmYWxzZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFjdGl2ZScpIHB1YmxpYyBzdGF0ZSA9IGZhbHNlO1xuXG4gIHByb3RlY3RlZCB2YWx1ZTogYW55O1xuICBwcm90ZWN0ZWQgaXNEaXNhYmxlZDogYm9vbGVhbjtcblxuICBwcm90ZWN0ZWQgb25DaGFuZ2U6IGFueSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgcHJvdGVjdGVkIG9uVG91Y2hlZDogYW55ID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4gIC8vIHZpZXcgLT4gbW9kZWxcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBwdWJsaWMgb25DbGljaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy50b2dnbGUoIXRoaXMuc3RhdGUpO1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogYW55IHtcbiAgICB0aGlzLnRvZ2dsZSh0aGlzLnRydWVWYWx1ZSA9PT0gdGhpcy52YWx1ZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IHRydWVWYWx1ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuYnRuQ2hlY2tib3hUcnVlICE9PSAndW5kZWZpbmVkJyA/IHRoaXMuYnRuQ2hlY2tib3hUcnVlIDogdHJ1ZTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgZmFsc2VWYWx1ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuYnRuQ2hlY2tib3hGYWxzZSAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLmJ0bkNoZWNrYm94RmFsc2UgOiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGUoc3RhdGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuc3RhdGUgPyB0aGlzLnRydWVWYWx1ZSA6IHRoaXMuZmFsc2VWYWx1ZTtcbiAgfVxuXG4gIC8vIENvbnRyb2xWYWx1ZUFjY2Vzc29yXG4gIC8vIG1vZGVsIC0+IHZpZXdcbiAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuc3RhdGUgPSB0aGlzLnRydWVWYWx1ZSA9PT0gdmFsdWU7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlID8gdGhpcy50cnVlVmFsdWUgOiB0aGlzLmZhbHNlVmFsdWU7XG4gIH1cblxuICBwdWJsaWMgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5pc0Rpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYW55KSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG59XG4iXX0=