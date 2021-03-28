/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { getClientRect, getOuterSizes, getStyleComputedProperty } from '../utils/index';
/**
 * @param {?} data
 * @return {?}
 */
export function arrow(data) {
    var _a;
    /** @type {?} */
    var targetOffsets = data.offsets.target;
    // if arrowElement is a string, suppose it's a CSS selector
    /** @type {?} */
    var arrowElement = data.instance.target.querySelector('.arrow');
    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
        return data;
    }
    /** @type {?} */
    var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
    /** @type {?} */
    var len = isVertical ? 'height' : 'width';
    /** @type {?} */
    var sideCapitalized = isVertical ? 'Top' : 'Left';
    /** @type {?} */
    var side = sideCapitalized.toLowerCase();
    /** @type {?} */
    var altSide = isVertical ? 'left' : 'top';
    /** @type {?} */
    var opSide = isVertical ? 'bottom' : 'right';
    /** @type {?} */
    var arrowElementSize = getOuterSizes(arrowElement)[len];
    // top/left side
    if (data.offsets.host[opSide] - arrowElementSize < ((/** @type {?} */ (targetOffsets)))[side]) {
        ((/** @type {?} */ (targetOffsets)))[side] -=
            ((/** @type {?} */ (targetOffsets)))[side] - (data.offsets.host[opSide] - arrowElementSize);
    }
    // bottom/right side
    if (Number(((/** @type {?} */ (data))).offsets.host[side]) + Number(arrowElementSize) > ((/** @type {?} */ (targetOffsets)))[opSide]) {
        ((/** @type {?} */ (targetOffsets)))[side] +=
            Number(((/** @type {?} */ (data))).offsets.host[side]) + Number(arrowElementSize) - Number(((/** @type {?} */ (targetOffsets)))[opSide]);
    }
    targetOffsets = getClientRect(targetOffsets);
    // compute center of the target
    /** @type {?} */
    var center = Number(((/** @type {?} */ (data))).offsets.host[side]) + Number(data.offsets.host[len] / 2 - arrowElementSize / 2);
    // Compute the sideValue using the updated target offsets
    // take target margin in account because we don't have this info available
    /** @type {?} */
    var css = getStyleComputedProperty(data.instance.target);
    /** @type {?} */
    var targetMarginSide = parseFloat(css["margin" + sideCapitalized]);
    /** @type {?} */
    var targetBorderSide = parseFloat(css["border" + sideCapitalized + "Width"]);
    /** @type {?} */
    var sideValue = center - ((/** @type {?} */ (targetOffsets)))[side] - targetMarginSide - targetBorderSide;
    // prevent arrowElement from being placed not contiguously to its target
    sideValue = Math.max(Math.min(targetOffsets[len] - arrowElementSize, sideValue), 0);
    data.offsets.arrow = (_a = {},
        _a[side] = Math.round(sideValue),
        _a[altSide] = '' // make sure to unset any eventual altSide value from the DOM node
    ,
        _a);
    data.instance.arrow = arrowElement;
    return data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyb3cuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS91dGlscy9wb3NpdGlvbmluZy9tb2RpZmllcnMvYXJyb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBR3hGLE1BQU0sVUFBVSxLQUFLLENBQUMsSUFBVTs7O1FBQzFCLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU07OztRQUVqQyxZQUFZLEdBQXVCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFFckYsdURBQXVEO0lBQ3ZELElBQUksQ0FBQyxZQUFZLEVBQUU7UUFDakIsT0FBTyxJQUFJLENBQUM7S0FDYjs7UUFFSyxVQUFVLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7O1FBRTdELEdBQUcsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTzs7UUFDckMsZUFBZSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNOztRQUM3QyxJQUFJLEdBQUcsZUFBZSxDQUFDLFdBQVcsRUFBRTs7UUFDcEMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLOztRQUNyQyxNQUFNLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU87O1FBQ3hDLGdCQUFnQixHQUFHLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFFekQsZ0JBQWdCO0lBQ2hCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsZ0JBQWdCLEdBQUcsQ0FBQyxtQkFBQSxhQUFhLEVBQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQy9FLENBQUMsbUJBQUEsYUFBYSxFQUFPLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDMUIsQ0FBQyxtQkFBQSxhQUFhLEVBQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQztLQUNqRjtJQUNELG9CQUFvQjtJQUNwQixJQUFJLE1BQU0sQ0FBQyxDQUFDLG1CQUFBLElBQUksRUFBTyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsbUJBQUEsYUFBYSxFQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUN4RyxDQUFDLG1CQUFBLGFBQWEsRUFBTyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzFCLE1BQU0sQ0FBQyxDQUFDLG1CQUFBLElBQUksRUFBTyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLG1CQUFBLGFBQWEsRUFBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztLQUNoSDtJQUNELGFBQWEsR0FBRyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7OztRQUd2QyxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsbUJBQUEsSUFBSSxFQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7Ozs7UUFJN0csR0FBRyxHQUFHLHdCQUF3QixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDOztRQUVwRCxnQkFBZ0IsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLFdBQVMsZUFBaUIsQ0FBQyxDQUFDOztRQUM5RCxnQkFBZ0IsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLFdBQVMsZUFBZSxVQUFPLENBQUMsQ0FBQzs7UUFDckUsU0FBUyxHQUNYLE1BQU0sR0FBRyxDQUFDLG1CQUFBLGFBQWEsRUFBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsZ0JBQWdCLEdBQUcsZ0JBQWdCO0lBRTdFLHdFQUF3RTtJQUN4RSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxnQkFBZ0IsRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUVwRixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUs7UUFDaEIsR0FBQyxJQUFJLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDN0IsR0FBQyxPQUFPLElBQUcsRUFBRSxDQUFDLGtFQUFrRTs7V0FDakYsQ0FBQztJQUVGLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQztJQUVuQyxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRDbGllbnRSZWN0LCBnZXRPdXRlclNpemVzLCBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkgfSBmcm9tICcuLi91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBEYXRhIH0gZnJvbSAnLi4vbW9kZWxzL2luZGV4JztcblxuZXhwb3J0IGZ1bmN0aW9uIGFycm93KGRhdGE6IERhdGEpIHtcbiAgbGV0IHRhcmdldE9mZnNldHMgPSBkYXRhLm9mZnNldHMudGFyZ2V0O1xuICAvLyBpZiBhcnJvd0VsZW1lbnQgaXMgYSBzdHJpbmcsIHN1cHBvc2UgaXQncyBhIENTUyBzZWxlY3RvclxuICBjb25zdCBhcnJvd0VsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRhdGEuaW5zdGFuY2UudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5hcnJvdycpO1xuXG4gIC8vIGlmIGFycm93RWxlbWVudCBpcyBub3QgZm91bmQsIGRvbid0IHJ1biB0aGUgbW9kaWZpZXJcbiAgaWYgKCFhcnJvd0VsZW1lbnQpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGNvbnN0IGlzVmVydGljYWwgPSBbJ2xlZnQnLCAncmlnaHQnXS5pbmRleE9mKGRhdGEucGxhY2VtZW50KSAhPT0gLTE7XG5cbiAgY29uc3QgbGVuID0gaXNWZXJ0aWNhbCA/ICdoZWlnaHQnIDogJ3dpZHRoJztcbiAgY29uc3Qgc2lkZUNhcGl0YWxpemVkID0gaXNWZXJ0aWNhbCA/ICdUb3AnIDogJ0xlZnQnO1xuICBjb25zdCBzaWRlID0gc2lkZUNhcGl0YWxpemVkLnRvTG93ZXJDYXNlKCk7XG4gIGNvbnN0IGFsdFNpZGUgPSBpc1ZlcnRpY2FsID8gJ2xlZnQnIDogJ3RvcCc7XG4gIGNvbnN0IG9wU2lkZSA9IGlzVmVydGljYWwgPyAnYm90dG9tJyA6ICdyaWdodCc7XG4gIGNvbnN0IGFycm93RWxlbWVudFNpemUgPSBnZXRPdXRlclNpemVzKGFycm93RWxlbWVudClbbGVuXTtcblxuICAvLyB0b3AvbGVmdCBzaWRlXG4gIGlmIChkYXRhLm9mZnNldHMuaG9zdFtvcFNpZGVdIC0gYXJyb3dFbGVtZW50U2l6ZSA8ICh0YXJnZXRPZmZzZXRzIGFzIGFueSlbc2lkZV0pIHtcbiAgICAodGFyZ2V0T2Zmc2V0cyBhcyBhbnkpW3NpZGVdIC09XG4gICAgICAodGFyZ2V0T2Zmc2V0cyBhcyBhbnkpW3NpZGVdIC0gKGRhdGEub2Zmc2V0cy5ob3N0W29wU2lkZV0gLSBhcnJvd0VsZW1lbnRTaXplKTtcbiAgfVxuICAvLyBib3R0b20vcmlnaHQgc2lkZVxuICBpZiAoTnVtYmVyKChkYXRhIGFzIGFueSkub2Zmc2V0cy5ob3N0W3NpZGVdKSArIE51bWJlcihhcnJvd0VsZW1lbnRTaXplKSA+ICh0YXJnZXRPZmZzZXRzIGFzIGFueSlbb3BTaWRlXSkge1xuICAgICh0YXJnZXRPZmZzZXRzIGFzIGFueSlbc2lkZV0gKz1cbiAgICAgIE51bWJlcigoZGF0YSBhcyBhbnkpLm9mZnNldHMuaG9zdFtzaWRlXSkgKyBOdW1iZXIoYXJyb3dFbGVtZW50U2l6ZSkgLSBOdW1iZXIoKHRhcmdldE9mZnNldHMgYXMgYW55KVtvcFNpZGVdKTtcbiAgfVxuICB0YXJnZXRPZmZzZXRzID0gZ2V0Q2xpZW50UmVjdCh0YXJnZXRPZmZzZXRzKTtcblxuICAvLyBjb21wdXRlIGNlbnRlciBvZiB0aGUgdGFyZ2V0XG4gIGNvbnN0IGNlbnRlciA9IE51bWJlcigoZGF0YSBhcyBhbnkpLm9mZnNldHMuaG9zdFtzaWRlXSkgKyBOdW1iZXIoZGF0YS5vZmZzZXRzLmhvc3RbbGVuXSAvIDIgLSBhcnJvd0VsZW1lbnRTaXplIC8gMik7XG5cbiAgLy8gQ29tcHV0ZSB0aGUgc2lkZVZhbHVlIHVzaW5nIHRoZSB1cGRhdGVkIHRhcmdldCBvZmZzZXRzXG4gIC8vIHRha2UgdGFyZ2V0IG1hcmdpbiBpbiBhY2NvdW50IGJlY2F1c2Ugd2UgZG9uJ3QgaGF2ZSB0aGlzIGluZm8gYXZhaWxhYmxlXG4gIGNvbnN0IGNzcyA9IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShkYXRhLmluc3RhbmNlLnRhcmdldCk7XG5cbiAgY29uc3QgdGFyZ2V0TWFyZ2luU2lkZSA9IHBhcnNlRmxvYXQoY3NzW2BtYXJnaW4ke3NpZGVDYXBpdGFsaXplZH1gXSk7XG4gIGNvbnN0IHRhcmdldEJvcmRlclNpZGUgPSBwYXJzZUZsb2F0KGNzc1tgYm9yZGVyJHtzaWRlQ2FwaXRhbGl6ZWR9V2lkdGhgXSk7XG4gIGxldCBzaWRlVmFsdWUgPVxuICAgIGNlbnRlciAtICh0YXJnZXRPZmZzZXRzIGFzIGFueSlbc2lkZV0gLSB0YXJnZXRNYXJnaW5TaWRlIC0gdGFyZ2V0Qm9yZGVyU2lkZTtcblxuICAvLyBwcmV2ZW50IGFycm93RWxlbWVudCBmcm9tIGJlaW5nIHBsYWNlZCBub3QgY29udGlndW91c2x5IHRvIGl0cyB0YXJnZXRcbiAgc2lkZVZhbHVlID0gTWF0aC5tYXgoTWF0aC5taW4odGFyZ2V0T2Zmc2V0c1tsZW5dIC0gYXJyb3dFbGVtZW50U2l6ZSwgc2lkZVZhbHVlKSwgMCk7XG5cbiAgZGF0YS5vZmZzZXRzLmFycm93ID0ge1xuICAgIFtzaWRlXTogTWF0aC5yb3VuZChzaWRlVmFsdWUpLFxuICAgIFthbHRTaWRlXTogJycgLy8gbWFrZSBzdXJlIHRvIHVuc2V0IGFueSBldmVudHVhbCBhbHRTaWRlIHZhbHVlIGZyb20gdGhlIERPTSBub2RlXG4gIH07XG5cbiAgZGF0YS5pbnN0YW5jZS5hcnJvdyA9IGFycm93RWxlbWVudDtcblxuICByZXR1cm4gZGF0YTtcbn1cbiJdfQ==