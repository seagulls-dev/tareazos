/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding, Input, Output, EventEmitter, HostListener, ContentChildren, QueryList, ChangeDetectionStrategy, ChangeDetectorRef, } from '@angular/core';
import { state, style, trigger, transition, animate } from '@angular/animations';
import { FixedButtonCaptionDirective } from '../buttons/fixed-caption.directive';
var CollapseComponent = /** @class */ (function () {
    function CollapseComponent(_cdRef) {
        this._cdRef = _cdRef;
        this.isCollapsed = true;
        this.showBsCollapse = new EventEmitter();
        this.shownBsCollapse = new EventEmitter();
        this.hideBsCollapse = new EventEmitter();
        this.hiddenBsCollapse = new EventEmitter();
        this.collapsed = new EventEmitter();
        this.expanded = new EventEmitter();
        this.overflow = 'hidden';
    }
    /**
     * @param {?} event
     * @return {?}
     */
    CollapseComponent.prototype.onExpandBodyDone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (event.toState === 'expanded') {
                _this.shownBsCollapse.emit(_this);
                _this.expanded.emit(_this);
                _this.overflow = 'visible';
                _this.showCaptions();
            }
            else {
                _this.hiddenBsCollapse.emit(_this);
                _this.collapsed.emit(_this);
            }
        }), 0);
    };
    /**
     * @return {?}
     */
    CollapseComponent.prototype.showCaptions = /**
     * @return {?}
     */
    function () {
        this.captions.forEach((/**
         * @param {?} caption
         * @return {?}
         */
        function (caption) { return caption.showCaption(); }));
    };
    /**
     * @return {?}
     */
    CollapseComponent.prototype.toggle = /**
     * @return {?}
     */
    function () {
        this.isCollapsed ? this.show() : this.hide();
    };
    /**
     * @return {?}
     */
    CollapseComponent.prototype.show = /**
     * @return {?}
     */
    function () {
        this.expandAnimationState = 'expanded';
        this.isCollapsed = false;
        this.showBsCollapse.emit(this);
        this._cdRef.markForCheck();
    };
    /**
     * @return {?}
     */
    CollapseComponent.prototype.hide = /**
     * @return {?}
     */
    function () {
        this.overflow = 'hidden';
        this.expandAnimationState = 'collapsed';
        this.isCollapsed = true;
        this.hideBsCollapse.emit(this);
        this._cdRef.markForCheck();
    };
    /**
     * @return {?}
     */
    CollapseComponent.prototype.initializeCollapseState = /**
     * @return {?}
     */
    function () {
        this.isCollapsed ? this.hide() : this.show();
    };
    /**
     * @return {?}
     */
    CollapseComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initializeCollapseState();
    };
    CollapseComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: '[mdbCollapse]',
                    exportAs: 'bs-collapse',
                    template: '<ng-content></ng-content>',
                    animations: [
                        trigger('expandBody', [
                            state('collapsed', style({ height: '0px' })),
                            state('expanded', style({ height: '*' })),
                            transition('expanded <=> collapsed', animate('500ms ease')),
                        ]),
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    CollapseComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    CollapseComponent.propDecorators = {
        captions: [{ type: ContentChildren, args: [FixedButtonCaptionDirective,] }],
        isCollapsed: [{ type: Input }],
        showBsCollapse: [{ type: Output }],
        shownBsCollapse: [{ type: Output }],
        hideBsCollapse: [{ type: Output }],
        hiddenBsCollapse: [{ type: Output }],
        collapsed: [{ type: Output }],
        expanded: [{ type: Output }],
        expandAnimationState: [{ type: HostBinding, args: ['@expandBody',] }],
        overflow: [{ type: HostBinding, args: ['style.overflow',] }],
        onExpandBodyDone: [{ type: HostListener, args: ['@expandBody.done', ['$event'],] }]
    };
    return CollapseComponent;
}());
export { CollapseComponent };
if (false) {
    /** @type {?} */
    CollapseComponent.prototype.captions;
    /** @type {?} */
    CollapseComponent.prototype.isCollapsed;
    /** @type {?} */
    CollapseComponent.prototype.showBsCollapse;
    /** @type {?} */
    CollapseComponent.prototype.shownBsCollapse;
    /** @type {?} */
    CollapseComponent.prototype.hideBsCollapse;
    /** @type {?} */
    CollapseComponent.prototype.hiddenBsCollapse;
    /** @type {?} */
    CollapseComponent.prototype.collapsed;
    /** @type {?} */
    CollapseComponent.prototype.expanded;
    /** @type {?} */
    CollapseComponent.prototype.expandAnimationState;
    /** @type {?} */
    CollapseComponent.prototype.overflow;
    /**
     * @type {?}
     * @private
     */
    CollapseComponent.prototype._cdRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvY29sbGFwc2UvY29sbGFwc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixZQUFZLEVBQ1osZUFBZSxFQUNmLFNBQVMsRUFDVCx1QkFBdUIsRUFDdkIsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFakY7SUF5QkUsMkJBQW9CLE1BQXlCO1FBQXpCLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBVHBDLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBRWxCLG1CQUFjLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdkQsb0JBQWUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN4RCxtQkFBYyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3ZELHFCQUFnQixHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3pELGNBQVMsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsRCxhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFLNUIsYUFBUSxHQUFHLFFBQVEsQ0FBQztJQUhILENBQUM7Ozs7O0lBTWpELDRDQUFnQjs7OztJQURoQixVQUNpQixLQUFVO1FBRDNCLGlCQWFDO1FBWEMsVUFBVTs7O1FBQUM7WUFDVCxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssVUFBVSxFQUFFO2dCQUNoQyxLQUFJLENBQUMsZUFB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OUMsd0JBQUM7Q0FBQSxBQTdFRCxJQTZFQztTQS9EWSxpQkFBaUI7OztJQUM1QixxQ0FBK0Y7O0lBQy9GLHdDQUE0Qjs7SUFFNUIsMkNBQWlFOztJQUNqRSw0Q0FBa0U7O0lBQ2xFLDJDQUFpRTs7SUFDakUsNkNBQW1FOztJQUNuRSxzQ0FBNEQ7O0lBQzVELHFDQUEyRDs7SUFJM0QsaURBQXlEOztJQUN6RCxxQ0FBbUQ7Ozs7O0lBSHZDLG1DQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc3RhdGUsIHN0eWxlLCB0cmlnZ2VyLCB0cmFuc2l0aW9uLCBhbmltYXRlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBGaXhlZEJ1dHRvbkNhcHRpb25EaXJlY3RpdmUgfSBmcm9tICcuLi9idXR0b25zL2ZpeGVkLWNhcHRpb24uZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbbWRiQ29sbGFwc2VdJyxcbiAgZXhwb3J0QXM6ICdicy1jb2xsYXBzZScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdleHBhbmRCb2R5JywgW1xuICAgICAgc3RhdGUoJ2NvbGxhcHNlZCcsIHN0eWxlKHsgaGVpZ2h0OiAnMHB4JyB9KSksXG4gICAgICBzdGF0ZSgnZXhwYW5kZWQnLCBzdHlsZSh7IGhlaWdodDogJyonIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ2V4cGFuZGVkIDw9PiBjb2xsYXBzZWQnLCBhbmltYXRlKCc1MDBtcyBlYXNlJykpLFxuICAgIF0pLFxuICBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ29sbGFwc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAQ29udGVudENoaWxkcmVuKEZpeGVkQnV0dG9uQ2FwdGlvbkRpcmVjdGl2ZSkgY2FwdGlvbnM6IFF1ZXJ5TGlzdDxGaXhlZEJ1dHRvbkNhcHRpb25EaXJlY3RpdmU+O1xuICBASW5wdXQoKSBpc0NvbGxhcHNlZCA9IHRydWU7XG5cbiAgQE91dHB1dCgpIHNob3dCc0NvbGxhcHNlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHNob3duQnNDb2xsYXBzZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBoaWRlQnNDb2xsYXBzZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBoaWRkZW5Cc0NvbGxhcHNlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNvbGxhcHNlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBleHBhbmRlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2RSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIEBIb3N0QmluZGluZygnQGV4cGFuZEJvZHknKSBleHBhbmRBbmltYXRpb25TdGF0ZTogc3RyaW5nO1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLm92ZXJmbG93Jykgb3ZlcmZsb3cgPSAnaGlkZGVuJztcblxuICBASG9zdExpc3RlbmVyKCdAZXhwYW5kQm9keS5kb25lJywgWyckZXZlbnQnXSlcbiAgb25FeHBhbmRCb2R5RG9uZShldmVudDogYW55KSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoZXZlbnQudG9TdGF0ZSA9PT0gJ2V4cGFuZGVkJykge1xuICAgICAgICB0aGlzLnNob3duQnNDb2xsYXBzZS5lbWl0KHRoaXMpO1xuICAgICAgICB0aGlzLmV4cGFuZGVkLmVtaXQodGhpcyk7XG4gICAgICAgIHRoaXMub3ZlcmZsb3cgPSAndmlzaWJsZSc7XG4gICAgICAgIHRoaXMuc2hvd0NhcHRpb25zKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmhpZGRlbkJzQ29sbGFwc2UuZW1pdCh0aGlzKTtcbiAgICAgICAgdGhpcy5jb2xsYXBzZWQuZW1pdCh0aGlzKTtcbiAgICAgIH1cbiAgICB9LCAwKTtcbiAgfVxuXG4gIHNob3dDYXB0aW9ucygpIHtcbiAgICB0aGlzLmNhcHRpb25zLmZvckVhY2goKGNhcHRpb246IEZpeGVkQnV0dG9uQ2FwdGlvbkRpcmVjdGl2ZSkgPT4gY2FwdGlvbi5zaG93Q2FwdGlvbigpKTtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLmlzQ29sbGFwc2VkID8gdGhpcy5zaG93KCkgOiB0aGlzLmhpZGUoKTtcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgdGhpcy5leHBhbmRBbmltYXRpb25TdGF0ZSA9ICdleHBhbmRlZCc7XG4gICAgdGhpcy5pc0NvbGxhcHNlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5zaG93QnNDb2xsYXBzZS5lbWl0KHRoaXMpO1xuICAgIHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICB0aGlzLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgdGhpcy5leHBhbmRBbmltYXRpb25TdGF0ZSA9ICdjb2xsYXBzZWQnO1xuICAgIHRoaXMuaXNDb2xsYXBzZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5oaWRlQnNDb2xsYXBzZS5lbWl0KHRoaXMpO1xuICAgIHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZUNvbGxhcHNlU3RhdGUoKSB7XG4gICAgdGhpcy5pc0NvbGxhcHNlZCA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluaXRpYWxpemVDb2xsYXBzZVN0YXRlKCk7XG4gIH1cbn1cbiJdfQ==