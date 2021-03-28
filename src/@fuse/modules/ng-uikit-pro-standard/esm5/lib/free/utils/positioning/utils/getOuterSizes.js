/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Get the outer sizes of the given element (offset size + margins)
 * @param {?} element
 * @return {?}
 */
export function getOuterSizes(element) {
    /** @type {?} */
    var window = element.ownerDocument.defaultView;
    /** @type {?} */
    var styles = window.getComputedStyle(element);
    /** @type {?} */
    var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
    /** @type {?} */
    var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
    return {
        width: Number(element.offsetWidth) + y,
        height: Number(element.offsetHeight) + x
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0T3V0ZXJTaXplcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3V0aWxzL3Bvc2l0aW9uaW5nL3V0aWxzL2dldE91dGVyU2l6ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBR0EsTUFBTSxVQUFVLGFBQWEsQ0FBQyxPQUFZOztRQUNsQyxNQUFNLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXOztRQUMxQyxNQUFNLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQzs7UUFDekMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQzs7UUFDNUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQztJQUVsRixPQUFPO1FBQ0wsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQztRQUN0QyxNQUFNLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDO0tBQ3pDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBHZXQgdGhlIG91dGVyIHNpemVzIG9mIHRoZSBnaXZlbiBlbGVtZW50IChvZmZzZXQgc2l6ZSArIG1hcmdpbnMpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRPdXRlclNpemVzKGVsZW1lbnQ6IGFueSkge1xuICBjb25zdCB3aW5kb3cgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gIGNvbnN0IHN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICBjb25zdCB4ID0gcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luVG9wIHx8IDApICsgcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luQm90dG9tIHx8IDApO1xuICBjb25zdCB5ID0gcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luTGVmdCB8fCAwKSArIHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpblJpZ2h0IHx8IDApO1xuXG4gIHJldHVybiB7XG4gICAgd2lkdGg6IE51bWJlcihlbGVtZW50Lm9mZnNldFdpZHRoKSArIHksXG4gICAgaGVpZ2h0OiBOdW1iZXIoZWxlbWVudC5vZmZzZXRIZWlnaHQpICsgeFxuICB9O1xufVxuIl19