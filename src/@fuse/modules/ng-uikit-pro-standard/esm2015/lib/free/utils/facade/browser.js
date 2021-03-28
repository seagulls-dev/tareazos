/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*tslint:disable */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * JS version of browser APIs. This library can only run in the browser.
 * @type {?}
 */
var win = typeof window !== 'undefined' && window || (/** @type {?} */ ({}));
export { win as window };
/** @type {?} */
export var document = win.document;
/** @type {?} */
export var location = win.location;
/** @type {?} */
export var gc = win['gc'] ? (/**
 * @return {?}
 */
() => win['gc']()) : (/**
 * @return {?}
 */
() => null);
/** @type {?} */
export var performance = win['performance'] ? win['performance'] : null;
/** @type {?} */
export const Event = win['Event'];
/** @type {?} */
export const MouseEvent = win['MouseEvent'];
/** @type {?} */
export const KeyboardEvent = win['KeyboardEvent'];
/** @type {?} */
export const EventTarget = win['EventTarget'];
/** @type {?} */
export const History = win['History'];
/** @type {?} */
export const Location = win['Location'];
/** @type {?} */
export const EventListener = win['EventListener'];
/** @type {?} */
export const navigator = win['navigator'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3V0aWxzL2ZhY2FkZS9icm93c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7SUFZSSxHQUFHLEdBQUcsT0FBTyxNQUFNLEtBQUssV0FBVyxJQUFJLE1BQU0sSUFBSSxtQkFBSyxFQUFFLEVBQUE7QUFFNUQsT0FBTyxFQUFDLEdBQUcsSUFBSSxNQUFNLEVBQUMsQ0FBQzs7QUFDdkIsTUFBTSxLQUFLLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUTs7QUFDbEMsTUFBTSxLQUFLLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUTs7QUFDbEMsTUFBTSxLQUFLLEVBQUUsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzs7O0FBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsQ0FBQzs7O0FBQUMsR0FBUSxFQUFFLENBQUMsSUFBSSxDQUFBOztBQUMvRCxNQUFNLEtBQUssV0FBVyxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJOztBQUN2RSxNQUFNLE9BQU8sS0FBSyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUM7O0FBQ2pDLE1BQU0sT0FBTyxVQUFVLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQzs7QUFDM0MsTUFBTSxPQUFPLGFBQWEsR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDOztBQUNqRCxNQUFNLE9BQU8sV0FBVyxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUM7O0FBQzdDLE1BQU0sT0FBTyxPQUFPLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQzs7QUFDckMsTUFBTSxPQUFPLFFBQVEsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDOztBQUN2QyxNQUFNLE9BQU8sYUFBYSxHQUFHLEdBQUcsQ0FBQyxlQUFlLENBQUM7O0FBQ2pELE1BQU0sT0FBTyxTQUFTLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qdHNsaW50OmRpc2FibGUgKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBKUyB2ZXJzaW9uIG9mIGJyb3dzZXIgQVBJcy4gVGhpcyBsaWJyYXJ5IGNhbiBvbmx5IHJ1biBpbiB0aGUgYnJvd3Nlci5cbiAqL1xudmFyIHdpbiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdyB8fCA8YW55Pnt9O1xuXG5leHBvcnQge3dpbiBhcyB3aW5kb3d9O1xuZXhwb3J0IHZhciBkb2N1bWVudCA9IHdpbi5kb2N1bWVudDtcbmV4cG9ydCB2YXIgbG9jYXRpb24gPSB3aW4ubG9jYXRpb247XG5leHBvcnQgdmFyIGdjID0gd2luWydnYyddID8gKCkgPT4gd2luWydnYyddKCkgOiAoKTogYW55ID0+IG51bGw7XG5leHBvcnQgdmFyIHBlcmZvcm1hbmNlID0gd2luWydwZXJmb3JtYW5jZSddID8gd2luWydwZXJmb3JtYW5jZSddIDogbnVsbDtcbmV4cG9ydCBjb25zdCBFdmVudCA9IHdpblsnRXZlbnQnXTtcbmV4cG9ydCBjb25zdCBNb3VzZUV2ZW50ID0gd2luWydNb3VzZUV2ZW50J107XG5leHBvcnQgY29uc3QgS2V5Ym9hcmRFdmVudCA9IHdpblsnS2V5Ym9hcmRFdmVudCddO1xuZXhwb3J0IGNvbnN0IEV2ZW50VGFyZ2V0ID0gd2luWydFdmVudFRhcmdldCddO1xuZXhwb3J0IGNvbnN0IEhpc3RvcnkgPSB3aW5bJ0hpc3RvcnknXTtcbmV4cG9ydCBjb25zdCBMb2NhdGlvbiA9IHdpblsnTG9jYXRpb24nXTtcbmV4cG9ydCBjb25zdCBFdmVudExpc3RlbmVyID0gd2luWydFdmVudExpc3RlbmVyJ107XG5leHBvcnQgY29uc3QgbmF2aWdhdG9yID0gd2luWyduYXZpZ2F0b3InXTtcbiJdfQ==