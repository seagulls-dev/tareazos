/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { getClientRect } from './getClientRect';
import { getOffsetRectRelativeToArbitraryNode } from './getOffsetRectRelativeToArbitraryNode';
import { getScroll } from './getScroll';
/**
 * @param {?} element
 * @param {?=} excludeScroll
 * @return {?}
 */
export function getViewportOffsetRectRelativeToArtbitraryNode(element, excludeScroll = false) {
    /** @type {?} */
    const html = element.ownerDocument.documentElement;
    /** @type {?} */
    const relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
    /** @type {?} */
    const width = Math.max(html.clientWidth, window.innerWidth || 0);
    /** @type {?} */
    const height = Math.max(html.clientHeight, window.innerHeight || 0);
    /** @type {?} */
    const scrollTop = !excludeScroll ? getScroll(html) : 0;
    /** @type {?} */
    const scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
    /** @type {?} */
    const offset = {
        top: scrollTop - Number(relativeOffset.top) + Number(relativeOffset.marginTop),
        left: scrollLeft - Number(relativeOffset.left) + Number(relativeOffset.marginLeft),
        width,
        height
    };
    return getClientRect(offset);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0Vmlld3BvcnRPZmZzZXRSZWN0UmVsYXRpdmVUb0FydGJpdHJhcnlOb2RlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvdXRpbHMvcG9zaXRpb25pbmcvdXRpbHMvZ2V0Vmlld3BvcnRPZmZzZXRSZWN0UmVsYXRpdmVUb0FydGJpdHJhcnlOb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDOUYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7Ozs7O0FBR3hDLE1BQU0sVUFBVSw2Q0FBNkMsQ0FBQyxPQUFZLEVBQUUsYUFBYSxHQUFHLEtBQUs7O1VBQ3pGLElBQUksR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLGVBQWU7O1VBQzVDLGNBQWMsR0FBRyxvQ0FBb0MsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDOztVQUNwRSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDOztVQUMxRCxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDOztVQUU3RCxTQUFTLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7VUFDaEQsVUFBVSxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztVQUV6RCxNQUFNLEdBQUc7UUFDYixHQUFHLEVBQUUsU0FBUyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUM7UUFDOUUsSUFBSSxFQUFFLFVBQVUsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDO1FBQ2xGLEtBQUs7UUFDTCxNQUFNO0tBQ1A7SUFFRCxPQUFPLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMvQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0Q2xpZW50UmVjdCB9IGZyb20gJy4vZ2V0Q2xpZW50UmVjdCc7XG5pbXBvcnQgeyBnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUgfSBmcm9tICcuL2dldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZSc7XG5pbXBvcnQgeyBnZXRTY3JvbGwgfSBmcm9tICcuL2dldFNjcm9sbCc7XG5pbXBvcnQgeyBPZmZzZXRzIH0gZnJvbSAnLi4vbW9kZWxzL2luZGV4JztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZpZXdwb3J0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcnRiaXRyYXJ5Tm9kZShlbGVtZW50OiBhbnksIGV4Y2x1ZGVTY3JvbGwgPSBmYWxzZSk6IE9mZnNldHMge1xuICBjb25zdCBodG1sID0gZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgY29uc3QgcmVsYXRpdmVPZmZzZXQgPSBnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUoZWxlbWVudCwgaHRtbCk7XG4gIGNvbnN0IHdpZHRoID0gTWF0aC5tYXgoaHRtbC5jbGllbnRXaWR0aCwgd2luZG93LmlubmVyV2lkdGggfHwgMCk7XG4gIGNvbnN0IGhlaWdodCA9IE1hdGgubWF4KGh0bWwuY2xpZW50SGVpZ2h0LCB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMCk7XG5cbiAgY29uc3Qgc2Nyb2xsVG9wID0gIWV4Y2x1ZGVTY3JvbGwgPyBnZXRTY3JvbGwoaHRtbCkgOiAwO1xuICBjb25zdCBzY3JvbGxMZWZ0ID0gIWV4Y2x1ZGVTY3JvbGwgPyBnZXRTY3JvbGwoaHRtbCwgJ2xlZnQnKSA6IDA7XG5cbiAgY29uc3Qgb2Zmc2V0ID0ge1xuICAgIHRvcDogc2Nyb2xsVG9wIC0gTnVtYmVyKHJlbGF0aXZlT2Zmc2V0LnRvcCkgKyBOdW1iZXIocmVsYXRpdmVPZmZzZXQubWFyZ2luVG9wKSxcbiAgICBsZWZ0OiBzY3JvbGxMZWZ0IC0gTnVtYmVyKHJlbGF0aXZlT2Zmc2V0LmxlZnQpICsgTnVtYmVyKHJlbGF0aXZlT2Zmc2V0Lm1hcmdpbkxlZnQpLFxuICAgIHdpZHRoLFxuICAgIGhlaWdodFxuICB9O1xuXG4gIHJldHVybiBnZXRDbGllbnRSZWN0KG9mZnNldCk7XG59XG4iXX0=