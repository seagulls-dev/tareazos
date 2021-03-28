/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Returns the offset parent of the given element
 */
import { getStyleComputedProperty } from './getStyleComputedProperty';
import { isIE } from './isIE';
/**
 * @param {?} element
 * @return {?}
 */
export function getOffsetParent(element) {
    if (!element) {
        return document.documentElement;
    }
    /** @type {?} */
    var noOffsetParent = isIE(10) ? document.body : null;
    // NOTE: 1 DOM access here
    /** @type {?} */
    var offsetParent = element.offsetParent || null;
    // Skip hidden elements which don't have an offsetParent
    /** @type {?} */
    var sibling;
    while (offsetParent === noOffsetParent && element.nextElementSibling && element.nodeName !== 'BODY') {
        sibling = element.nextElementSibling;
        offsetParent = sibling.offsetParent;
    }
    /** @type {?} */
    var nodeName = offsetParent && offsetParent.nodeName;
    if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
        return sibling ? sibling.ownerDocument.documentElement : document.documentElement;
    }
    // .offsetParent will return the closest TH, TD or TABLE in case
    // no offsetParent is present, I hate this job...
    if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 &&
        getStyleComputedProperty(offsetParent, 'position') === 'static') {
        return getOffsetParent(offsetParent);
    }
    return offsetParent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0T2Zmc2V0UGFyZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvdXRpbHMvcG9zaXRpb25pbmcvdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDOzs7OztBQUU5QixNQUFNLFVBQVUsZUFBZSxDQUFDLE9BQVk7SUFDMUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtRQUNaLE9BQU8sUUFBUSxDQUFDLGVBQWUsQ0FBQztLQUNqQzs7UUFFSyxjQUFjLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJOzs7UUFHbEQsWUFBWSxHQUFHLE9BQU8sQ0FBQyxZQUFZLElBQUksSUFBSTs7O1FBRzNDLE9BQVk7SUFFaEIsT0FBTyxZQUFZLEtBQUssY0FBYyxJQUFJLE9BQU8sQ0FBQyxrQkFBa0IsSUFBSSxPQUFPLENBQUMsUUFBUSxLQUFLLE1BQU0sRUFBRTtRQUNuRyxPQUFPLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDO1FBQ3JDLFlBQVksR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDO0tBQ3JDOztRQUVLLFFBQVEsR0FBRyxZQUFZLElBQUksWUFBWSxDQUFDLFFBQVE7SUFFdEQsSUFBSSxDQUFDLFFBQVEsSUFBSSxRQUFRLEtBQUssTUFBTSxJQUFJLFFBQVEsS0FBSyxNQUFNLEVBQUU7UUFDM0QsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDO0tBQ25GO0lBRUQsZ0VBQWdFO0lBQ2hFLGlEQUFpRDtJQUNqRCxJQUNFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzRCx3QkFBd0IsQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDLEtBQUssUUFBUSxFQUMvRDtRQUNBLE9BQU8sZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQ3RDO0lBRUQsT0FBTyxZQUFZLENBQUM7QUFDdEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUmV0dXJucyB0aGUgb2Zmc2V0IHBhcmVudCBvZiB0aGUgZ2l2ZW4gZWxlbWVudFxuICovXG5pbXBvcnQgeyBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkgfSBmcm9tICcuL2dldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSc7XG5pbXBvcnQgeyBpc0lFIH0gZnJvbSAnLi9pc0lFJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldE9mZnNldFBhcmVudChlbGVtZW50OiBhbnkpOiBhbnkge1xuICBpZiAoIWVsZW1lbnQpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB9XG5cbiAgY29uc3Qgbm9PZmZzZXRQYXJlbnQgPSBpc0lFKDEwKSA/IGRvY3VtZW50LmJvZHkgOiBudWxsO1xuXG4gIC8vIE5PVEU6IDEgRE9NIGFjY2VzcyBoZXJlXG4gIGxldCBvZmZzZXRQYXJlbnQgPSBlbGVtZW50Lm9mZnNldFBhcmVudCB8fCBudWxsO1xuICAvLyBTa2lwIGhpZGRlbiBlbGVtZW50cyB3aGljaCBkb24ndCBoYXZlIGFuIG9mZnNldFBhcmVudFxuXG4gIGxldCBzaWJsaW5nOiBhbnk7XG5cbiAgd2hpbGUgKG9mZnNldFBhcmVudCA9PT0gbm9PZmZzZXRQYXJlbnQgJiYgZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcgJiYgZWxlbWVudC5ub2RlTmFtZSAhPT0gJ0JPRFknKSB7XG4gICAgc2libGluZyA9IGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIG9mZnNldFBhcmVudCA9IHNpYmxpbmcub2Zmc2V0UGFyZW50O1xuICB9XG5cbiAgY29uc3Qgbm9kZU5hbWUgPSBvZmZzZXRQYXJlbnQgJiYgb2Zmc2V0UGFyZW50Lm5vZGVOYW1lO1xuXG4gIGlmICghbm9kZU5hbWUgfHwgbm9kZU5hbWUgPT09ICdCT0RZJyB8fCBub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgcmV0dXJuIHNpYmxpbmcgPyBzaWJsaW5nLm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB9XG5cbiAgLy8gLm9mZnNldFBhcmVudCB3aWxsIHJldHVybiB0aGUgY2xvc2VzdCBUSCwgVEQgb3IgVEFCTEUgaW4gY2FzZVxuICAvLyBubyBvZmZzZXRQYXJlbnQgaXMgcHJlc2VudCwgSSBoYXRlIHRoaXMgam9iLi4uXG4gIGlmIChcbiAgICBbJ1RIJywgJ1REJywgJ1RBQkxFJ10uaW5kZXhPZihvZmZzZXRQYXJlbnQubm9kZU5hbWUpICE9PSAtMSAmJlxuICAgIGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShvZmZzZXRQYXJlbnQsICdwb3NpdGlvbicpID09PSAnc3RhdGljJ1xuICApIHtcbiAgICByZXR1cm4gZ2V0T2Zmc2V0UGFyZW50KG9mZnNldFBhcmVudCk7XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0UGFyZW50O1xufVxuIl19