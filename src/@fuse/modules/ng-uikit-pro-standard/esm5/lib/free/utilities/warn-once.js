/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isDevMode } from '@angular/core';
/** @type {?} */
var _messagesHash = {};
/** @type {?} */
var _hideMsg = typeof console === 'undefined' || !('warn' in console);
/**
 * @param {?} msg
 * @return {?}
 */
export function warnOnce(msg) {
    if (!isDevMode() || _hideMsg || msg in _messagesHash) {
        return;
    }
    _messagesHash[msg] = true;
    /*tslint:disable-next-line*/
    console.warn(msg);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Fybi1vbmNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvdXRpbGl0aWVzL3dhcm4tb25jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUFDcEMsYUFBYSxHQUErQixFQUFFOztJQUM5QyxRQUFRLEdBQUcsT0FBTyxPQUFPLEtBQUssV0FBVyxJQUFJLENBQUMsQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDOzs7OztBQUV2RSxNQUFNLFVBQVUsUUFBUSxDQUFDLEdBQVc7SUFDbEMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLFFBQVEsSUFBSSxHQUFHLElBQUksYUFBYSxFQUFFO1FBQ3BELE9BQU87S0FDUjtJQUVELGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDMUIsNEJBQTRCO0lBQzVCLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDcEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzRGV2TW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuY29uc3QgX21lc3NhZ2VzSGFzaDogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcbmNvbnN0IF9oaWRlTXNnID0gdHlwZW9mIGNvbnNvbGUgPT09ICd1bmRlZmluZWQnIHx8ICEoJ3dhcm4nIGluIGNvbnNvbGUpO1xuXG5leHBvcnQgZnVuY3Rpb24gd2Fybk9uY2UobXNnOiBzdHJpbmcpOiB2b2lkIHtcbiAgaWYgKCFpc0Rldk1vZGUoKSB8fCBfaGlkZU1zZyB8fCBtc2cgaW4gX21lc3NhZ2VzSGFzaCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIF9tZXNzYWdlc0hhc2hbbXNnXSA9IHRydWU7XG4gIC8qdHNsaW50OmRpc2FibGUtbmV4dC1saW5lKi9cbiAgY29uc29sZS53YXJuKG1zZyk7XG59XG4iXX0=