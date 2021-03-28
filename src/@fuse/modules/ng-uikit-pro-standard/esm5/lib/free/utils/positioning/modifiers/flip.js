/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { computeAutoPlacement, getBoundaries, getClientRect, getOppositeVariation, getTargetOffsets, isModifierEnabled } from '../utils/index';
/**
 * @param {?} data
 * @return {?}
 */
export function flip(data) {
    data.offsets.target = getClientRect(data.offsets.target);
    if (!isModifierEnabled(data.options, 'flip')) {
        data.offsets.target = tslib_1.__assign({}, data.offsets.target, getTargetOffsets(data.instance.target, data.offsets.host, data.placement));
        return data;
    }
    /** @type {?} */
    var boundaries = getBoundaries(data.instance.target, data.instance.host, 0, // padding
    'viewport', false // positionFixed
    );
    /** @type {?} */
    var placement = data.placement.split(' ')[0];
    /** @type {?} */
    var variation = data.placement.split(' ')[1] || '';
    /** @type {?} */
    var offsetsHost = data.offsets.host;
    /** @type {?} */
    var target = data.instance.target;
    /** @type {?} */
    var host = data.instance.host;
    /** @type {?} */
    var adaptivePosition = variation
        ? computeAutoPlacement('auto', offsetsHost, target, host, ['top', 'bottom'])
        : computeAutoPlacement('auto', offsetsHost, target, host);
    /** @type {?} */
    var flipOrder = [placement, adaptivePosition];
    /* tslint:disable-next-line: cyclomatic-complexity */
    flipOrder.forEach((/**
     * @param {?} step
     * @param {?} index
     * @return {?}
     */
    function (step, index) {
        if (placement !== step || flipOrder.length === index + 1) {
            return data;
        }
        placement = data.placement.split(' ')[0];
        // using floor because the host offsets may contain decimals we are not going to consider here
        /** @type {?} */
        var overlapsRef = (placement === 'left' &&
            Math.floor(data.offsets.target.right) > Math.floor(data.offsets.host.left)) ||
            (placement === 'right' &&
                Math.floor(data.offsets.target.left) < Math.floor(data.offsets.host.right)) ||
            (placement === 'top' &&
                Math.floor(data.offsets.target.bottom) > Math.floor(data.offsets.host.top)) ||
            (placement === 'bottom' &&
                Math.floor(data.offsets.target.top) < Math.floor(data.offsets.host.bottom));
        /** @type {?} */
        var overflowsLeft = Math.floor(data.offsets.target.left) < Math.floor(boundaries.left);
        /** @type {?} */
        var overflowsRight = Math.floor(data.offsets.target.right) > Math.floor(boundaries.right);
        /** @type {?} */
        var overflowsTop = Math.floor(data.offsets.target.top) < Math.floor(boundaries.top);
        /** @type {?} */
        var overflowsBottom = Math.floor(data.offsets.target.bottom) > Math.floor(boundaries.bottom);
        /** @type {?} */
        var overflowsBoundaries = (placement === 'left' && overflowsLeft) ||
            (placement === 'right' && overflowsRight) ||
            (placement === 'top' && overflowsTop) ||
            (placement === 'bottom' && overflowsBottom);
        // flip the variation if required
        /** @type {?} */
        var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
        /** @type {?} */
        var flippedVariation = ((isVertical && variation === 'left' && overflowsLeft) ||
            (isVertical && variation === 'right' && overflowsRight) ||
            (!isVertical && variation === 'left' && overflowsTop) ||
            (!isVertical && variation === 'right' && overflowsBottom));
        if (overlapsRef || overflowsBoundaries || flippedVariation) {
            if (overlapsRef || overflowsBoundaries) {
                placement = flipOrder[index + 1];
            }
            if (flippedVariation) {
                variation = getOppositeVariation(variation);
            }
            data.placement = placement + (variation ? " " + variation : '');
            data.offsets.target = tslib_1.__assign({}, data.offsets.target, getTargetOffsets(data.instance.target, data.offsets.host, data.placement));
        }
    }));
    return data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxpcC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3V0aWxzL3Bvc2l0aW9uaW5nL21vZGlmaWVycy9mbGlwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixhQUFhLEVBQ2IsYUFBYSxFQUNiLG9CQUFvQixFQUNwQixnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2xCLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBSXhCLE1BQU0sVUFBVSxJQUFJLENBQUMsSUFBVTtJQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUV6RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsRUFBRTtRQUU1QyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sd0JBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQ25CLGdCQUFnQixDQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQ2pCLElBQUksQ0FBQyxTQUFTLENBQ2YsQ0FDRixDQUFDO1FBRUYsT0FBTyxJQUFJLENBQUM7S0FDYjs7UUFFSyxVQUFVLEdBQUcsYUFBYSxDQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQ2xCLENBQUMsRUFBRSxVQUFVO0lBQ2IsVUFBVSxFQUNWLEtBQUssQ0FBQyxnQkFBZ0I7S0FDdkI7O1FBRUcsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7UUFDeEMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFD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LElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUNqQixJQUFJLENBQUMsU0FBUyxDQUNmLENBQ0YsQ0FBQztTQUNIO0lBQ0gsQ0FBQyxFQUFDLENBQUM7SUFFSCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBjb21wdXRlQXV0b1BsYWNlbWVudCxcbiAgZ2V0Qm91bmRhcmllcyxcbiAgZ2V0Q2xpZW50UmVjdCxcbiAgZ2V0T3Bwb3NpdGVWYXJpYXRpb24sXG4gIGdldFRhcmdldE9mZnNldHMsXG4gIGlzTW9kaWZpZXJFbmFibGVkXG59IGZyb20gJy4uL3V0aWxzL2luZGV4JztcblxuaW1wb3J0IHsgRGF0YSB9IGZyb20gJy4uL21vZGVscy9pbmRleCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGlwKGRhdGE6IERhdGEpOiBEYXRhIHtcbiAgZGF0YS5vZmZzZXRzLnRhcmdldCA9IGdldENsaWVudFJlY3QoZGF0YS5vZmZzZXRzLnRhcmdldCk7XG5cbiAgaWYgKCFpc01vZGlmaWVyRW5hYmxlZChkYXRhLm9wdGlvbnMsICdmbGlwJykpIHtcblxuICAgIGRhdGEub2Zmc2V0cy50YXJnZXQgPSB7XG4gICAgICAuLi5kYXRhLm9mZnNldHMudGFyZ2V0LFxuICAgICAgLi4uZ2V0VGFyZ2V0T2Zmc2V0cyhcbiAgICAgICAgZGF0YS5pbnN0YW5jZS50YXJnZXQsXG4gICAgICAgIGRhdGEub2Zmc2V0cy5ob3N0LFxuICAgICAgICBkYXRhLnBsYWNlbWVudFxuICAgICAgKVxuICAgIH07XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGNvbnN0IGJvdW5kYXJpZXMgPSBnZXRCb3VuZGFyaWVzKFxuICAgIGRhdGEuaW5zdGFuY2UudGFyZ2V0LFxuICAgIGRhdGEuaW5zdGFuY2UuaG9zdCxcbiAgICAwLCAvLyBwYWRkaW5nXG4gICAgJ3ZpZXdwb3J0JyxcbiAgICBmYWxzZSAvLyBwb3NpdGlvbkZpeGVkXG4gICk7XG5cbiAgbGV0IHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50LnNwbGl0KCcgJylbMF07XG4gIGxldCB2YXJpYXRpb24gPSBkYXRhLnBsYWNlbWVudC5zcGxpdCgnICcpWzFdIHx8ICcnO1xuXG4gIGNvbnN0IG9mZnNldHNIb3N0ID0gZGF0YS5vZmZzZXRzLmhvc3Q7XG4gIGNvbnN0IHRhcmdldCA9IGRhdGEuaW5zdGFuY2UudGFyZ2V0O1xuICBjb25zdCBob3N0ID0gZGF0YS5pbnN0YW5jZS5ob3N0O1xuXG4gIGNvbnN0IGFkYXB0aXZlUG9zaXRpb24gPSB2YXJpYXRpb25cbiAgICA/IGNvbXB1dGVBdXRvUGxhY2VtZW50KCdhdXRvJywgb2Zmc2V0c0hvc3QsIHRhcmdldCwgaG9zdCwgWyd0b3AnLCAnYm90dG9tJ10pXG4gICAgOiBjb21wdXRlQXV0b1BsYWNlbWVudCgnYXV0bycsIG9mZnNldHNIb3N0LCB0YXJnZXQsIGhvc3QpO1xuXG4gIGNvbnN0IGZsaXBPcmRlciA9IFtwbGFjZW1lbnQsIGFkYXB0aXZlUG9zaXRpb25dO1xuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY3ljbG9tYXRpYy1jb21wbGV4aXR5ICovXG4gIGZsaXBPcmRlci5mb3JFYWNoKChzdGVwLCBpbmRleCkgPT4ge1xuICAgIGlmIChwbGFjZW1lbnQgIT09IHN0ZXAgfHwgZmxpcE9yZGVyLmxlbmd0aCA9PT0gaW5kZXggKyAxKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudC5zcGxpdCgnICcpWzBdO1xuXG4gICAgLy8gdXNpbmcgZmxvb3IgYmVjYXVzZSB0aGUgaG9zdCBvZmZzZXRzIG1heSBjb250YWluIGRlY2ltYWxzIHdlIGFyZSBub3QgZ29pbmcgdG8gY29uc2lkZXIgaGVyZVxuICAgIGNvbnN0IG92ZXJsYXBzUmVmID1cbiAgICAgIChwbGFjZW1lbnQgPT09ICdsZWZ0JyAmJlxuICAgICAgICBNYXRoLmZsb29yKGRhdGEub2Zmc2V0cy50YXJnZXQucmlnaHQpID4gTWF0aC5mbG9vcihkYXRhLm9mZnNldHMuaG9zdC5sZWZ0KSkgfHxcbiAgICAgIChwbGFjZW1lbnQgPT09ICdyaWdodCcgJiZcbiAgICAgICAgTWF0aC5mbG9vcihkYXRhLm9mZnNldHMudGFyZ2V0LmxlZnQpIDwgTWF0aC5mbG9vcihkYXRhLm9mZnNldHMuaG9zdC5yaWdodCkpIHx8XG4gICAgICAocGxhY2VtZW50ID09PSAndG9wJyAmJlxuICAgICAgICBNYXRoLmZsb29yKGRhdGEub2Zmc2V0cy50YXJnZXQuYm90dG9tKSA+IE1hdGguZmxvb3IoZGF0YS5vZmZzZXRzLmhvc3QudG9wKSkgfHxcbiAgICAgIChwbGFjZW1lbnQgPT09ICdib3R0b20nICYmXG4gICAgICAgIE1hdGguZmxvb3IoZGF0YS5vZmZzZXRzLnRhcmdldC50b3ApIDwgTWF0aC5mbG9vcihkYXRhLm9mZnNldHMuaG9zdC5ib3R0b20pKTtcblxuICAgIGNvbnN0IG92ZXJmbG93c0xlZnQgPSBNYXRoLmZsb29yKGRhdGEub2Zmc2V0cy50YXJnZXQubGVmdCkgPCBNYXRoLmZsb29yKGJvdW5kYXJpZXMubGVmdCk7XG4gICAgY29uc3Qgb3ZlcmZsb3dzUmlnaHQgPSBNYXRoLmZsb29yKGRhdGEub2Zmc2V0cy50YXJnZXQucmlnaHQpID4gTWF0aC5mbG9vcihib3VuZGFyaWVzLnJpZ2h0KTtcbiAgICBjb25zdCBvdmVyZmxvd3NUb3AgPSBNYXRoLmZsb29yKGRhdGEub2Zmc2V0cy50YXJnZXQudG9wKSA8IE1hdGguZmxvb3IoYm91bmRhcmllcy50b3ApO1xuICAgIGNvbnN0IG92ZXJmbG93c0JvdHRvbSA9IE1hdGguZmxvb3IoZGF0YS5vZmZzZXRzLnRhcmdldC5ib3R0b20pID4gTWF0aC5mbG9vcihib3VuZGFyaWVzLmJvdHRvbSk7XG5cbiAgICBjb25zdCBvdmVyZmxvd3NCb3VuZGFyaWVzID1cbiAgICAgIChwbGFjZW1lbnQgPT09ICdsZWZ0JyAmJiBvdmVyZmxvd3NMZWZ0KSB8fFxuICAgICAgKHBsYWNlbWVudCA9PT0gJ3JpZ2h0JyAmJiBvdmVyZmxvd3NSaWdodCkgfHxcbiAgICAgIChwbGFjZW1lbnQgPT09ICd0b3AnICYmIG92ZXJmbG93c1RvcCkgfHxcbiAgICAgIChwbGFjZW1lbnQgPT09ICdib3R0b20nICYmIG92ZXJmbG93c0JvdHRvbSk7XG5cbiAgICAvLyBmbGlwIHRoZSB2YXJpYXRpb24gaWYgcmVxdWlyZWRcbiAgICBjb25zdCBpc1ZlcnRpY2FsID0gWyd0b3AnLCAnYm90dG9tJ10uaW5kZXhPZihwbGFjZW1lbnQpICE9PSAtMTtcbiAgICBjb25zdCBmbGlwcGVkVmFyaWF0aW9uID1cbiAgICAgICgoaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdsZWZ0JyAmJiBvdmVyZmxvd3NMZWZ0KSB8fFxuICAgICAgICAoaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdyaWdodCcgJiYgb3ZlcmZsb3dzUmlnaHQpIHx8XG4gICAgICAgICghaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdsZWZ0JyAmJiBvdmVyZmxvd3NUb3ApIHx8XG4gICAgICAgICghaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdyaWdodCcgJiYgb3ZlcmZsb3dzQm90dG9tKSk7XG5cbiAgICBpZiAob3ZlcmxhcHNSZWYgfHwgb3ZlcmZsb3dzQm91bmRhcmllcyB8fCBmbGlwcGVkVmFyaWF0aW9uKSB7XG4gICAgICBpZiAob3ZlcmxhcHNSZWYgfHwgb3ZlcmZsb3dzQm91bmRhcmllcykge1xuICAgICAgICBwbGFjZW1lbnQgPSBmbGlwT3JkZXJbaW5kZXggKyAxXTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZsaXBwZWRWYXJpYXRpb24pIHtcbiAgICAgICAgdmFyaWF0aW9uID0gZ2V0T3Bwb3NpdGVWYXJpYXRpb24odmFyaWF0aW9uKTtcbiAgICAgIH1cblxuICAgICAgZGF0YS5wbGFjZW1lbnQgPSBwbGFjZW1lbnQgKyAodmFyaWF0aW9uID8gYCAke3ZhcmlhdGlvbn1gIDogJycpO1xuXG4gICAgICBkYXRhLm9mZnNldHMudGFyZ2V0ID0ge1xuICAgICAgICAuLi5kYXRhLm9mZnNldHMudGFyZ2V0LFxuICAgICAgICAuLi5nZXRUYXJnZXRPZmZzZXRzKFxuICAgICAgICAgIGRhdGEuaW5zdGFuY2UudGFyZ2V0LFxuICAgICAgICAgIGRhdGEub2Zmc2V0cy5ob3N0LFxuICAgICAgICAgIGRhdGEucGxhY2VtZW50XG4gICAgICAgIClcbiAgICAgIH07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn1cbiJdfQ==