/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 */
import { getBoundaries } from './getBoundaries';
/**
 * @param {?} __0
 * @return {?}
 */
function getArea({ width, height }) {
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
export function computeAutoPlacement(placement, refRect, target, host, allowedPositions = ['top', 'left', 'bottom', 'right'], boundariesElement = 'viewport', padding = 0) {
    if (placement.indexOf('auto') === -1) {
        return placement;
    }
    /** @type {?} */
    const boundaries = getBoundaries(target, host, padding, boundariesElement);
    /** @type {?} */
    const rects = {
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
    const sortedAreas = Object.keys(rects)
        .map((/**
     * @param {?} key
     * @return {?}
     */
    key => (Object.assign({ key }, rects[key], { area: getArea(rects[key]) }))))
        .sort((/**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    (a, b) => b.area - a.area));
    /** @type {?} */
    let filteredAreas = sortedAreas.filter((/**
     * @param {?} __0
     * @return {?}
     */
    ({ width, height }) => width >= target.clientWidth && height >= target.clientHeight));
    filteredAreas = allowedPositions
        .reduce((/**
     * @param {?} obj
     * @param {?} key
     * @return {?}
     */
    (obj, key) => {
        return Object.assign({}, obj, { [key]: filteredAreas[key] });
    }), {});
    /** @type {?} */
    const computedPlacement = filteredAreas.length > 0
        ? filteredAreas[0].key
        : sortedAreas[0].key;
    /** @type {?} */
    const variation = placement.split(' ')[1];
    target.className = target.className.replace(/auto/g, computedPlacement);
    return computedPlacement + (variation ? `-${variation}` : '');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcHV0ZUF1dG9QbGFjZW1lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS91dGlscy9wb3NpdGlvbmluZy91dGlscy9jb21wdXRlQXV0b1BsYWNlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUlBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7QUFFaEQsU0FBUyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUE2QjtJQUMzRCxPQUFPLEtBQUssR0FBRyxNQUFNLENBQUM7QUFDeEIsQ0FBQzs7Ozs7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsb0JBQW9CLENBQ2xDLFNBQWlCLEVBQ2pCLE9BQVksRUFDWixNQUFtQixFQUNuQixJQUFpQixFQUNqQixtQkFBMEIsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFDNUQsaUJBQWlCLEdBQUcsVUFBVSxFQUM5QixPQUFPLEdBQUcsQ0FBQztJQUVYLElBQUksU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtRQUNwQyxPQUFPLFNBQVMsQ0FBQztLQUNsQjs7VUFFSyxVQUFVLEdBQUcsYUFBYSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixDQUFDOztVQUVwRSxLQUFLLEdBQVE7UUFDakIsR0FBRyxFQUFFO1lBQ0gsS0FBSyxFQUFFLFVBQVUsQ0FBQyxLQUFLO1lBQ3ZCLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxHQUFHO1NBQ3JDO1FBQ0QsS0FBSyxFQUFFO1lBQ0wsS0FBSyxFQUFFLFVBQVUsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUs7WUFDdkMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxNQUFNO1NBQzFCO1FBQ0QsTUFBTSxFQUFFO1lBQ04sS0FBSyxFQUFFLFVBQVUsQ0FBQyxLQUFLO1lBQ3ZCLE1BQU0sRUFBRSxVQUFVLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNO1NBQzNDO1FBQ0QsSUFBSSxFQUFFO1lBQ0osS0FBSyxFQUFFLE9BQU8sQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLElBQUk7WUFDckMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxNQUFNO1NBQzFCO0tBQ0Y7O1VBRUssV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ25DLEdBQUc7Ozs7SUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLGlCQUNWLEdBQUcsSUFDQSxLQUFLLENBQUMsR0FBRyxDQUFDLElBQ2IsSUFBSSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFDekIsRUFBQztTQUNGLElBQUk7Ozs7O0lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUM7O1FBRTlCLGFBQWEsR0FBVSxXQUFXLENBQUMsTUFBTTs7OztJQUMzQyxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FDcEIsS0FBSyxJQUFJLE1BQU0sQ0FBQyxXQUFXLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxZQUFZLEVBQy9EO0lBRUQsYUFBYSxHQUFHLGdCQUFnQjtTQUM3QixNQUFNOzs7OztJQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO1FBQ25CLHlCQUFZLEdBQUcsSUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBRztJQUMvQyxDQUFDLEdBQUUsRUFBRSxDQUFDLENBQUM7O1VBRUgsaUJBQWlCLEdBQVcsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDO1FBQ3hELENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRztRQUN0QixDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUc7O1VBRWhCLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUV6QyxNQUFNLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBRXhFLE9BQU8saUJBQWlCLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2hFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFV0aWxpdHkgdXNlZCB0byB0cmFuc2Zvcm0gdGhlIGBhdXRvYCBwbGFjZW1lbnQgdG8gdGhlIHBsYWNlbWVudCB3aXRoIG1vcmVcbiAqIGF2YWlsYWJsZSBzcGFjZS5cbiAqL1xuaW1wb3J0IHsgZ2V0Qm91bmRhcmllcyB9IGZyb20gJy4vZ2V0Qm91bmRhcmllcyc7XG5cbmZ1bmN0aW9uIGdldEFyZWEoeyB3aWR0aCwgaGVpZ2h0IH06IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0pIHtcbiAgcmV0dXJuIHdpZHRoICogaGVpZ2h0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZUF1dG9QbGFjZW1lbnQoXG4gIHBsYWNlbWVudDogc3RyaW5nLFxuICByZWZSZWN0OiBhbnksXG4gIHRhcmdldDogSFRNTEVsZW1lbnQsXG4gIGhvc3Q6IEhUTUxFbGVtZW50LFxuICBhbGxvd2VkUG9zaXRpb25zOiBhbnlbXSA9IFsndG9wJywgJ2xlZnQnLCAnYm90dG9tJywgJ3JpZ2h0J10sXG4gIGJvdW5kYXJpZXNFbGVtZW50ID0gJ3ZpZXdwb3J0JyxcbiAgcGFkZGluZyA9IDBcbikge1xuICBpZiAocGxhY2VtZW50LmluZGV4T2YoJ2F1dG8nKSA9PT0gLTEpIHtcbiAgICByZXR1cm4gcGxhY2VtZW50O1xuICB9XG5cbiAgY29uc3QgYm91bmRhcmllcyA9IGdldEJvdW5kYXJpZXModGFyZ2V0LCBob3N0LCBwYWRkaW5nLCBib3VuZGFyaWVzRWxlbWVudCk7XG5cbiAgY29uc3QgcmVjdHM6IGFueSA9IHtcbiAgICB0b3A6IHtcbiAgICAgIHdpZHRoOiBib3VuZGFyaWVzLndpZHRoLFxuICAgICAgaGVpZ2h0OiByZWZSZWN0LnRvcCAtIGJvdW5kYXJpZXMudG9wXG4gICAgfSxcbiAgICByaWdodDoge1xuICAgICAgd2lkdGg6IGJvdW5kYXJpZXMucmlnaHQgLSByZWZSZWN0LnJpZ2h0LFxuICAgICAgaGVpZ2h0OiBib3VuZGFyaWVzLmhlaWdodFxuICAgIH0sXG4gICAgYm90dG9tOiB7XG4gICAgICB3aWR0aDogYm91bmRhcmllcy53aWR0aCxcbiAgICAgIGhlaWdodDogYm91bmRhcmllcy5ib3R0b20gLSByZWZSZWN0LmJvdHRvbVxuICAgIH0sXG4gICAgbGVmdDoge1xuICAgICAgd2lkdGg6IHJlZlJlY3QubGVmdCAtIGJvdW5kYXJpZXMubGVmdCxcbiAgICAgIGhlaWdodDogYm91bmRhcmllcy5oZWlnaHRcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc29ydGVkQXJlYXMgPSBPYmplY3Qua2V5cyhyZWN0cylcbiAgICAubWFwKGtleSA9PiAoe1xuICAgICAga2V5LFxuICAgICAgLi4ucmVjdHNba2V5XSxcbiAgICAgIGFyZWE6IGdldEFyZWEocmVjdHNba2V5XSlcbiAgICB9KSlcbiAgICAuc29ydCgoYSwgYikgPT4gYi5hcmVhIC0gYS5hcmVhKTtcblxuICBsZXQgZmlsdGVyZWRBcmVhczogYW55W10gPSBzb3J0ZWRBcmVhcy5maWx0ZXIoXG4gICAgKHsgd2lkdGgsIGhlaWdodCB9KSA9PlxuICAgICAgd2lkdGggPj0gdGFyZ2V0LmNsaWVudFdpZHRoICYmIGhlaWdodCA+PSB0YXJnZXQuY2xpZW50SGVpZ2h0XG4gICk7XG5cbiAgZmlsdGVyZWRBcmVhcyA9IGFsbG93ZWRQb3NpdGlvbnNcbiAgICAucmVkdWNlKChvYmosIGtleSkgPT4ge1xuICAgICAgcmV0dXJuIHsgLi4ub2JqLCBba2V5XTogZmlsdGVyZWRBcmVhc1trZXldIH07XG4gICAgfSwge30pO1xuXG4gIGNvbnN0IGNvbXB1dGVkUGxhY2VtZW50OiBzdHJpbmcgPSBmaWx0ZXJlZEFyZWFzLmxlbmd0aCA+IDBcbiAgICA/IGZpbHRlcmVkQXJlYXNbMF0ua2V5XG4gICAgOiBzb3J0ZWRBcmVhc1swXS5rZXk7XG5cbiAgY29uc3QgdmFyaWF0aW9uID0gcGxhY2VtZW50LnNwbGl0KCcgJylbMV07XG5cbiAgdGFyZ2V0LmNsYXNzTmFtZSA9IHRhcmdldC5jbGFzc05hbWUucmVwbGFjZSgvYXV0by9nLCBjb21wdXRlZFBsYWNlbWVudCk7XG5cbiAgcmV0dXJuIGNvbXB1dGVkUGxhY2VtZW50ICsgKHZhcmlhdGlvbiA/IGAtJHt2YXJpYXRpb259YCA6ICcnKTtcbn1cbiJdfQ==