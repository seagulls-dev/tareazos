/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
export class EasingLogic {
}
if (false) {
    /**
     * Examples may be found at https://github.com/gdsmith/jquery.easing/blob/master/jquery.easing.js
     * or http://gizma.com/easing/
     * @abstract
     * @param {?} t current time
     * @param {?} b beginning value
     * @param {?} c change In value
     * @param {?} d duration
     * @return {?}
     */
    EasingLogic.prototype.ease = function (t, b, c, d) { };
}
// @dynamic
export class PageScrollConfig {
    // Getter and setter to avoid auto completion to suggest calling the method
    /**
     * @return {?}
     */
    static get defaultEasingLogic() {
        return PageScrollConfig._easingLogic;
    }
    /**
     * @param {?} easingLogic
     * @return {?}
     */
    static set defaultEasingLogic(easingLogic) {
        PageScrollConfig._easingLogic = easingLogic;
    }
}
/**
 * The number of milliseconds to wait till updating the scroll position again.
 * Small amounts may produce smoother animations but require more processing power.
 */
PageScrollConfig._interval = 10;
/**
 * The amount of pixels that need to be between the current scrollTop/scrollLeft position
 * and the target position the cause a scroll animation. In case distance is below
 * this threshold, an immediate jump will be performed.
 * Due to dpi or rounding irregularities in browsers floating point numbers for scrollTop/scrollLeft values
 * are possible, making a === comparison of current scrollTop or scrollLeft and target scrollPosition error-prone.
 */
PageScrollConfig._minScrollDistance = 2;
/**
 * Name of the default namespace.
 */
PageScrollConfig._defaultNamespace = 'default';
/**
 * Whether by default the scrolling should happen in vertical direction (by manipulating the scrollTop property)
 * (= true; default) or in horizontal direction (by manipulating the scrollLeft property) (= false
 */
PageScrollConfig.defaultIsVerticalScrolling = true;
/**
 * How many console logs should be emitted.
 * 0: None
 * 2: If animation could not be started due to missing target, "already at destination" or similar reasons
 * 5: All scroll position values that get set
 */
PageScrollConfig._logLevel = 2;
/**
 * The duration how long a scrollTo animation should last by default.
 * May be overridden using the page-scroll-duration attribute on a single ng2PageScroll instance.
 */
PageScrollConfig.defaultDuration = 1250;
/**
 * The distance in pixels above scroll target where the animation should stop. Setting a positive number results in
 * the scroll target being more in the middle of the screen, negative numbers will produce scrolling "too far"
 */
PageScrollConfig.defaultScrollOffset = 0;
/**
 * Whether by default for inline scroll animations the advanced offset calculation should take place (true) or
 * not (false). Default is false.
 * The advanced offset calculation will traverse the DOM tree upwards, starting at the scrollTarget, until it finds
 * the scrollingView container element. Along the way the offset positions of the relative positioned
 * (position: relative) elements will be taken into account for calculating the target elements position.
 */
PageScrollConfig.defaultAdvancedInlineOffsetCalculation = false;
/**
 * The events that are listened to on the body to decide whether a scroll animation has been interfered/interrupted by the user
 */
PageScrollConfig._interruptEvents = [
    'mousedown',
    'wheel',
    'DOMMouseScroll',
    'mousewheel',
    'keyup',
    'touchmove',
];
/**
 * The keys that are considered to interrupt a scroll animation (mainly the arrow keys). All other key presses will not stop the
 * scroll animation.
 */
PageScrollConfig._interruptKeys = [33, 34, 35, 36, 38, 40];
/**
 * Whether a scroll animation should be interruptible by user interaction (true) or not (false). If the user performs an
 * interrupting event while a scroll animation takes place, the scroll animation stops.
 */
