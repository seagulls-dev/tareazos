/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 */
import { getBoundaries } from './getBoundaries';
/**
 * @param {?} __0
 * @return {?}
 */
function getArea(_a) {
    var width = _a.width, height = _a.height;
    return width * height;
}
/**
 * @param {?} placement
 * @param {?} refRect
 * @param {?} target
 * @param {?} host
 * @param {?=} allowedPositions
 * @param {?=} boundariesElement
 * @param {?=} padding
 * @return {?}
 */
export function computeAutoPlacement(placement, refRect, target, host, allowedPositions, boundariesElement, padding) {
    if (allowedPositions === void 0) { allowedPositions = ['top', 'left', 'bottom', 'right']; }
    if (boundariesElement === void 0) { boundariesElement = 'viewport'; }
    if (padding === void 0) { padding = 0; }
    if (placement.indexOf('auto') === -1) {
        return placement;
    }
    /** @type {?} */
    var boundaries = getBoundaries(target, host, padding, boundariesElement);
    /** @type {?} */
    var rects = {
        top: {
            width: boundaries.width,
            height: refRect.top - boundaries.top
        },
        right: {
            width: boundaries.right - refRect.right,
            height: boundaries.height
        },
        bottom: {
            width: boundaries.width,
            height: boundaries.bottom - refRect.bottom
        },
        left: {
            width: refRect.left - boundaries.left,
            height: boundaries.height
        }
    };
    /** @type {?} */
    var sortedAreas = Object.keys(rects)
        .map((/**
     * @param {?} key
     * @return {?}
     */
    function (key) { return (tslib_1.__assign({ key: key }, rects[key], { area: getArea(rects[key]) })); }))
        .sort((/**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) { return b.area - a.area; }));
    /** @type {?} */
    var filteredAreas = sortedAreas.filter((/**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var width = _a.width, height = _a.height;
        return width >= target.clientWidth && height >= target.clientHeight;
    }));
    filteredAreas = allowedPositions
        .reduce((/**
     * @param {?} obj
     * @param {?} key
     * @return {?}
     */
    function (obj, key) {
        var _a;
        return tslib_1.__assign({}, obj, (_a = {}, _a[key] = filteredAreas[key], _a));
    }), {});
    /** @type {?} */
    var computedPlacement = filteredAreas.length > 0
        ? filteredAreas[0].key
        : sortedAreas[0].key;
    /** @type {?} */
    var variation = placement.split(' ')[1];
    target.className = target.className.replace(/auto/g, computedPlacement);
    return computedPlacement + (variation ? "-" + variation : '');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcHV0ZUF1dG9QbGFjZW1lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS91dGlscy9wb3NpdGlvbmluZy91dGlscy9jb21wdXRlQXV0b1BsYWNlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7O0FBRWhELFNBQVMsT0FBTyxDQUFDLEVBQTRDO1FBQTFDLGdCQUFLLEVBQUUsa0JBQU07SUFDOUIsT0FBTyxLQUFLLEdBQUcsTUFBTSxDQUFDO0FBQ3hCLENBQUM7Ozs7Ozs7Ozs7O0FBRUQsTUFBTSxVQUFVLG9CQUFvQixDQUNsQyxTQUFpQixFQUNqQixPQUFZLEVBQ1osTUFBbUIsRUFDbkIsSUFBaUIsRUFDakIsZ0JBQTRELEVBQzVELGlCQUE4QixFQUM5QixPQUFXO0lBRlgsaUNBQUEsRUFBQSxvQkFBMkIsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDO0lBQzVELGtDQUFBLEVBQUEsOEJBQThCO0lBQzlCLHdCQUFBLEVBQUEsV0FBVztJQUVYLElBQUksU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtRQUNwQyxPQUFPLFNBQVMsQ0FBQztLQUNsQjs7UUFFSyxVQUFVLEdBQUcsYUFBYSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixDQUFDOztRQUVwRSxLQUFLLEdBQVE7UUFDakIsR0FBRyxFQUFFO1lBQ0gsS0FBSyxFQUFFLFVBQVUsQ0FBQyxLQUFLO1lBQ3ZCLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxHQUFHO1NBQ3JDO1FBQ0QsS0FBSyxFQUFFO1lBQ0wsS0FBSyxFQUFFLFVBQVUsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUs7WUFDdkMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxNQUFNO1NBQzFCO1FBQ0QsTUFBTSxFQUFFO1lBQ04sS0FBSyxFQUFFLFVBQVUsQ0FBQyxLQUFLO1lBQ3ZCLE1BQU0sRUFBRSxVQUFVLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNO1NBQzNDO1FBQ0QsSUFBSSxFQUFFO1lBQ0osS0FBSyxFQUFFLE9BQU8sQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLElBQUk7WUFDckMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxNQUFNO1NBQzFCO0tBQ0Y7O1FBRUssV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ25DLEdBQUc7Ozs7SUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLG9CQUNWLEdBQUcsS0FBQSxJQUNBLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFDYixJQUFJLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUN6QixFQUpVLENBSVYsRUFBQztTQUNGLElBQUk7Ozs7O0lBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFmLENBQWUsRUFBQzs7UUFFOUIsYUFBYSxHQUFVLFdBQVcsQ0FBQyxNQUFNOzs7O0lBQzNDLFVBQUMsRUFBaUI7WUFBZixnQkFBSyxFQUFFLGtCQUFNO1FBQ2QsT0FBQSxLQUFLLElBQUksTUFBTSxDQUFDLFdBQVcsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLFlBQVk7SUFBNUQsQ0FBNEQsRUFDL0Q7SUFFRCxhQUFhLEdBQUcsZ0JBQWdCO1NBQzdCLE1BQU07Ozs7O0lBQUMsVUFBQyxHQUFHLEVBQUUsR0FBRzs7UUFDZiw0QkFBWSxHQUFHLGVBQUcsR0FBRyxJQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsT0FBRztJQUMvQyxDQUFDLEdBQUUsRUFBRSxDQUFDLENBQUM7O1FBRUgsaUJBQWlCLEdBQVcsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDO1FBQ3hELENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRztRQUN0QixDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUc7O1FBRWhCLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUV6QyxNQUFNLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBRXhFLE9BQU8saUJBQWlCLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQUksU0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNoRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVdGlsaXR5IHVzZWQgdG8gdHJhbnNmb3JtIHRoZSBgYXV0b2AgcGxhY2VtZW50IHRvIHRoZSBwbGFjZW1lbnQgd2l0aCBtb3JlXG4gKiBhdmFpbGFibGUgc3BhY2UuXG4gKi9cbmltcG9ydCB7IGdldEJvdW5kYXJpZXMgfSBmcm9tICcuL2dldEJvdW5kYXJpZXMnO1xuXG5mdW5jdGlvbiBnZXRBcmVhKHsgd2lkdGgsIGhlaWdodCB9OiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9KSB7XG4gIHJldHVybiB3aWR0aCAqIGhlaWdodDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVBdXRvUGxhY2VtZW50KFxuICBwbGFjZW1lbnQ6IHN0cmluZyxcbiAgcmVmUmVjdDogYW55LFxuICB0YXJnZXQ6IEhUTUxFbGVtZW50LFxuICBob3N0OiBIVE1MRWxlbWVudCxcbiAgYWxsb3dlZFBvc2l0aW9uczogYW55W10gPSBbJ3RvcCcsICdsZWZ0JywgJ2JvdHRvbScsICdyaWdodCddLFxuICBib3VuZGFyaWVzRWxlbWVudCA9ICd2aWV3cG9ydCcsXG4gIHBhZGRpbmcgPSAwXG4pIHtcbiAgaWYgKHBsYWNlbWVudC5pbmRleE9mKCdhdXRvJykgPT09IC0xKSB7XG4gICAgcmV0dXJuIHBsYWNlbWVudDtcbiAgfVxuXG4gIGNvbnN0IGJvdW5kYXJpZXMgPSBnZXRCb3VuZGFyaWVzKHRhcmdldCwgaG9zdCwgcGFkZGluZywgYm91bmRhcmllc0VsZW1lbnQpO1xuXG4gIGNvbnN0IHJlY3RzOiBhbnkgPSB7XG4gICAgdG9wOiB7XG4gICAgICB3aWR0aDogYm91bmRhcmllcy53aWR0aCxcbiAgICAgIGhlaWdodDogcmVmUmVjdC50b3AgLSBib3VuZGFyaWVzLnRvcFxuICAgIH0sXG4gICAgcmlnaHQ6IHtcbiAgICAgIHdpZHRoOiBib3VuZGFyaWVzLnJpZ2h0IC0gcmVmUmVjdC5yaWdodCxcbiAgICAgIGhlaWdodDogYm91bmRhcmllcy5oZWlnaHRcbiAgICB9LFxuICAgIGJvdHRvbToge1xuICAgICAgd2lkdGg6IGJvdW5kYXJpZXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IGJvdW5kYXJpZXMuYm90dG9tIC0gcmVmUmVjdC5ib3R0b21cbiAgICB9LFxuICAgIGxlZnQ6IHtcbiAgICAgIHdpZHRoOiByZWZSZWN0LmxlZnQgLSBib3VuZGFyaWVzLmxlZnQsXG4gICAgICBoZWlnaHQ6IGJvdW5kYXJpZXMuaGVpZ2h0XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNvcnRlZEFyZWFzID0gT2JqZWN0LmtleXMocmVjdHMpXG4gICAgLm1hcChrZXkgPT4gKHtcbiAgICAgIGtleSxcbiAgICAgIC4uLnJlY3RzW2tleV0sXG4gICAgICBhcmVhOiBnZXRBcmVhKHJlY3RzW2tleV0pXG4gICAgfSkpXG4gICAgLnNvcnQoKGEsIGIpID0+IGIuYXJlYSAtIGEuYXJlYSk7XG5cbiAgbGV0IGZpbHRlcmVkQXJlYXM6IGFueVtdID0gc29ydGVkQXJlYXMuZmlsdGVyKFxuICAgICh7IHdpZHRoLCBoZWlnaHQgfSkgPT5cbiAgICAgIHdpZHRoID49IHRhcmdldC5jbGllbnRXaWR0aCAmJiBoZWlnaHQgPj0gdGFyZ2V0LmNsaWVudEhlaWdodFxuICApO1xuXG4gIGZpbHRlcmVkQXJlYXMgPSBhbGxvd2VkUG9zaXRpb25zXG4gICAgLnJlZHVjZSgob2JqLCBrZXkpID0+IHtcbiAgICAgIHJldHVybiB7IC4uLm9iaiwgW2tleV06IGZpbHRlcmVkQXJlYXNba2V5XSB9O1xuICAgIH0sIHt9KTtcblxuICBjb25zdCBjb21wdXRlZFBsYWNlbWVudDogc3RyaW5nID0gZmlsdGVyZWRBcmVhcy5sZW5ndGggPiAwXG4gICAgPyBmaWx0ZXJlZEFyZWFzWzBdLmtleVxuICAgIDogc29ydGVkQXJlYXNbMF0ua2V5O1xuXG4gIGNvbnN0IHZhcmlhdGlvbiA9IHBsYWNlbWVudC5zcGxpdCgnICcpWzFdO1xuXG4gIHRhcmdldC5jbGFzc05hbWUgPSB0YXJnZXQuY2xhc3NOYW1lLnJlcGxhY2UoL2F1dG8vZywgY29tcHV0ZWRQbGFjZW1lbnQpO1xuXG4gIHJldHVybiBjb21wdXRlZFBsYWNlbWVudCArICh2YXJpYXRpb24gPyBgLSR7dmFyaWF0aW9ufWAgOiAnJyk7XG59XG4iXX0=