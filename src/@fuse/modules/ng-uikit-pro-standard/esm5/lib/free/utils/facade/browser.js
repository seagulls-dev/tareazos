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
function () { return win['gc'](); }) : (/**
 * @return {?}
 */
function () { return null; });
/** @type {?} */
export var performance = win['performance'] ? win['performance'] : null;
/** @type {?} */
export var Event = win['Event'];
/** @type {?} */
export var MouseEvent = win['MouseEvent'];
/** @type {?} */
export var KeyboardEvent = win['KeyboardEvent'];
/** @type {?} */
export var EventTarget = win['EventTarget'];
/** @type {?} */
export var History = win['History'];
/** @type {?} */
export var Location = win['Location'];
/** @type {?} */
export var EventListener = win['EventListener'];
/** @type {?} */
export var navigator = win['navigator'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3V0aWxzL2ZhY2FkZS9icm93c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7SUFZSSxHQUFHLEdBQUcsT0FBTyxNQUFNLEtBQUssV0FBVyxJQUFJLE1BQU0sSUFBSSxtQkFBSyxFQUFFLEVBQUE7QUFFNUQsT0FBTyxFQUFDLEdBQUcsSUFBSSxNQUFNLEVBQUMsQ0FBQzs7QUFDdkIsTUFBTSxLQUFLLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUTs7QUFDbEMsTUFBTSxLQUFLLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUTs7QUFDbEMsTUFBTSxLQUFLLEVBQUUsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzs7O0FBQUMsY0FBTSxPQUFBLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFYLENBQVcsRUFBQyxDQUFDOzs7QUFBQyxjQUFXLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FBQTs7QUFDL0QsTUFBTSxLQUFLLFdBQVcsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTs7QUFDdkUsTUFBTSxLQUFPLEtBQUssR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDOztBQUNqQyxNQUFNLEtBQU8sVUFBVSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUM7O0FBQzNDLE1BQU0sS0FBTyxhQUFhLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQzs7QUFDakQsTUFBTSxLQUFPLFdBQVcsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDOztBQUM3QyxNQUFNLEtBQU8sT0FBTyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7O0FBQ3JDLE1BQU0sS0FBTyxRQUFRLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQzs7QUFDdkMsTUFBTSxLQUFPLGFBQWEsR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDOztBQUNqRCxNQUFNLEtBQU8sU0FBUyxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKnRzbGludDpkaXNhYmxlICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qKlxuICogSlMgdmVyc2lvbiBvZiBicm93c2VyIEFQSXMuIFRoaXMgbGlicmFyeSBjYW4gb25seSBydW4gaW4gdGhlIGJyb3dzZXIuXG4gKi9cbnZhciB3aW4gPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cgfHwgPGFueT57fTtcblxuZXhwb3J0IHt3aW4gYXMgd2luZG93fTtcbmV4cG9ydCB2YXIgZG9jdW1lbnQgPSB3aW4uZG9jdW1lbnQ7XG5leHBvcnQgdmFyIGxvY2F0aW9uID0gd2luLmxvY2F0aW9uO1xuZXhwb3J0IHZhciBnYyA9IHdpblsnZ2MnXSA/ICgpID0+IHdpblsnZ2MnXSgpIDogKCk6IGFueSA9PiBudWxsO1xuZXhwb3J0IHZhciBwZXJmb3JtYW5jZSA9IHdpblsncGVyZm9ybWFuY2UnXSA/IHdpblsncGVyZm9ybWFuY2UnXSA6IG51bGw7XG5leHBvcnQgY29uc3QgRXZlbnQgPSB3aW5bJ0V2ZW50J107XG5leHBvcnQgY29uc3QgTW91c2VFdmVudCA9IHdpblsnTW91c2VFdmVudCddO1xuZXhwb3J0IGNvbnN0IEtleWJvYXJkRXZlbnQgPSB3aW5bJ0tleWJvYXJkRXZlbnQnXTtcbmV4cG9ydCBjb25zdCBFdmVudFRhcmdldCA9IHdpblsnRXZlbnRUYXJnZXQnXTtcbmV4cG9ydCBjb25zdCBIaXN0b3J5ID0gd2luWydIaXN0b3J5J107XG5leHBvcnQgY29uc3QgTG9jYXRpb24gPSB3aW5bJ0xvY2F0aW9uJ107XG5leHBvcnQgY29uc3QgRXZlbnRMaXN0ZW5lciA9IHdpblsnRXZlbnRMaXN0ZW5lciddO1xuZXhwb3J0IGNvbnN0IG5hdmlnYXRvciA9IHdpblsnbmF2aWdhdG9yJ107XG4iXX0=