PageScrollConfig.defaultInterruptible = true;
PageScrollConfig._easingLogic = {
    ease: (/**
     * @param {?} t
     * @param {?} b
     * @param {?} c
     * @param {?} d
     * @return {?}
     */
    (t, b, c, d) => {
        // Linear easing
        return (c * t) / d + b;
    }),
};
if (false) {
    /**
     * The number of milliseconds to wait till updating the scroll position again.
     * Small amounts may produce smoother animations but require more processing power.
     * @type {?}
     */
    PageScrollConfig._interval;
    /**
     * The amount of pixels that need to be between the current scrollTop/scrollLeft position
     * and the target position the cause a scroll animation. In case distance is below
     * this threshold, an immediate jump will be performed.
     * Due to dpi or rounding irregularities in browsers floating point numbers for scrollTop/scrollLeft values
     * are possible, making a === comparison of current scrollTop or scrollLeft and target scrollPosition error-prone.
     * @type {?}
     */
    PageScrollConfig._minScrollDistance;
    /**
     * Name of the default namespace.
     * @type {?}
     */
    PageScrollConfig._defaultNamespace;
    /**
     * Whether by default the scrolling should happen in vertical direction (by manipulating the scrollTop property)
     * (= true; default) or in horizontal direction (by manipulating the scrollLeft property) (= false
     * @type {?}
     */
    PageScrollConfig.defaultIsVerticalScrolling;
    /**
     * How many console logs should be emitted.
     * 0: None
     * 2: If animation could not be started due to missing target, "already at destination" or similar reasons
     * 5: All scroll position values that get set
     * @type {?}
     */
    PageScrollConfig._logLevel;
    /**
     * The duration how long a scrollTo animation should last by default.
     * May be overridden using the page-scroll-duration attribute on a single ng2PageScroll instance.
     * @type {?}
     */
    PageScrollConfig.defaultDuration;
    /**
     * The distance in pixels above scroll target where the animation should stop. Setting a positive number results in
     * the scroll target being more in the middle of the screen, negative numbers will produce scrolling "too far"
     * @type {?}
     */
    PageScrollConfig.defaultScrollOffset;
    /**
     * Whether by default for inline scroll animations the advanced offset calculation should take place (true) or
     * not (false). Default is false.
     * The advanced offset calculation will traverse the DOM tree upwards, starting at the scrollTarget, until it finds
     * the scrollingView container element. Along the way the offset positions of the relative positioned
     * (position: relative) elements will be taken into account for calculating the target elements position.
     * @type {?}
     */
    PageScrollConfig.defaultAdvancedInlineOffsetCalculation;
    /**
     * The events that are listened to on the body to decide whether a scroll animation has been interfered/interrupted by the user
     * @type {?}
     */
    PageScrollConfig._interruptEvents;
    /**
     * The keys that are considered to interrupt a scroll animation (mainly the arrow keys). All other key presses will not stop the
     * scroll animation.
     * @type {?}
     */
    PageScrollConfig._interruptKeys;
    /**
     * Whether a scroll animation should be interruptible by user interaction (true) or not (false). If the user performs an
     * interrupting event while a scroll animation takes place, the scroll animation stops.
     * @type {?}
     */
    PageScrollConfig.defaultInterruptible;
    /**
     * @type {?}
     * @private
     */
    PageScrollConfig._easingLogic;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXBhZ2Utc2Nyb2xsLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vc21vb3Roc2Nyb2xsL21kYi1wYWdlLXNjcm9sbC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE1BQU0sT0FBZ0IsV0FBVztDQVVoQzs7Ozs7Ozs7Ozs7O0lBREMsdURBQXlFOzs7QUFPM0UsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7SUF3RnBCLE1BQU0sS0FBSyxrQkFBa0I7UUFDbEMsT0FBTyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUM7SUFDdkMsQ0FBQzs7Ozs7SUFFTSxNQUFNLEtBQUssa0JBQWtCLENBQUMsV0FBd0I7UUFDM0QsZ0JBQWdCLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQztJQUM5QyxDQUFDOzs7Ozs7QUF6RmEsMEJBQVMsR0FBRyxFQUFFLENBQUM7Ozs7Ozs7O0FBU2YsbUNBQWtCLEdBQUcsQ0FBQyxDQUFDOzs7O0FBS3ZCLGtDQUFpQixHQUFHLFNBQVMsQ0FBQzs7Ozs7QUFNOUIsMkNBQTBCLEdBQUcsSUFBSSxDQUFDOzs7Ozs7O0FBUWxDLDBCQUFTLEdBQUcsQ0FBQyxDQUFDOzs7OztBQU1kLGdDQUFlLEdBQUcsSUFBSSxDQUFDOzs7OztBQU12QixvQ0FBbUIsR0FBRyxDQUFDLENBQUM7Ozs7Ozs7O0FBU3hCLHVEQUFzQyxHQUFHLEtBQUssQ0FBQzs7OztBQUsvQyxpQ0FBZ0IsR0FBYTtJQUN6QyxXQUFXO0lBQ1gsT0FBTztJQUNQLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osT0FBTztJQUNQLFdBQVc7Q0FDWixDQUFDOzs7OztBQU1ZLCtCQUFjLEdBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDOzs7OztBQU1wRCxxQ0FBb0IsR0FBRyxJQUFJLENBQUM7QUFFM0IsNkJBQVksR0FBZ0I7SUFDekMsSUFBSTs7Ozs7OztJQUFFLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFVLEVBQUU7UUFDM0QsZ0JBQWdCO1FBQ2hCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDLENBQUE7Q0FDRixDQUFDOzs7Ozs7O0lBaEZGLDJCQUE2Qjs7Ozs7Ozs7O0lBUzdCLG9DQUFxQzs7Ozs7SUFLckMsbUNBQTRDOzs7Ozs7SUFNNUMsNENBQWdEOzs7Ozs7OztJQVFoRCwyQkFBNEI7Ozs7OztJQU01QixpQ0FBcUM7Ozs7OztJQU1yQyxxQ0FBc0M7Ozs7Ozs7OztJQVN0Qyx3REFBNkQ7Ozs7O0lBSzdELGtDQU9FOzs7Ozs7SUFNRixnQ0FBa0U7Ozs7OztJQU1sRSxzQ0FBMEM7Ozs7O0lBRTFDLDhCQUtFIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFic3RyYWN0IGNsYXNzIEVhc2luZ0xvZ2ljIHtcbiAgLyoqXG4gICAqIEV4YW1wbGVzIG1heSBiZSBmb3VuZCBhdCBodHRwczovL2dpdGh1Yi5jb20vZ2RzbWl0aC9qcXVlcnkuZWFzaW5nL2Jsb2IvbWFzdGVyL2pxdWVyeS5lYXNpbmcuanNcbiAgICogb3IgaHR0cDovL2dpem1hLmNvbS9lYXNpbmcvXG4gICAqIEBwYXJhbSB0IGN1cnJlbnQgdGltZVxuICAgKiBAcGFyYW0gYiBiZWdpbm5pbmcgdmFsdWVcbiAgICogQHBhcmFtIGMgY2hhbmdlIEluIHZhbHVlXG4gICAqIEBwYXJhbSBkIGR1cmF0aW9uXG4gICAqL1xuICBwdWJsaWMgYWJzdHJhY3QgZWFzZSh0OiBudW1iZXIsIGI6IG51bWJlciwgYzogbnVtYmVyLCBkOiBudW1iZXIpOiBudW1iZXI7XG59XG5cbmV4cG9ydCBkZWNsYXJlIHR5cGUgUGFnZVNjcm9sbFRhcmdldCA9IEhUTUxFbGVtZW50IHwgc3RyaW5nO1xuXG5leHBvcnQgZGVjbGFyZSB0eXBlIFBhZ2VTY3JvbGxpbmdWaWV3cyA9IEhUTUxFbGVtZW50IHwgRG9jdW1lbnQgfCBIVE1MQm9keUVsZW1lbnQgfCBOb2RlO1xuLy8gQGR5bmFtaWNcbmV4cG9ydCBjbGFzcyBQYWdlU2Nyb2xsQ29uZmlnIHtcbiAgLyoqXG4gICAqIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHdhaXQgdGlsbCB1cGRhdGluZyB0aGUgc2Nyb2xsIHBvc2l0aW9uIGFnYWluLlxuICAgKiBTbWFsbCBhbW91bnRzIG1heSBwcm9kdWNlIHNtb290aGVyIGFuaW1hdGlvbnMgYnV0IHJlcXVpcmUgbW9yZSBwcm9jZXNzaW5nIHBvd2VyLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBfaW50ZXJ2YWwgPSAxMDtcblxuICAvKipcbiAgICogVGhlIGFtb3VudCBvZiBwaXhlbHMgdGhhdCBuZWVkIHRvIGJlIGJldHdlZW4gdGhlIGN1cnJlbnQgc2Nyb2xsVG9wL3Njcm9sbExlZnQgcG9zaXRpb25cbiAgICogYW5kIHRoZSB0YXJnZXQgcG9zaXRpb24gdGhlIGNhdXNlIGEgc2Nyb2xsIGFuaW1hdGlvbi4gSW4gY2FzZSBkaXN0YW5jZSBpcyBiZWxvd1xuICAgKiB0aGlzIHRocmVzaG9sZCwgYW4gaW1tZWRpYXRlIGp1bXAgd2lsbCBiZSBwZXJmb3JtZWQuXG4gICAqIER1ZSB0byBkcGkgb3Igcm91bmRpbmcgaXJyZWd1bGFyaXRpZXMgaW4gYnJvd3NlcnMgZmxvYXRpbmcgcG9pbnQgbnVtYmVycyBmb3Igc2Nyb2xsVG9wL3Njcm9sbExlZnQgdmFsdWVzXG4gICAqIGFyZSBwb3NzaWJsZSwgbWFraW5nIGEgPT09IGNvbXBhcmlzb24gb2YgY3VycmVudCBzY3JvbGxUb3Agb3Igc2Nyb2xsTGVmdCBhbmQgdGFyZ2V0IHNjcm9sbFBvc2l0aW9uIGVycm9yLXByb25lLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBfbWluU2Nyb2xsRGlzdGFuY2UgPSAyO1xuXG4gIC8qKlxuICAgKiBOYW1lIG9mIHRoZSBkZWZhdWx0IG5hbWVzcGFjZS5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgX2RlZmF1bHROYW1lc3BhY2UgPSAnZGVmYXVsdCc7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgYnkgZGVmYXVsdCB0aGUgc2Nyb2xsaW5nIHNob3VsZCBoYXBwZW4gaW4gdmVydGljYWwgZGlyZWN0aW9uIChieSBtYW5pcHVsYXRpbmcgdGhlIHNjcm9sbFRvcCBwcm9wZXJ0eSlcbiAgICogKD0gdHJ1ZTsgZGVmYXVsdCkgb3IgaW4gaG9yaXpvbnRhbCBkaXJlY3Rpb24gKGJ5IG1hbmlwdWxhdGluZyB0aGUgc2Nyb2xsTGVmdCBwcm9wZXJ0eSkgKD0gZmFsc2VcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZGVmYXVsdElzVmVydGljYWxTY3JvbGxpbmcgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBIb3cgbWFueSBjb25zb2xlIGxvZ3Mgc2hvdWxkIGJlIGVtaXR0ZWQuXG4gICAqIDA6IE5vbmVcbiAgICogMjogSWYgYW5pbWF0aW9uIGNvdWxkIG5vdCBiZSBzdGFydGVkIGR1ZSB0byBtaXNzaW5nIHRhcmdldCwgXCJhbHJlYWR5IGF0IGRlc3RpbmF0aW9uXCIgb3Igc2ltaWxhciByZWFzb25zXG4gICAqIDU6IEFsbCBzY3JvbGwgcG9zaXRpb24gdmFsdWVzIHRoYXQgZ2V0IHNldFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBfbG9nTGV2ZWwgPSAyO1xuXG4gIC8qKlxuICAgKiBUaGUgZHVyYXRpb24gaG93IGxvbmcgYSBzY3JvbGxUbyBhbmltYXRpb24gc2hvdWxkIGxhc3QgYnkgZGVmYXVsdC5cbiAgICogTWF5IGJlIG92ZXJyaWRkZW4gdXNpbmcgdGhlIHBhZ2Utc2Nyb2xsLWR1cmF0aW9uIGF0dHJpYnV0ZSBvbiBhIHNpbmdsZSBuZzJQYWdlU2Nyb2xsIGluc3RhbmNlLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0RHVyYXRpb24gPSAxMjUwO1xuXG4gIC8qKlxuICAgKiBUaGUgZGlzdGFuY2UgaW4gcGl4ZWxzIGFib3ZlIHNjcm9sbCB0YXJnZXQgd2hlcmUgdGhlIGFuaW1hdGlvbiBzaG91bGQgc3RvcC4gU2V0dGluZyBhIHBvc2l0aXZlIG51bWJlciByZXN1bHRzIGluXG4gICAqIHRoZSBzY3JvbGwgdGFyZ2V0IGJlaW5nIG1vcmUgaW4gdGhlIG1pZGRsZSBvZiB0aGUgc2NyZWVuLCBuZWdhdGl2ZSBudW1iZXJzIHdpbGwgcHJvZHVjZSBzY3JvbGxpbmcgXCJ0b28gZmFyXCJcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFNjcm9sbE9mZnNldCA9IDA7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgYnkgZGVmYXVsdCBmb3IgaW5saW5lIHNjcm9sbCBhbmltYXRpb25zIHRoZSBhZHZhbmNlZCBvZmZzZXQgY2FsY3VsYXRpb24gc2hvdWxkIHRha2UgcGxhY2UgKHRydWUpIG9yXG4gICAqIG5vdCAoZmFsc2UpLiBEZWZhdWx0IGlzIGZhbHNlLlxuICAgKiBUaGUgYWR2YW5jZWQgb2Zmc2V0IGNhbGN1bGF0aW9uIHdpbGwgdHJhdmVyc2UgdGhlIERPTSB0cmVlIHVwd2FyZHMsIHN0YXJ0aW5nIGF0IHRoZSBzY3JvbGxUYXJnZXQsIHVudGlsIGl0IGZpbmRzXG4gICAqIHRoZSBzY3JvbGxpbmdWaWV3IGNvbnRhaW5lciBlbGVtZW50LiBBbG9uZyB0aGUgd2F5IHRoZSBvZmZzZXQgcG9zaXRpb25zIG9mIHRoZSByZWxhdGl2ZSBwb3NpdGlvbmVkXG4gICAqIChwb3NpdGlvbjogcmVsYXRpdmUpIGVsZW1lbnRzIHdpbGwgYmUgdGFrZW4gaW50byBhY2NvdW50IGZvciBjYWxjdWxhdGluZyB0aGUgdGFyZ2V0IGVsZW1lbnRzIHBvc2l0aW9uLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0QWR2YW5jZWRJbmxpbmVPZmZzZXRDYWxjdWxhdGlvbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBUaGUgZXZlbnRzIHRoYXQgYXJlIGxpc3RlbmVkIHRvIG9uIHRoZSBib2R5IHRvIGRlY2lkZSB3aGV0aGVyIGEgc2Nyb2xsIGFuaW1hdGlvbiBoYXMgYmVlbiBpbnRlcmZlcmVkL2ludGVycnVwdGVkIGJ5IHRoZSB1c2VyXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIF9pbnRlcnJ1cHRFdmVudHM6IHN0cmluZ1tdID0gW1xuICAgICdtb3VzZWRvd24nLFxuICAgICd3aGVlbCcsXG4gICAgJ0RPTU1vdXNlU2Nyb2xsJyxcbiAgICAnbW91c2V3aGVlbCcsXG4gICAgJ2tleXVwJyxcbiAgICAndG91Y2htb3ZlJyxcbiAgXTtcblxuICAvKipcbiAgICogVGhlIGtleXMgdGhhdCBhcmUgY29uc2lkZXJlZCB0byBpbnRlcnJ1cHQgYSBzY3JvbGwgYW5pbWF0aW9uIChtYWlubHkgdGhlIGFycm93IGtleXMpLiBBbGwgb3RoZXIga2V5IHByZXNzZXMgd2lsbCBub3Qgc3RvcCB0aGVcbiAgICogc2Nyb2xsIGFuaW1hdGlvbi5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgX2ludGVycnVwdEtleXM6IG51bWJlcltdID0gWzMzLCAzNCwgMzUsIDM2LCAzOCwgNDBdO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIGEgc2Nyb2xsIGFuaW1hdGlvbiBzaG91bGQgYmUgaW50ZXJydXB0aWJsZSBieSB1c2VyIGludGVyYWN0aW9uICh0cnVlKSBvciBub3QgKGZhbHNlKS4gSWYgdGhlIHVzZXIgcGVyZm9ybXMgYW5cbiAgICogaW50ZXJydXB0aW5nIGV2ZW50IHdoaWxlIGEgc2Nyb2xsIGFuaW1hdGlvbiB0YWtlcyBwbGFjZSwgdGhlIHNjcm9sbCBhbmltYXRpb24gc3RvcHMuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGRlZmF1bHRJbnRlcnJ1cHRpYmxlID0gdHJ1ZTtcblxuICBwcml2YXRlIHN0YXRpYyBfZWFzaW5nTG9naWM6IEVhc2luZ0xvZ2ljID0ge1xuICAgIGVhc2U6ICh0OiBudW1iZXIsIGI6IG51bWJlciwgYzogbnVtYmVyLCBkOiBudW1iZXIpOiBudW1iZXIgPT4ge1xuICAgICAgLy8gTGluZWFyIGVhc2luZ1xuICAgICAgcmV0dXJuIChjICogdCkgLyBkICsgYjtcbiAgICB9LFxuICB9O1xuXG4gIC8vIEdldHRlciBhbmQgc2V0dGVyIHRvIGF2b2lkIGF1dG8gY29tcGxldGlvbiB0byBzdWdnZXN0IGNhbGxpbmcgdGhlIG1ldGhvZFxuICBwdWJsaWMgc3RhdGljIGdldCBkZWZhdWx0RWFzaW5nTG9naWMoKTogRWFzaW5nTG9naWMge1xuICAgIHJldHVybiBQYWdlU2Nyb2xsQ29uZmlnLl9lYXNpbmdMb2dpYztcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgc2V0IGRlZmF1bHRFYXNpbmdMb2dpYyhlYXNpbmdMb2dpYzogRWFzaW5nTG9naWMpIHtcbiAgICBQYWdlU2Nyb2xsQ29uZmlnLl9lYXNpbmdMb2dpYyA9IGVhc2luZ0xvZ2ljO1xuICB9XG59XG4iXX0=