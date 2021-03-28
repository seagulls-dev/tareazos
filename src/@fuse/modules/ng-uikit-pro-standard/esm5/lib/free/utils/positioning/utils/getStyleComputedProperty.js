/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Get CSS computed property of the given element
 * @param {?} element
 * @param {?=} property
 * @return {?}
 */
export function getStyleComputedProperty(element, property) {
    if (element.nodeType !== 1) {
        return [];
    }
    // NOTE: 1 DOM access here
    /** @type {?} */
    var window = element.ownerDocument.defaultView;
    /** @type {?} */
    var css = window.getComputedStyle(element, null);
    return property ? css[(/** @type {?} */ (property))] : css;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvdXRpbHMvcG9zaXRpb25pbmcvdXRpbHMvZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFHQSxNQUFNLFVBQVUsd0JBQXdCLENBQUMsT0FBWSxFQUFFLFFBQWlCO0lBQ3RFLElBQUksT0FBTyxDQUFDLFFBQVEsS0FBSyxDQUFDLEVBQUU7UUFDMUIsT0FBTyxFQUFFLENBQUM7S0FDWDs7O1FBRUssTUFBTSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVzs7UUFDMUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO0lBRWxELE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsbUJBQUEsUUFBUSxFQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0FBQy9DLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEdldCBDU1MgY29tcHV0ZWQgcHJvcGVydHkgb2YgdGhlIGdpdmVuIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShlbGVtZW50OiBhbnksIHByb3BlcnR5Pzogc3RyaW5nKTogYW55IHtcbiAgaWYgKGVsZW1lbnQubm9kZVR5cGUgIT09IDEpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgLy8gTk9URTogMSBET00gYWNjZXNzIGhlcmVcbiAgY29uc3Qgd2luZG93ID0gZWxlbWVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICBjb25zdCBjc3MgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBudWxsKTtcblxuICByZXR1cm4gcHJvcGVydHkgPyBjc3NbcHJvcGVydHkgYXMgYW55XSA6IGNzcztcbn1cbiJdfQ==