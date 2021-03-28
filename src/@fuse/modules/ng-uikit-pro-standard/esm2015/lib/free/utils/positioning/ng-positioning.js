/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { getReferenceOffsets, setAllStyles } from './utils/index';
import { arrow, flip, preventOverflow, shift, initData } from './modifiers/index';
export class Positioning {
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @return {?}
     */
    position(hostElement, targetElement) {
        return this.offset(hostElement, targetElement);
    }
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @return {?}
     */
    offset(hostElement, targetElement) {
        return getReferenceOffsets(targetElement, hostElement);
    }
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?} position
     * @param {?=} _appendToBody
     * @param {?=} options
     * @return {?}
     */
    positionElements(hostElement, targetElement, position, _appendToBody, options) {
        /** @type {?} */
        const chainOfModifiers = [flip, shift, preventOverflow, arrow];
        return chainOfModifiers.reduce((/**
         * @param {?} modifiedData
         * @param {?} modifier
         * @return {?}
         */
        (modifiedData, modifier) => modifier(modifiedData)), initData(targetElement, hostElement, position, options));
    }
}
/** @type {?} */
const positionService = new Positioning();
/**
 * @param {?} hostElement
 * @param {?} targetElement
 * @param {?} placement
 * @param {?=} appendToBody
 * @param {?=} options
 * @param {?=} renderer
 * @return {?}
 */
export function positionElements(hostElement, targetElement, placement, appendToBody, options, renderer) {
    /** @type {?} */
    const data = positionService.positionElements(hostElement, targetElement, placement, appendToBody, options);
    setAllStyles(data, renderer);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcG9zaXRpb25pbmcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS91dGlscy9wb3NpdGlvbmluZy9uZy1wb3NpdGlvbmluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBTUEsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBSWxGLE1BQU0sT0FBTyxXQUFXOzs7Ozs7SUFDdEIsUUFBUSxDQUFDLFdBQXdCLEVBQUUsYUFBMEI7UUFDM0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsV0FBd0IsRUFBRSxhQUEwQjtRQUN6RCxPQUFPLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7Ozs7Ozs7SUFFRCxnQkFBZ0IsQ0FDZCxXQUF3QixFQUN4QixhQUEwQixFQUMxQixRQUFnQixFQUNoQixhQUF1QixFQUN2QixPQUFhOztjQUVQLGdCQUFnQixHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsS0FBSyxDQUFDO1FBRTlELE9BQU8sZ0JBQWdCLENBQUMsTUFBTTs7Ozs7UUFDNUIsQ0FBQyxZQUFZLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEdBQ2xELFFBQVEsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FDeEQsQ0FBQztJQUNKLENBQUM7Q0FDRjs7TUFFSyxlQUFlLEdBQUcsSUFBSSxXQUFXLEVBQUU7Ozs7Ozs7Ozs7QUFFekMsTUFBTSxVQUFVLGdCQUFnQixDQUM5QixXQUF3QixFQUN4QixhQUEwQixFQUMxQixTQUFpQixFQUNqQixZQUFzQixFQUN0QixPQUFpQixFQUNqQixRQUFvQjs7VUFHZCxJQUFJLEdBQUcsZUFBZSxDQUFDLGdCQUFnQixDQUMzQyxXQUFXLEVBQ1gsYUFBYSxFQUNiLFNBQVMsRUFDVCxZQUFZLEVBQ1osT0FBTyxDQUNSO0lBRUQsWUFBWSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztBQUMvQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAY29weXJpZ2h0IFZhbG9yIFNvZnR3YXJlXG4gKiBAY29weXJpZ2h0IEZlZGVyaWNvIFppdm9sbyBhbmQgY29udHJpYnV0b3JzXG4gKi9cbmltcG9ydCB7IFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBnZXRSZWZlcmVuY2VPZmZzZXRzLCBzZXRBbGxTdHlsZXMgfSBmcm9tICcuL3V0aWxzL2luZGV4JztcblxuaW1wb3J0IHsgYXJyb3csIGZsaXAsIHByZXZlbnRPdmVyZmxvdywgc2hpZnQsIGluaXREYXRhIH0gZnJvbSAnLi9tb2RpZmllcnMvaW5kZXgnO1xuaW1wb3J0IHsgRGF0YSwgT2Zmc2V0cywgT3B0aW9ucyB9IGZyb20gJy4vbW9kZWxzL2luZGV4JztcblxuXG5leHBvcnQgY2xhc3MgUG9zaXRpb25pbmcge1xuICBwb3NpdGlvbihob3N0RWxlbWVudDogSFRNTEVsZW1lbnQsIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50KTogT2Zmc2V0cyB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0KGhvc3RFbGVtZW50LCB0YXJnZXRFbGVtZW50KTtcbiAgfVxuXG4gIG9mZnNldChob3N0RWxlbWVudDogSFRNTEVsZW1lbnQsIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50KTogT2Zmc2V0cyB7XG4gICAgcmV0dXJuIGdldFJlZmVyZW5jZU9mZnNldHModGFyZ2V0RWxlbWVudCwgaG9zdEVsZW1lbnQpO1xuICB9XG5cbiAgcG9zaXRpb25FbGVtZW50cyhcbiAgICBob3N0RWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgcG9zaXRpb246IHN0cmluZyxcbiAgICBfYXBwZW5kVG9Cb2R5PzogYm9vbGVhbixcbiAgICBvcHRpb25zPzogYW55XG4gICk6IERhdGEge1xuICAgIGNvbnN0IGNoYWluT2ZNb2RpZmllcnMgPSBbZmxpcCwgc2hpZnQsIHByZXZlbnRPdmVyZmxvdywgYXJyb3ddO1xuXG4gICAgcmV0dXJuIGNoYWluT2ZNb2RpZmllcnMucmVkdWNlKFxuICAgICAgKG1vZGlmaWVkRGF0YSwgbW9kaWZpZXIpID0+IG1vZGlmaWVyKG1vZGlmaWVkRGF0YSksXG4gICAgICBpbml0RGF0YSh0YXJnZXRFbGVtZW50LCBob3N0RWxlbWVudCwgcG9zaXRpb24sIG9wdGlvbnMpXG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBwb3NpdGlvblNlcnZpY2UgPSBuZXcgUG9zaXRpb25pbmcoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBvc2l0aW9uRWxlbWVudHMoXG4gIGhvc3RFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIHBsYWNlbWVudDogc3RyaW5nLFxuICBhcHBlbmRUb0JvZHk/OiBib29sZWFuLFxuICBvcHRpb25zPzogT3B0aW9ucyxcbiAgcmVuZGVyZXI/OiBSZW5kZXJlcjJcbik6IHZvaWQge1xuXG4gIGNvbnN0IGRhdGEgPSBwb3NpdGlvblNlcnZpY2UucG9zaXRpb25FbGVtZW50cyhcbiAgICBob3N0RWxlbWVudCxcbiAgICB0YXJnZXRFbGVtZW50LFxuICAgIHBsYWNlbWVudCxcbiAgICBhcHBlbmRUb0JvZHksXG4gICAgb3B0aW9uc1xuICApO1xuXG4gIHNldEFsbFN0eWxlcyhkYXRhLCByZW5kZXJlcik7XG59XG4iXX0=