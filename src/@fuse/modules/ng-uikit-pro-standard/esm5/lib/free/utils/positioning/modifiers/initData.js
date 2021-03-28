/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { computeAutoPlacement, getReferenceOffsets, getTargetOffsets } from '../utils/index';
/**
 * @param {?} targetElement
 * @param {?} hostElement
 * @param {?} position
 * @param {?} options
 * @return {?}
 */
export function initData(targetElement, hostElement, position, options) {
    /** @type {?} */
    var hostElPosition = getReferenceOffsets(targetElement, hostElement);
    /** @type {?} */
    var placementAuto = !!position.match(/auto/g);
    // support old placements 'auto left|right|top|bottom'
    /** @type {?} */
    var placement = !!position.match(/auto\s(left|right|top|bottom)/g)
        ? position.split(' ')[1] || ''
        : position;
    /** @type {?} */
    var targetOffset = getTargetOffsets(targetElement, hostElPosition, placement);
    placement = computeAutoPlacement(placement, hostElPosition, targetElement, hostElement);
    return {
        options: options,
        instance: {
            target: targetElement,
            host: hostElement,
            arrow: null
        },
        offsets: {
            target: targetOffset,
            host: hostElPosition,
            arrow: null
        },
        positionFixed: false,
        placement: placement,
        placementAuto: placementAuto
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdERhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS91dGlscy9wb3NpdGlvbmluZy9tb2RpZmllcnMvaW5pdERhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsbUJBQW1CLEVBQ25CLGdCQUFnQixFQUNqQixNQUFNLGdCQUFnQixDQUFDOzs7Ozs7OztBQUl4QixNQUFNLFVBQVUsUUFBUSxDQUN0QixhQUEwQixFQUFFLFdBQXdCLEVBQUUsUUFBZ0IsRUFBRSxPQUFnQjs7UUFHbEYsY0FBYyxHQUFHLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUM7O1FBQ2hFLGFBQWEsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7OztRQUczQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUM7UUFDaEUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRTtRQUM5QixDQUFDLENBQUMsUUFBUTs7UUFFTixZQUFZLEdBQUcsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLGNBQWMsRUFBRSxTQUFTLENBQUM7SUFDL0UsU0FBUyxHQUFHLG9CQUFvQixDQUFDLFNBQVMsRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBRXhGLE9BQU87UUFDTCxPQUFPLFNBQUE7UUFDUCxRQUFRLEVBQUU7WUFDUixNQUFNLEVBQUUsYUFBYTtZQUNyQixJQUFJLEVBQUUsV0FBVztZQUNqQixLQUFLLEVBQUUsSUFBSTtTQUNaO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsTUFBTSxFQUFFLFlBQVk7WUFDcEIsSUFBSSxFQUFFLGNBQWM7WUFDcEIsS0FBSyxFQUFFLElBQUk7U0FDWjtRQUNELGFBQWEsRUFBRSxLQUFLO1FBQ3BCLFNBQVMsV0FBQTtRQUNULGFBQWEsZUFBQTtLQUNkLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgY29tcHV0ZUF1dG9QbGFjZW1lbnQsXG4gIGdldFJlZmVyZW5jZU9mZnNldHMsXG4gIGdldFRhcmdldE9mZnNldHNcbn0gZnJvbSAnLi4vdXRpbHMvaW5kZXgnO1xuXG5pbXBvcnQgeyBEYXRhLCBPcHRpb25zIH0gZnJvbSAnLi4vbW9kZWxzL2luZGV4JztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXREYXRhKFxuICB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCwgaG9zdEVsZW1lbnQ6IEhUTUxFbGVtZW50LCBwb3NpdGlvbjogc3RyaW5nLCBvcHRpb25zOiBPcHRpb25zXG4pOiBEYXRhIHtcblxuICBjb25zdCBob3N0RWxQb3NpdGlvbiA9IGdldFJlZmVyZW5jZU9mZnNldHModGFyZ2V0RWxlbWVudCwgaG9zdEVsZW1lbnQpO1xuICBjb25zdCBwbGFjZW1lbnRBdXRvID0gISFwb3NpdGlvbi5tYXRjaCgvYXV0by9nKTtcblxuICAvLyBzdXBwb3J0IG9sZCBwbGFjZW1lbnRzICdhdXRvIGxlZnR8cmlnaHR8dG9wfGJvdHRvbSdcbiAgbGV0IHBsYWNlbWVudCA9ICEhcG9zaXRpb24ubWF0Y2goL2F1dG9cXHMobGVmdHxyaWdodHx0b3B8Ym90dG9tKS9nKVxuICAgID8gcG9zaXRpb24uc3BsaXQoJyAnKVsxXSB8fCAnJ1xuICAgIDogcG9zaXRpb247XG5cbiAgY29uc3QgdGFyZ2V0T2Zmc2V0ID0gZ2V0VGFyZ2V0T2Zmc2V0cyh0YXJnZXRFbGVtZW50LCBob3N0RWxQb3NpdGlvbiwgcGxhY2VtZW50KTtcbiAgcGxhY2VtZW50ID0gY29tcHV0ZUF1dG9QbGFjZW1lbnQocGxhY2VtZW50LCBob3N0RWxQb3NpdGlvbiwgdGFyZ2V0RWxlbWVudCwgaG9zdEVsZW1lbnQpO1xuXG4gIHJldHVybiB7XG4gICAgb3B0aW9ucyxcbiAgICBpbnN0YW5jZToge1xuICAgICAgdGFyZ2V0OiB0YXJnZXRFbGVtZW50LFxuICAgICAgaG9zdDogaG9zdEVsZW1lbnQsXG4gICAgICBhcnJvdzogbnVsbFxuICAgIH0sXG4gICAgb2Zmc2V0czoge1xuICAgICAgdGFyZ2V0OiB0YXJnZXRPZmZzZXQsXG4gICAgICBob3N0OiBob3N0RWxQb3NpdGlvbixcbiAgICAgIGFycm93OiBudWxsXG4gICAgfSxcbiAgICBwb3NpdGlvbkZpeGVkOiBmYWxzZSxcbiAgICBwbGFjZW1lbnQsXG4gICAgcGxhY2VtZW50QXV0b1xuICB9O1xufVxuIl19