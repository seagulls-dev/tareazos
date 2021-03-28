/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Sum or subtract the element scroll values (left and top) from a given rect object
 */
import { getScroll } from './getScroll';
/**
 * @param {?} rect
 * @param {?} element
 * @param {?=} subtract
 * @return {?}
 */
export function includeScroll(rect, element, subtract) {
    if (subtract === void 0) { subtract = false; }
    /** @type {?} */
    var scrollTop = getScroll(element, 'top');
    /** @type {?} */
    var scrollLeft = getScroll(element, 'left');
    /** @type {?} */
    var modifier = subtract ? -1 : 1;
    rect.top += scrollTop * modifier;
    rect.bottom += scrollTop * modifier;
    rect.left += scrollLeft * modifier;
    rect.right += scrollLeft * modifier;
    return rect;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5jbHVkZVNjcm9sbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3V0aWxzL3Bvc2l0aW9uaW5nL3V0aWxzL2luY2x1ZGVTY3JvbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7Ozs7QUFFeEMsTUFBTSxVQUFVLGFBQWEsQ0FBQyxJQUFTLEVBQUUsT0FBb0IsRUFBRSxRQUFnQjtJQUFoQix5QkFBQSxFQUFBLGdCQUFnQjs7UUFDdkUsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDOztRQUNyQyxVQUFVLEdBQUcsU0FBUyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7O1FBQ3ZDLFFBQVEsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLElBQUksQ0FBQyxHQUFHLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQztJQUNqQyxJQUFJLENBQUMsTUFBTSxJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUM7SUFDcEMsSUFBSSxDQUFDLElBQUksSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDO0lBQ25DLElBQUksQ0FBQyxLQUFLLElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQztJQUVwQyxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1bSBvciBzdWJ0cmFjdCB0aGUgZWxlbWVudCBzY3JvbGwgdmFsdWVzIChsZWZ0IGFuZCB0b3ApIGZyb20gYSBnaXZlbiByZWN0IG9iamVjdFxuICovXG5pbXBvcnQgeyBnZXRTY3JvbGwgfSBmcm9tICcuL2dldFNjcm9sbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmNsdWRlU2Nyb2xsKHJlY3Q6IGFueSwgZWxlbWVudDogSFRNTEVsZW1lbnQsIHN1YnRyYWN0ID0gZmFsc2UpIHtcbiAgY29uc3Qgc2Nyb2xsVG9wID0gZ2V0U2Nyb2xsKGVsZW1lbnQsICd0b3AnKTtcbiAgY29uc3Qgc2Nyb2xsTGVmdCA9IGdldFNjcm9sbChlbGVtZW50LCAnbGVmdCcpO1xuICBjb25zdCBtb2RpZmllciA9IHN1YnRyYWN0ID8gLTEgOiAxO1xuICByZWN0LnRvcCArPSBzY3JvbGxUb3AgKiBtb2RpZmllcjtcbiAgcmVjdC5ib3R0b20gKz0gc2Nyb2xsVG9wICogbW9kaWZpZXI7XG4gIHJlY3QubGVmdCArPSBzY3JvbGxMZWZ0ICogbW9kaWZpZXI7XG4gIHJlY3QucmlnaHQgKz0gc2Nyb2xsTGVmdCAqIG1vZGlmaWVyO1xuXG4gIHJldHVybiByZWN0O1xufVxuIl19