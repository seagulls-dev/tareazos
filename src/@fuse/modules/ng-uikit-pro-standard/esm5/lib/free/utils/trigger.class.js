/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
var Trigger = /** @class */ (function () {
    function Trigger(open, close) {
        this.open = open;
        this.close = close || open;
    }
    /**
     * @return {?}
     */
    Trigger.prototype.isManual = /**
     * @return {?}
     */
    function () { return this.open === 'manual' || this.close === 'manual'; };
    return Trigger;
}());
export { Trigger };
if (false) {
    /** @type {?} */
    Trigger.prototype.open;
    /** @type {?} */
    Trigger.prototype.close;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpZ2dlci5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3V0aWxzL3RyaWdnZXIuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFLQztJQUlFLGlCQUFtQixJQUFZLEVBQUUsS0FBYztRQUM3QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVNLDBCQUFROzs7SUFBZixjQUE2QixPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztJQUMxRixjQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7Ozs7SUFUQyx1QkFBb0I7O0lBQ3BCLHdCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGNvcHlyaWdodCBWYWxvciBTb2Z0d2FyZVxuICogQGNvcHlyaWdodCBBbmd1bGFyIG5nLWJvb3RzdHJhcCB0ZWFtXG4gKi9cblxuIGV4cG9ydCBjbGFzcyBUcmlnZ2VyIHtcbiAgIHB1YmxpYyBvcGVuOiBzdHJpbmc7XG4gICBwdWJsaWMgY2xvc2U/OiBzdHJpbmc7XG5cbiAgIHB1YmxpYyBjb25zdHJ1Y3RvcihvcGVuOiBzdHJpbmcsIGNsb3NlPzogc3RyaW5nKSB7XG4gICAgIHRoaXMub3BlbiA9IG9wZW47XG4gICAgIHRoaXMuY2xvc2UgPSBjbG9zZSB8fCBvcGVuO1xuICAgfVxuXG4gICBwdWJsaWMgaXNNYW51YWwoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLm9wZW4gPT09ICdtYW51YWwnIHx8IHRoaXMuY2xvc2UgPT09ICdtYW51YWwnOyB9XG4gfVxuIl19