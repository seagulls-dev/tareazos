/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Determines if the browser is Internet Explorer
 */
import { isBrowser } from './isBrowser';
/** @type {?} */
const isIE11 = isBrowser && !!(((/** @type {?} */ (window))).MSInputMethodContext && ((/** @type {?} */ (document))).documentMode);
/** @type {?} */
const isIE10 = isBrowser && !!(((/** @type {?} */ (window))).MSInputMethodContext && /MSIE 10/.test(((/** @type {?} */ (navigator))).userAgent));
/**
 * @param {?=} version
 * @return {?}
 */
export function isIE(version) {
    if (version === 11) {
        return isIE11;
    }
    if (version === 10) {
        return isIE10;
    }
    return isIE11 || isIE10;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNJRS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3V0aWxzL3Bvc2l0aW9uaW5nL3V0aWxzL2lzSUUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7O01BRWxDLE1BQU0sR0FBRyxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBQSxNQUFNLEVBQU8sQ0FBQyxDQUFDLG9CQUFvQixJQUFJLENBQUMsbUJBQUEsUUFBUSxFQUFPLENBQUMsQ0FBQyxZQUFZLENBQUM7O01BQ2hHLE1BQU0sR0FBRyxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBQSxNQUFNLEVBQU8sQ0FBQyxDQUFDLG9CQUFvQixJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxtQkFBQSxTQUFTLEVBQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDOzs7OztBQUVwSCxNQUFNLFVBQVUsSUFBSSxDQUFDLE9BQWdCO0lBQ25DLElBQUksT0FBTyxLQUFLLEVBQUUsRUFBRTtRQUNsQixPQUFPLE1BQU0sQ0FBQztLQUNmO0lBQ0QsSUFBSSxPQUFPLEtBQUssRUFBRSxFQUFFO1FBQ2xCLE9BQU8sTUFBTSxDQUFDO0tBQ2Y7SUFFRCxPQUFPLE1BQU0sSUFBSSxNQUFNLENBQUM7QUFDMUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRGV0ZXJtaW5lcyBpZiB0aGUgYnJvd3NlciBpcyBJbnRlcm5ldCBFeHBsb3JlclxuICovXG5pbXBvcnQgeyBpc0Jyb3dzZXIgfSBmcm9tICcuL2lzQnJvd3Nlcic7XG5cbmNvbnN0IGlzSUUxMSA9IGlzQnJvd3NlciAmJiAhISgod2luZG93IGFzIGFueSkuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgKGRvY3VtZW50IGFzIGFueSkuZG9jdW1lbnRNb2RlKTtcbmNvbnN0IGlzSUUxMCA9IGlzQnJvd3NlciAmJiAhISgod2luZG93IGFzIGFueSkuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgL01TSUUgMTAvLnRlc3QoKG5hdmlnYXRvciBhcyBhbnkpLnVzZXJBZ2VudCkpO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNJRSh2ZXJzaW9uPzogbnVtYmVyKSB7XG4gIGlmICh2ZXJzaW9uID09PSAxMSkge1xuICAgIHJldHVybiBpc0lFMTE7XG4gIH1cbiAgaWYgKHZlcnNpb24gPT09IDEwKSB7XG4gICAgcmV0dXJuIGlzSUUxMDtcbiAgfVxuXG4gIHJldHVybiBpc0lFMTEgfHwgaXNJRTEwO1xufVxuIl19