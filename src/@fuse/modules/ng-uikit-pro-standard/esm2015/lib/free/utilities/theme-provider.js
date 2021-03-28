/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { window } from './facade/browser';
/** @type {?} */
let guessedVersion;
/**
 * @return {?}
 */
function _guessBsVersion() {
    if (typeof document === 'undefined') {
        return null;
    }
    /** @type {?} */
    const spanEl = document.createElement('span');
    spanEl.innerText = 'test bs version';
    document.body.appendChild(spanEl);
    spanEl.classList.add('d-none');
    /** @type {?} */
    const rect = spanEl.getBoundingClientRect();
    document.body.removeChild(spanEl);
    if (!rect) {
        return 'bs3';
    }
    return rect.top === 0 ? 'bs4' : 'bs3';
}
/**
 * @param {?} theme
 * @return {?}
 */
export function setTheme(theme) {
    guessedVersion = theme;
}
// todo: in ngx-bootstrap, bs4 will became a default one
/**
 * @return {?}
 */
export function isBs3() {
    if (typeof window === 'undefined') {
        return true;
    }
    if (typeof window.__theme === 'undefined') {
        if (guessedVersion) {
            return guessedVersion === 'bs3';
        }
        guessedVersion = _guessBsVersion();
        return guessedVersion === 'bs3';
    }
    return window.__theme !== 'bs4';
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtcHJvdmlkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS91dGlsaXRpZXMvdGhlbWUtcHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7SUFFdEMsY0FBb0M7Ozs7QUFFeEMsU0FBUyxlQUFlO0lBQ3RCLElBQUksT0FBTyxRQUFRLEtBQUssV0FBVyxFQUFFO1FBQ25DLE9BQU8sSUFBSSxDQUFDO0tBQ2I7O1VBQ0ssTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO0lBQzdDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUM7SUFDckMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7O1VBQ3pCLElBQUksR0FBRyxNQUFNLENBQUMscUJBQXFCLEVBQUU7SUFDM0MsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsSUFBSSxDQUFDLElBQUksRUFBRTtRQUNULE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxPQUFPLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUN4QyxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxRQUFRLENBQUMsS0FBb0I7SUFDM0MsY0FBYyxHQUFHLEtBQUssQ0FBQztBQUN6QixDQUFDOzs7OztBQUdELE1BQU0sVUFBVSxLQUFLO0lBQ25CLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO1FBQ2pDLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFFRCxJQUFJLE9BQU8sTUFBTSxDQUFDLE9BQU8sS0FBSyxXQUFXLEVBQUU7UUFDekMsSUFBSSxjQUFjLEVBQUU7WUFDbEIsT0FBTyxjQUFjLEtBQUssS0FBSyxDQUFDO1NBQ2pDO1FBQ0QsY0FBYyxHQUFHLGVBQWUsRUFBRSxDQUFDO1FBRW5DLE9BQU8sY0FBYyxLQUFLLEtBQUssQ0FBQztLQUNqQztJQUVELE9BQU8sTUFBTSxDQUFDLE9BQU8sS0FBSyxLQUFLLENBQUM7QUFDbEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpbmRvdyB9IGZyb20gJy4vZmFjYWRlL2Jyb3dzZXInO1xuXG5sZXQgZ3Vlc3NlZFZlcnNpb246ICdiczMnIHwgJ2JzNCcgfCBudWxsO1xuXG5mdW5jdGlvbiBfZ3Vlc3NCc1ZlcnNpb24oKTogJ2JzMycgfCAnYnM0JyB8IG51bGwge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IHNwYW5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgc3BhbkVsLmlubmVyVGV4dCA9ICd0ZXN0IGJzIHZlcnNpb24nO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNwYW5FbCk7XG4gIHNwYW5FbC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgY29uc3QgcmVjdCA9IHNwYW5FbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzcGFuRWwpO1xuICBpZiAoIXJlY3QpIHtcbiAgICByZXR1cm4gJ2JzMyc7XG4gIH1cblxuICByZXR1cm4gcmVjdC50b3AgPT09IDAgPyAnYnM0JyA6ICdiczMnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VGhlbWUodGhlbWU6ICdiczMnIHwgJ2JzNCcpOiB2b2lkIHtcbiAgZ3Vlc3NlZFZlcnNpb24gPSB0aGVtZTtcbn1cblxuLy8gdG9kbzogaW4gbmd4LWJvb3RzdHJhcCwgYnM0IHdpbGwgYmVjYW1lIGEgZGVmYXVsdCBvbmVcbmV4cG9ydCBmdW5jdGlvbiBpc0JzMygpOiBib29sZWFuIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHdpbmRvdy5fX3RoZW1lID09PSAndW5kZWZpbmVkJykge1xuICAgIGlmIChndWVzc2VkVmVyc2lvbikge1xuICAgICAgcmV0dXJuIGd1ZXNzZWRWZXJzaW9uID09PSAnYnMzJztcbiAgICB9XG4gICAgZ3Vlc3NlZFZlcnNpb24gPSBfZ3Vlc3NCc1ZlcnNpb24oKTtcblxuICAgIHJldHVybiBndWVzc2VkVmVyc2lvbiA9PT0gJ2JzMyc7XG4gIH1cblxuICByZXR1cm4gd2luZG93Ll9fdGhlbWUgIT09ICdiczQnO1xufVxuIl19