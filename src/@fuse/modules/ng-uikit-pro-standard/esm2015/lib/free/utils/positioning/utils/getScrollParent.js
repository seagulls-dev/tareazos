/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Returns the scrolling parent of the given element
 */
import { getStyleComputedProperty } from './getStyleComputedProperty';
import { getParentNode } from './getParentNode';
/**
 * @param {?} element
 * @return {?}
 */
export function getScrollParent(element) {
    // Return body, `getScroll` will take care to get the correct `scrollTop` from it
    if (!element) {
        return document.body;
    }
    switch (element.nodeName) {
        case 'HTML':
        case 'BODY':
            return element.ownerDocument.body;
        case '#document':
            return element.body;
        default:
    }
    // Firefox want us to check `-x` and `-y` variations as well
    const { overflow, overflowX, overflowY } = getStyleComputedProperty(element);
    if (/(auto|scroll|overlay)/.test(String(overflow) + String(overflowY) + String(overflowX))) {
        return element;
    }
    return getScrollParent(getParentNode(element));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0U2Nyb2xsUGFyZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvdXRpbHMvcG9zaXRpb25pbmcvdXRpbHMvZ2V0U2Nyb2xsUGFyZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7O0FBRWhELE1BQU0sVUFBVSxlQUFlLENBQUMsT0FBWTtJQUMxQyxpRkFBaUY7SUFDakYsSUFBSSxDQUFDLE9BQU8sRUFBRTtRQUNaLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztLQUN0QjtJQUVELFFBQVEsT0FBTyxDQUFDLFFBQVEsRUFBRTtRQUN4QixLQUFLLE1BQU0sQ0FBQztRQUNaLEtBQUssTUFBTTtZQUNULE9BQU8sT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7UUFDcEMsS0FBSyxXQUFXO1lBQ2QsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQ3RCLFFBQVE7S0FDVDs7VUFHSyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEdBQUcsd0JBQXdCLENBQUMsT0FBTyxDQUFDO0lBQzVFLElBQUksdUJBQXVCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUU7UUFDMUYsT0FBTyxPQUFPLENBQUM7S0FDaEI7SUFFRCxPQUFPLGVBQWUsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUNqRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSZXR1cm5zIHRoZSBzY3JvbGxpbmcgcGFyZW50IG9mIHRoZSBnaXZlbiBlbGVtZW50XG4gKi9cbmltcG9ydCB7IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSB9IGZyb20gJy4vZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5JztcbmltcG9ydCB7IGdldFBhcmVudE5vZGUgfSBmcm9tICcuL2dldFBhcmVudE5vZGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2Nyb2xsUGFyZW50KGVsZW1lbnQ6IGFueSk6IGFueSB7XG4gIC8vIFJldHVybiBib2R5LCBgZ2V0U2Nyb2xsYCB3aWxsIHRha2UgY2FyZSB0byBnZXQgdGhlIGNvcnJlY3QgYHNjcm9sbFRvcGAgZnJvbSBpdFxuICBpZiAoIWVsZW1lbnQpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuYm9keTtcbiAgfVxuXG4gIHN3aXRjaCAoZWxlbWVudC5ub2RlTmFtZSkge1xuICAgIGNhc2UgJ0hUTUwnOlxuICAgIGNhc2UgJ0JPRFknOlxuICAgICAgcmV0dXJuIGVsZW1lbnQub3duZXJEb2N1bWVudC5ib2R5O1xuICAgIGNhc2UgJyNkb2N1bWVudCc6XG4gICAgICByZXR1cm4gZWxlbWVudC5ib2R5O1xuICAgIGRlZmF1bHQ6XG4gIH1cblxuICAvLyBGaXJlZm94IHdhbnQgdXMgdG8gY2hlY2sgYC14YCBhbmQgYC15YCB2YXJpYXRpb25zIGFzIHdlbGxcbiAgY29uc3QgeyBvdmVyZmxvdywgb3ZlcmZsb3dYLCBvdmVyZmxvd1kgfSA9IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShlbGVtZW50KTtcbiAgaWYgKC8oYXV0b3xzY3JvbGx8b3ZlcmxheSkvLnRlc3QoU3RyaW5nKG92ZXJmbG93KSArIFN0cmluZyhvdmVyZmxvd1kpICsgU3RyaW5nKG92ZXJmbG93WCkpKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICByZXR1cm4gZ2V0U2Nyb2xsUGFyZW50KGdldFBhcmVudE5vZGUoZWxlbWVudCkpO1xufVxuIl19