/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Get offsets to the target
 */
import { getOppositePlacement } from './getOppositePlacement';
import { getOuterSizes } from './getOuterSizes';
/**
 * @param {?} target
 * @param {?} hostOffsets
 * @param {?} position
 * @return {?}
 */
export function getTargetOffsets(target, hostOffsets, position) {
    /** @type {?} */
    var placement = position.split(' ')[0];
    // Get target node sizes
    /** @type {?} */
    var targetRect = getOuterSizes(target);
    // Add position, width and height to our offsets object
    /** @type {?} */
    var targetOffsets = {
        width: targetRect.width,
        height: targetRect.height
    };
    // depending by the target placement we have to compute its offsets slightly differently
    /** @type {?} */
    var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
    /** @type {?} */
    var mainSide = isHoriz ? 'top' : 'left';
    /** @type {?} */
    var secondarySide = isHoriz ? 'left' : 'top';
    /** @type {?} */
    var measurement = isHoriz ? 'height' : 'width';
    /** @type {?} */
    var secondaryMeasurement = !isHoriz ? 'height' : 'width';
    ((/** @type {?} */ (targetOffsets)))[mainSide] =
        hostOffsets[mainSide] +
            hostOffsets[measurement] / 2 -
            targetRect[measurement] / 2;
    ((/** @type {?} */ (targetOffsets)))[secondarySide] = placement === secondarySide
        ? hostOffsets[secondarySide] - targetRect[secondaryMeasurement]
        : ((/** @type {?} */ (hostOffsets)))[getOppositePlacement(secondarySide)];
    return targetOffsets;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0VGFyZ2V0T2Zmc2V0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3V0aWxzL3Bvc2l0aW9uaW5nL3V0aWxzL2dldFRhcmdldE9mZnNldHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7OztBQUdoRCxNQUFNLFVBQVUsZ0JBQWdCLENBQzlCLE1BQW1CLEVBQ25CLFdBQWdCLEVBQ2hCLFFBQWdCOztRQUVWLFNBQVMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O1FBR2xDLFVBQVUsR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDOzs7UUFHbEMsYUFBYSxHQUFHO1FBQ3BCLEtBQUssRUFBRSxVQUFVLENBQUMsS0FBSztRQUN2QixNQUFNLEVBQUUsVUFBVSxDQUFDLE1BQU07S0FDMUI7OztRQUdLLE9BQU8sR0FBRyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDOztRQUNyRCxRQUFRLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU07O1FBQ25DLGFBQWEsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSzs7UUFDeEMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPOztRQUMxQyxvQkFBb0IsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPO0lBRTFELENBQUMsbUJBQUEsYUFBYSxFQUFPLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDOUIsV0FBVyxDQUFDLFFBQVEsQ0FBQztZQUNyQixXQUFXLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQztZQUM1QixVQUFVLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRTlCLENBQUMsbUJBQUEsYUFBYSxFQUFPLENBQUMsQ0FBQyxhQUFhLENBQUMsR0FBRyxTQUFTLEtBQUssYUFBYTtRQUNqRSxDQUFDLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQztRQUMvRCxDQUFDLENBQUMsQ0FBQyxtQkFBQSxXQUFXLEVBQU8sQ0FBQyxDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFFOUQsT0FBTyxhQUFhLENBQUM7QUFDdkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogR2V0IG9mZnNldHMgdG8gdGhlIHRhcmdldFxuICovXG5pbXBvcnQgeyBnZXRPcHBvc2l0ZVBsYWNlbWVudCB9IGZyb20gJy4vZ2V0T3Bwb3NpdGVQbGFjZW1lbnQnO1xuaW1wb3J0IHsgZ2V0T3V0ZXJTaXplcyB9IGZyb20gJy4vZ2V0T3V0ZXJTaXplcyc7XG5pbXBvcnQgeyBPZmZzZXRzIH0gZnJvbSAnLi4vbW9kZWxzL2luZGV4JztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRhcmdldE9mZnNldHMoXG4gIHRhcmdldDogSFRNTEVsZW1lbnQsXG4gIGhvc3RPZmZzZXRzOiBhbnksXG4gIHBvc2l0aW9uOiBzdHJpbmdcbik6IE9mZnNldHMge1xuICBjb25zdCBwbGFjZW1lbnQgPSBwb3NpdGlvbi5zcGxpdCgnICcpWzBdO1xuXG4gIC8vIEdldCB0YXJnZXQgbm9kZSBzaXplc1xuICBjb25zdCB0YXJnZXRSZWN0ID0gZ2V0T3V0ZXJTaXplcyh0YXJnZXQpO1xuXG4gIC8vIEFkZCBwb3NpdGlvbiwgd2lkdGggYW5kIGhlaWdodCB0byBvdXIgb2Zmc2V0cyBvYmplY3RcbiAgY29uc3QgdGFyZ2V0T2Zmc2V0cyA9IHtcbiAgICB3aWR0aDogdGFyZ2V0UmVjdC53aWR0aCxcbiAgICBoZWlnaHQ6IHRhcmdldFJlY3QuaGVpZ2h0XG4gIH07XG5cbiAgLy8gZGVwZW5kaW5nIGJ5IHRoZSB0YXJnZXQgcGxhY2VtZW50IHdlIGhhdmUgdG8gY29tcHV0ZSBpdHMgb2Zmc2V0cyBzbGlnaHRseSBkaWZmZXJlbnRseVxuICBjb25zdCBpc0hvcml6ID0gWydyaWdodCcsICdsZWZ0J10uaW5kZXhPZihwbGFjZW1lbnQpICE9PSAtMTtcbiAgY29uc3QgbWFpblNpZGUgPSBpc0hvcml6ID8gJ3RvcCcgOiAnbGVmdCc7XG4gIGNvbnN0IHNlY29uZGFyeVNpZGUgPSBpc0hvcml6ID8gJ2xlZnQnIDogJ3RvcCc7XG4gIGNvbnN0IG1lYXN1cmVtZW50ID0gaXNIb3JpeiA/ICdoZWlnaHQnIDogJ3dpZHRoJztcbiAgY29uc3Qgc2Vjb25kYXJ5TWVhc3VyZW1lbnQgPSAhaXNIb3JpeiA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICAodGFyZ2V0T2Zmc2V0cyBhcyBhbnkpW21haW5TaWRlXSA9XG4gICAgaG9zdE9mZnNldHNbbWFpblNpZGVdICtcbiAgICBob3N0T2Zmc2V0c1ttZWFzdXJlbWVudF0gLyAyIC1cbiAgICB0YXJnZXRSZWN0W21lYXN1cmVtZW50XSAvIDI7XG5cbiAgKHRhcmdldE9mZnNldHMgYXMgYW55KVtzZWNvbmRhcnlTaWRlXSA9IHBsYWNlbWVudCA9PT0gc2Vjb25kYXJ5U2lkZVxuICAgID8gaG9zdE9mZnNldHNbc2Vjb25kYXJ5U2lkZV0gLSB0YXJnZXRSZWN0W3NlY29uZGFyeU1lYXN1cmVtZW50XVxuICAgIDogKGhvc3RPZmZzZXRzIGFzIGFueSlbZ2V0T3Bwb3NpdGVQbGFjZW1lbnQoc2Vjb25kYXJ5U2lkZSldO1xuXG4gIHJldHVybiB0YXJnZXRPZmZzZXRzO1xufVxuIl19