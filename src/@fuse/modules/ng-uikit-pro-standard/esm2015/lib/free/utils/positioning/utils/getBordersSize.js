/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Helper to detect borders of a given element
 */
/**
 * @param {?} styles
 * @param {?} axis
 * @return {?}
 */
export function getBordersSize(styles, axis) {
    /** @type {?} */
    const sideA = axis === 'x' ? 'Left' : 'Top';
    /** @type {?} */
    const sideB = sideA === 'Left' ? 'Right' : 'Bottom';
    return (parseFloat(styles[(/** @type {?} */ (`border${sideA}Width`))]) +
        parseFloat(styles[(/** @type {?} */ (`border${sideB}Width`))]));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0Qm9yZGVyc1NpemUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS91dGlscy9wb3NpdGlvbmluZy91dGlscy9nZXRCb3JkZXJzU2l6ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFJQSxNQUFNLFVBQVUsY0FBYyxDQUFDLE1BQTJCLEVBQUUsSUFBWTs7VUFDaEUsS0FBSyxHQUFHLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSzs7VUFDckMsS0FBSyxHQUFHLEtBQUssS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUTtJQUVuRCxPQUFPLENBQ0wsVUFBVSxDQUFDLE1BQU0sQ0FBQyxtQkFBQSxTQUFTLEtBQUssT0FBTyxFQUFPLENBQUMsQ0FBQztRQUNoRCxVQUFVLENBQUMsTUFBTSxDQUFDLG1CQUFBLFNBQVMsS0FBSyxPQUFPLEVBQU8sQ0FBQyxDQUFDLENBQ2pELENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBIZWxwZXIgdG8gZGV0ZWN0IGJvcmRlcnMgb2YgYSBnaXZlbiBlbGVtZW50XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJvcmRlcnNTaXplKHN0eWxlczogQ1NTU3R5bGVEZWNsYXJhdGlvbiwgYXhpczogc3RyaW5nKSB7XG4gIGNvbnN0IHNpZGVBID0gYXhpcyA9PT0gJ3gnID8gJ0xlZnQnIDogJ1RvcCc7XG4gIGNvbnN0IHNpZGVCID0gc2lkZUEgPT09ICdMZWZ0JyA/ICdSaWdodCcgOiAnQm90dG9tJztcblxuICByZXR1cm4gKFxuICAgIHBhcnNlRmxvYXQoc3R5bGVzW2Bib3JkZXIke3NpZGVBfVdpZHRoYCBhcyBhbnldKSArXG4gICAgcGFyc2VGbG9hdChzdHlsZXNbYGJvcmRlciR7c2lkZUJ9V2lkdGhgIGFzIGFueV0pXG4gICk7XG59XG4iXX0=