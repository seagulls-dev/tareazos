/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { getReferenceOffsets, setAllStyles } from './utils/index';
import { arrow, flip, preventOverflow, shift, initData } from './modifiers/index';
var Positioning = /** @class */ (function () {
    function Positioning() {
    }
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @return {?}
     */
    Positioning.prototype.position = /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @return {?}
     */
    function (hostElement, targetElement) {
        return this.offset(hostElement, targetElement);
    };
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @return {?}
     */
    Positioning.prototype.offset = /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @return {?}
     */
    function (hostElement, targetElement) {
        return getReferenceOffsets(targetElement, hostElement);
    };
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?} position
     * @param {?=} _appendToBody
     * @param {?=} options
     * @return {?}
     */
    Positioning.prototype.positionElements = /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?} position
     * @param {?=} _appendToBody
     * @param {?=} options
     * @return {?}
     */
    function (hostElement, targetElement, position, _appendToBody, options) {
        /** @type {?} */
        var chainOfModifiers = [flip, shift, preventOverflow, arrow];
        return chainOfModifiers.reduce((/**
         * @param {?} modifiedData
         * @param {?} modifier
         * @return {?}
         */
        function (modifiedData, modifier) { return modifier(modifiedData); }), initData(targetElement, hostElement, position, options));
    };
    return Positioning;
}());
export { Positioning };
/** @type {?} */
var positionService = new Positioning();
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
    var data = positionService.positionElements(hostElement, targetElement, placement, appendToBody, options);
    setAllStyles(data, renderer);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcG9zaXRpb25pbmcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS91dGlscy9wb3NpdGlvbmluZy9uZy1wb3NpdGlvbmluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBTUEsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBSWxGO0lBQUE7SUF1QkEsQ0FBQzs7Ozs7O0lBdEJDLDhCQUFROzs7OztJQUFSLFVBQVMsV0FBd0IsRUFBRSxhQUEwQjtRQUMzRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7OztJQUVELDRCQUFNOzs7OztJQUFOLFVBQU8sV0FBd0IsRUFBRSxhQUEwQjtRQUN6RCxPQUFPLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7Ozs7Ozs7SUFFRCxzQ0FBZ0I7Ozs7Ozs7O0lBQWhCLFVBQ0UsV0FBd0IsRUFDeEIsYUFBMEIsRUFDMUIsUUFBZ0IsRUFDaEIsYUFBdUIsRUFDdkIsT0FBYTs7WUFFUCxnQkFBZ0IsR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLEtBQUssQ0FBQztRQUU5RCxPQUFPLGdCQUFnQixDQUFDLE1BQU07Ozs7O1FBQzVCLFVBQUMsWUFBWSxFQUFFLFFBQVEsSUFBSyxPQUFBLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBdEIsQ0FBc0IsR0FDbEQsUUFBUSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUN4RCxDQUFDO0lBQ0osQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQXZCRCxJQXVCQzs7O0lBRUssZUFBZSxHQUFHLElBQUksV0FBVyxFQUFFOzs7Ozs7Ozs7O0FBRXpDLE1BQU0sVUFBVSxnQkFBZ0IsQ0FDOUIsV0FBd0IsRUFDeEIsYUFBMEIsRUFDMUIsU0FBaUIsRUFDakIsWUFBc0IsRUFDdEIsT0FBaUIsRUFDakIsUUFBb0I7O1FBR2QsSUFBSSxHQUFHLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FDM0MsV0FBVyxFQUNYLGFBQWEsRUFDYixTQUFTLEVBQ1QsWUFBWSxFQUNaLE9BQU8sQ0FDUjtJQUVELFlBQVksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDL0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGNvcHlyaWdodCBWYWxvciBTb2Z0d2FyZVxuICogQGNvcHlyaWdodCBGZWRlcmljbyBaaXZvbG8gYW5kIGNvbnRyaWJ1dG9yc1xuICovXG5pbXBvcnQgeyBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgZ2V0UmVmZXJlbmNlT2Zmc2V0cywgc2V0QWxsU3R5bGVzIH0gZnJvbSAnLi91dGlscy9pbmRleCc7XG5cbmltcG9ydCB7IGFycm93LCBmbGlwLCBwcmV2ZW50T3ZlcmZsb3csIHNoaWZ0LCBpbml0RGF0YSB9IGZyb20gJy4vbW9kaWZpZXJzL2luZGV4JztcbmltcG9ydCB7IERhdGEsIE9mZnNldHMsIE9wdGlvbnMgfSBmcm9tICcuL21vZGVscy9pbmRleCc7XG5cblxuZXhwb3J0IGNsYXNzIFBvc2l0aW9uaW5nIHtcbiAgcG9zaXRpb24oaG9zdEVsZW1lbnQ6IEhUTUxFbGVtZW50LCB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCk6IE9mZnNldHMge1xuICAgIHJldHVybiB0aGlzLm9mZnNldChob3N0RWxlbWVudCwgdGFyZ2V0RWxlbWVudCk7XG4gIH1cblxuICBvZmZzZXQoaG9zdEVsZW1lbnQ6IEhUTUxFbGVtZW50LCB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCk6IE9mZnNldHMge1xuICAgIHJldHVybiBnZXRSZWZlcmVuY2VPZmZzZXRzKHRhcmdldEVsZW1lbnQsIGhvc3RFbGVtZW50KTtcbiAgfVxuXG4gIHBvc2l0aW9uRWxlbWVudHMoXG4gICAgaG9zdEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIHBvc2l0aW9uOiBzdHJpbmcsXG4gICAgX2FwcGVuZFRvQm9keT86IGJvb2xlYW4sXG4gICAgb3B0aW9ucz86IGFueVxuICApOiBEYXRhIHtcbiAgICBjb25zdCBjaGFpbk9mTW9kaWZpZXJzID0gW2ZsaXAsIHNoaWZ0LCBwcmV2ZW50T3ZlcmZsb3csIGFycm93XTtcblxuICAgIHJldHVybiBjaGFpbk9mTW9kaWZpZXJzLnJlZHVjZShcbiAgICAgIChtb2RpZmllZERhdGEsIG1vZGlmaWVyKSA9PiBtb2RpZmllcihtb2RpZmllZERhdGEpLFxuICAgICAgaW5pdERhdGEodGFyZ2V0RWxlbWVudCwgaG9zdEVsZW1lbnQsIHBvc2l0aW9uLCBvcHRpb25zKVxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgcG9zaXRpb25TZXJ2aWNlID0gbmV3IFBvc2l0aW9uaW5nKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3NpdGlvbkVsZW1lbnRzKFxuICBob3N0RWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBwbGFjZW1lbnQ6IHN0cmluZyxcbiAgYXBwZW5kVG9Cb2R5PzogYm9vbGVhbixcbiAgb3B0aW9ucz86IE9wdGlvbnMsXG4gIHJlbmRlcmVyPzogUmVuZGVyZXIyXG4pOiB2b2lkIHtcblxuICBjb25zdCBkYXRhID0gcG9zaXRpb25TZXJ2aWNlLnBvc2l0aW9uRWxlbWVudHMoXG4gICAgaG9zdEVsZW1lbnQsXG4gICAgdGFyZ2V0RWxlbWVudCxcbiAgICBwbGFjZW1lbnQsXG4gICAgYXBwZW5kVG9Cb2R5LFxuICAgIG9wdGlvbnNcbiAgKTtcblxuICBzZXRBbGxTdHlsZXMoZGF0YSwgcmVuZGVyZXIpO1xufVxuIl19