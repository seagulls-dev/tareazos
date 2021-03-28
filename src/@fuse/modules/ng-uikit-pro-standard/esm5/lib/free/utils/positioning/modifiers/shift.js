/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @param {?} data
 * @return {?}
 */
export function shift(data) {
    var _a, _b;
    /** @type {?} */
    var placement = data.placement;
    /** @type {?} */
    var basePlacement = placement.split(' ')[0];
    /** @type {?} */
    var shiftvariation = placement.split(' ')[1];
    if (shiftvariation) {
        var _c = data.offsets, host = _c.host, target = _c.target;
        /** @type {?} */
        var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
        /** @type {?} */
        var side = isVertical ? 'left' : 'top';
        /** @type {?} */
        var measurement = isVertical ? 'width' : 'height';
        /** @type {?} */
        var shiftOffsets = {
            left: (_a = {}, _a[side] = host[side], _a),
            right: (_b = {},
                _b[side] = host[side] + host[measurement] - host[measurement],
                _b)
        };
        data.offsets.target = tslib_1.__assign({}, target, ((/** @type {?} */ (shiftOffsets)))[shiftvariation]);
    }
    return data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpZnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS91dGlscy9wb3NpdGlvbmluZy9tb2RpZmllcnMvc2hpZnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUEsTUFBTSxVQUFVLEtBQUssQ0FBQyxJQUFVOzs7UUFDeEIsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTOztRQUMxQixhQUFhLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7O1FBQ3ZDLGNBQWMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUU5QyxJQUFJLGNBQWMsRUFBRTtRQUNaLElBQUEsaUJBQStCLEVBQTdCLGNBQUksRUFBRSxrQkFBdUI7O1lBQy9CLFVBQVUsR0FBRyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDOztZQUM1RCxJQUFJLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUs7O1lBQ2xDLFdBQVcsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUTs7WUFFN0MsWUFBWSxHQUFHO1lBQ25CLElBQUksWUFBSSxHQUFDLElBQUksSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUU7WUFDNUIsS0FBSztnQkFDSCxHQUFDLElBQUksSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7bUJBQzNEO1NBQ0Y7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sd0JBQVEsTUFBTSxFQUFLLENBQUMsbUJBQUEsWUFBWSxFQUFPLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBRSxDQUFDO0tBQy9FO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YSB9IGZyb20gJy4uL21vZGVscy9pbmRleCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGlmdChkYXRhOiBEYXRhKTogRGF0YSB7XG4gIGNvbnN0IHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50O1xuICBjb25zdCBiYXNlUGxhY2VtZW50ID0gcGxhY2VtZW50LnNwbGl0KCcgJylbMF07XG4gIGNvbnN0IHNoaWZ0dmFyaWF0aW9uID0gcGxhY2VtZW50LnNwbGl0KCcgJylbMV07XG5cbiAgaWYgKHNoaWZ0dmFyaWF0aW9uKSB7XG4gICAgY29uc3QgeyBob3N0LCB0YXJnZXQgfSA9IGRhdGEub2Zmc2V0cztcbiAgICBjb25zdCBpc1ZlcnRpY2FsID0gWydib3R0b20nLCAndG9wJ10uaW5kZXhPZihiYXNlUGxhY2VtZW50KSAhPT0gLTE7XG4gICAgY29uc3Qgc2lkZSA9IGlzVmVydGljYWwgPyAnbGVmdCcgOiAndG9wJztcbiAgICBjb25zdCBtZWFzdXJlbWVudCA9IGlzVmVydGljYWwgPyAnd2lkdGgnIDogJ2hlaWdodCc7XG5cbiAgICBjb25zdCBzaGlmdE9mZnNldHMgPSB7XG4gICAgICBsZWZ0OiB7IFtzaWRlXTogaG9zdFtzaWRlXSB9LFxuICAgICAgcmlnaHQ6IHtcbiAgICAgICAgW3NpZGVdOiBob3N0W3NpZGVdICsgaG9zdFttZWFzdXJlbWVudF0gLSBob3N0W21lYXN1cmVtZW50XVxuICAgICAgfVxuICAgIH07XG5cbiAgICBkYXRhLm9mZnNldHMudGFyZ2V0ID0geyAuLi50YXJnZXQsIC4uLihzaGlmdE9mZnNldHMgYXMgYW55KVtzaGlmdHZhcmlhdGlvbl0gfTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuIl19