/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostListener } from '@angular/core';
var WavesDirective = /** @class */ (function () {
    function WavesDirective(el) {
        this.el = el;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    WavesDirective.prototype.click = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.el.nativeElement.classList.contains('disabled')) {
            /** @type {?} */
            var button = this.el.nativeElement;
            if (!button.classList.contains('waves-effect')) {
                button.className += ' waves-effect';
            }
            /** @type {?} */
            var xPos = event.clientX - button.getBoundingClientRect().left;
            /** @type {?} */
            var yPos = event.clientY - button.getBoundingClientRect().top;
            /** @type {?} */
            var tmp = document.createElement('div');
            tmp.className += 'waves-ripple waves-rippling';
            /** @type {?} */
            var ripple = button.appendChild(tmp);
            /** @type {?} */
            var top_1 = yPos + 'px';
            /** @type {?} */
            var left = xPos + 'px';
            tmp.style.top = top_1;
            tmp.style.left = left;
            /** @type {?} */
            var scale = 'scale(' + (button.clientWidth / 100) * 3 + ') translate(0,0)';
            // tslint:disable-next-line: deprecation
            tmp.style.webkitTransform = scale;
            tmp.style.transform = scale;
            tmp.style.opacity = '1';
            /** @type {?} */
            var duration = 750;
            // tslint:disable-next-line: deprecation
            tmp.style.webkitTransitionDuration = duration + 'ms';
            tmp.style.transitionDuration = duration + 'ms';
            this.removeRipple(button, ripple);
        }
    };
    /**
     * @param {?} button
     * @param {?} ripple
     * @return {?}
     */
    WavesDirective.prototype.removeRipple = /**
     * @param {?} button
     * @param {?} ripple
     * @return {?}
     */
    function (button, ripple) {
        ripple.classList.remove('waves-rippling');
        setTimeout((/**
         * @return {?}
         */
        function () {
            ripple.style.opacity = '0';
            setTimeout((/**
             * @return {?}
             */
            function () {
                button.removeChild(ripple);
            }), 750);
        }), 200);
    };
    WavesDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbWavesEffect]',
                },] }
    ];
    /** @nocollapse */
    WavesDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    WavesDirective.propDecorators = {
        click: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return WavesDirective;
}());
export { WavesDirective };
if (false) {
    /** @type {?} */
    WavesDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F2ZXMtZWZmZWN0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3dhdmVzL3dhdmVzLWVmZmVjdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRTtJQUlFLHdCQUFtQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtJQUFHLENBQUM7Ozs7O0lBRzlCLDhCQUFLOzs7O0lBRFosVUFDYSxLQUFVO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFOztnQkFDbkQsTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYTtZQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUU7Z0JBQzlDLE1BQU0sQ0FBQyxTQUFTLElBQUksZUFBZSxDQUFDO2FBQ3JDOztnQkFFSyxJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxJQUFJOztnQkFDMUQsSUFBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUMsR0FBRzs7Z0JBRXpELEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztZQUN6QyxHQUFHLENBQUMsU0FBUyxJQUFJLDZCQUE2QixDQUFDOztnQkFDekMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDOztnQkFFaEMsS0FBRyxHQUFHLElBQUksR0FBRyxJQUFJOztnQkFDakIsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJO1lBRXhCLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUcsQ0FBQztZQUNwQixHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7O2dCQUVoQixLQUFLLEdBQUcsUUFBUSxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsa0JBQWtCO1lBRTVFLHdDQUF3QztZQUN4QyxHQUFHLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDbEMsR0FBRyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQzVCLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQzs7Z0JBRWxCLFFBQVEsR0FBRyxHQUFHO1lBRXBCLHdDQUF3QztZQUN4QyxHQUFHLENBQUMsS0FBSyxDQUFDLHdCQUF3QixHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckQsR0FBRyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBRS9DLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ25DO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQscUNBQVk7Ozs7O0lBQVosVUFBYSxNQUFXLEVBQUUsTUFBVztRQUNuQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRTFDLFVBQVU7OztRQUFDO1lBQ1QsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBRTNCLFVBQVU7OztZQUFDO2dCQUNULE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0IsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQzs7Z0JBdERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2lCQUM3Qjs7OztnQkFIbUIsVUFBVTs7O3dCQU8zQixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOztJQWlEbkMscUJBQUM7Q0FBQSxBQXZERCxJQXVEQztTQXBEWSxjQUFjOzs7SUFDYiw0QkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21kYldhdmVzRWZmZWN0XScsXG59KVxuZXhwb3J0IGNsYXNzIFdhdmVzRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmKSB7fVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgcHVibGljIGNsaWNrKGV2ZW50OiBhbnkpIHtcbiAgICBpZiAoIXRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpIHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICAgIGlmICghYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnd2F2ZXMtZWZmZWN0JykpIHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTmFtZSArPSAnIHdhdmVzLWVmZmVjdCc7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHhQb3MgPSBldmVudC5jbGllbnRYIC0gYnV0dG9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgICBjb25zdCB5UG9zID0gZXZlbnQuY2xpZW50WSAtIGJ1dHRvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG5cbiAgICAgIGNvbnN0IHRtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdG1wLmNsYXNzTmFtZSArPSAnd2F2ZXMtcmlwcGxlIHdhdmVzLXJpcHBsaW5nJztcbiAgICAgIGNvbnN0IHJpcHBsZSA9IGJ1dHRvbi5hcHBlbmRDaGlsZCh0bXApO1xuXG4gICAgICBjb25zdCB0b3AgPSB5UG9zICsgJ3B4JztcbiAgICAgIGNvbnN0IGxlZnQgPSB4UG9zICsgJ3B4JztcblxuICAgICAgdG1wLnN0eWxlLnRvcCA9IHRvcDtcbiAgICAgIHRtcC5zdHlsZS5sZWZ0ID0gbGVmdDtcblxuICAgICAgY29uc3Qgc2NhbGUgPSAnc2NhbGUoJyArIChidXR0b24uY2xpZW50V2lkdGggLyAxMDApICogMyArICcpIHRyYW5zbGF0ZSgwLDApJztcblxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvblxuICAgICAgdG1wLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHNjYWxlO1xuICAgICAgdG1wLnN0eWxlLnRyYW5zZm9ybSA9IHNjYWxlO1xuICAgICAgdG1wLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG5cbiAgICAgIGNvbnN0IGR1cmF0aW9uID0gNzUwO1xuXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uXG4gICAgICB0bXAuc3R5bGUud2Via2l0VHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb24gKyAnbXMnO1xuICAgICAgdG1wLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uICsgJ21zJztcblxuICAgICAgdGhpcy5yZW1vdmVSaXBwbGUoYnV0dG9uLCByaXBwbGUpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZVJpcHBsZShidXR0b246IGFueSwgcmlwcGxlOiBhbnkpIHtcbiAgICByaXBwbGUuY2xhc3NMaXN0LnJlbW92ZSgnd2F2ZXMtcmlwcGxpbmcnKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcmlwcGxlLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBidXR0b24ucmVtb3ZlQ2hpbGQocmlwcGxlKTtcbiAgICAgIH0sIDc1MCk7XG4gICAgfSwgMjAwKTtcbiAgfVxufVxuIl19