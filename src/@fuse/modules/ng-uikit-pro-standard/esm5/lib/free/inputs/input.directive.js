/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, Renderer2, Input, HostListener, PLATFORM_ID, Inject, } from '@angular/core';
import { DOWN_ARROW, UP_ARROW } from '../utils/keyboard-navigation';
var MdbInput = /** @class */ (function () {
    function MdbInput(el, _renderer, platformId) {
        this.el = el;
        this._renderer = _renderer;
        this.elLabel = null;
        this.elIcon = null;
        this.focusCheckbox = true;
        this.focusRadio = true;
        this.isBrowser = false;
        this.isClicked = false;
        this.element = null;
        this.isBrowser = isPlatformBrowser(platformId);
    }
    /**
     * @return {?}
     */
    MdbInput.prototype.onfocus = /**
     * @return {?}
     */
    function () {
        try {
            this._renderer.addClass(this.elLabel, 'active');
            this.isClicked = true;
        }
        catch (error) { }
    };
    /**
     * @return {?}
     */
    MdbInput.prototype.onblur = /**
     * @return {?}
     */
    function () {
        try {
            if (this.el.nativeElement.value === '') {
                this._renderer.removeClass(this.elLabel, 'active');
            }
            this.isClicked = false;
        }
        catch (error) { }
    };
    /**
     * @return {?}
     */
    MdbInput.prototype.onchange = /**
     * @return {?}
     */
    function () {
        try {
            this.checkValue();
        }
        catch (error) { }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MdbInput.prototype.onkeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        try {
            if (event.target.type === 'number') {
                if (event.shiftKey) {
                    switch (event.keyCode) {
                        case UP_ARROW:
                            event.target.value = +event.target.value + 10;
                            break;
                        case DOWN_ARROW:
                            event.target.value = +event.target.value - 10;
                            break;
                    }
                }
                if (event.altKey) {
                    switch (event.keyCode) {
                        case UP_ARROW:
                            event.target.value = +event.target.value + 0.1;
                            break;
                        case DOWN_ARROW:
                            event.target.value = +event.target.value - 0.1;
                            break;
                    }
                }
            }
        }
        catch (error) { }
        this.delayedResize();
    };
    /**
     * @return {?}
     */
    MdbInput.prototype.oncut = /**
     * @return {?}
     */
    function () {
        var _this = this;
        try {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.delayedResize();
            }), 0);
        }
        catch (error) { }
    };
    /**
     * @return {?}
     */
    MdbInput.prototype.onpaste = /**
     * @return {?}
     */
    function () {
        var _this = this;
        try {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.delayedResize();
            }), 0);
        }
        catch (error) { }
    };
    /**
     * @return {?}
     */
    MdbInput.prototype.ondrop = /**
     * @return {?}
     */
    function () {
        var _this = this;
        try {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.delayedResize();
            }), 0);
        }
        catch (error) { }
    };
    /**
     * @return {?}
     */
    MdbInput.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.isBrowser) {
            try {
                this.element = document.querySelector('.md-textarea-auto');
            }
            catch (error) { }
        }
        /** @type {?} */
        var type = this.el.nativeElement.type;
        if (this.focusCheckbox && type === 'checkbox') {
            this._renderer.addClass(this.el.nativeElement, 'onFocusSelect');
        }
        if (this.focusRadio && type === 'radio') {
            this._renderer.addClass(this.el.nativeElement, 'onFocusSelect');
        }
    };
    /**
     * @return {?}
     */
    MdbInput.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        this.initComponent();
        this.checkValue();
    };
    /**
     * @return {?}
     */
    MdbInput.prototype.resize = /**
     * @return {?}
     */
    function () {
        if (this.el.nativeElement.classList.contains('md-textarea-auto')) {
            this._renderer.setStyle(this.el.nativeElement, 'height', 'auto');
            this._renderer.setStyle(this.el.nativeElement, 'height', this.el.nativeElement.scrollHeight + 'px');
        }
    };
    /**
     * @return {?}
     */
    MdbInput.prototype.delayedResize = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.resize();
        }), 0);
    };
    /**
     * @return {?}
     */
    MdbInput.prototype.initComponent = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var inputId;
        /** @type {?} */
        var inputP;
        if (this.isBrowser) {
            try {
                inputId = this.el.nativeElement.id;
            }
            catch (err) { }
            try {
                inputP = this.el.nativeElement.parentNode;
            }
            catch (err) { }
            this.elLabel =
                inputP.querySelector('label[for="' + inputId + '"]') || inputP.querySelector('label');
            if (this.elLabel && this.el.nativeElement.value !== '') {
                this._renderer.addClass(this.elLabel, 'active');
            }
            this.elIcon = inputP.querySelector('i') || false;
        }
    };
    /**
     * @private
     * @return {?}
     */
    MdbInput.prototype.checkValue = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var value = '';
        if (this.elLabel != null) {
            value = this.el.nativeElement.value || '';
            if (value === '') {
                this._renderer.removeClass(this.elLabel, 'active');
                if (this.elIcon) {
                    this._renderer.removeClass(this.elIcon, 'active');
                }
            }
            if ((value === '' && this.isClicked) ||
                (value === '' && this.el.nativeElement.placeholder) ||
                (value === '' && this.el.nativeElement.attributes.placeholder)) {
                this._renderer.addClass(this.elLabel, 'active');
            }
        }
    };
    MdbInput.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbInput]',
                },] }
    ];
    /** @nocollapse */
    MdbInput.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    MdbInput.propDecorators = {
        focusCheckbox: [{ type: Input }],
        focusRadio: [{ type: Input }],
        onfocus: [{ type: HostListener, args: ['focus',] }],
        onblur: [{ type: HostListener, args: ['blur',] }],
        onchange: [{ type: HostListener, args: ['change',] }],
        onkeydown: [{ type: HostListener, args: ['keydown', ['$event'],] }],
        oncut: [{ type: HostListener, args: ['cut',] }],
        onpaste: [{ type: HostListener, args: ['paste',] }],
        ondrop: [{ type: HostListener, args: ['drop',] }]
    };
    return MdbInput;
}());
export { MdbInput };
if (false) {
    /** @type {?} */
    MdbInput.prototype.elLabel;
    /** @type {?} */
    MdbInput.prototype.elIcon;
    /** @type {?} */
    MdbInput.prototype.focusCheckbox;
    /** @type {?} */
    MdbInput.prototype.focusRadio;
    /** @type {?} */
    MdbInput.prototype.isBrowser;
    /** @type {?} */
    MdbInput.prototype.isClicked;
    /** @type {?} */
    MdbInput.prototype.element;
    /**
     * @type {?}
     * @private
     */
    MdbInput.prototype.el;
    /**
     * @type {?}
     * @private
     */
    MdbInput.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvaW5wdXRzL2lucHV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsU0FBUyxFQUNULEtBQUssRUFFTCxZQUFZLEVBQ1osV0FBVyxFQUNYLE1BQU0sR0FFUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRXBFO0lBZUUsa0JBQ1UsRUFBYyxFQUNkLFNBQW9CLEVBQ1AsVUFBa0I7UUFGL0IsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFadkIsWUFBTyxHQUFxQixJQUFJLENBQUM7UUFDakMsV0FBTSxHQUFrQixJQUFJLENBQUM7UUFFM0Isa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsZUFBVSxHQUFHLElBQUksQ0FBQztRQUUzQixjQUFTLEdBQVEsS0FBSyxDQUFDO1FBQ3ZCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsWUFBTyxHQUFRLElBQUksQ0FBQztRQU9sQixJQUFJLENBQUMsU0FBUyxHQUFHLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7SUFFc0IsMEJBQU87OztJQUE5QjtRQUNFLElBQUk7WUFDRixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ2hELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO1FBQUMsT0FBTyxLQUFLLEVBQUUsR0FBRTtJQUNwQixDQUFDOzs7O0lBRXFCLHlCQUFNOzs7SUFBNUI7UUFDRSxJQUFJO1lBQ0YsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEtBQUssRUFBRSxFQUFFO2dCQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQ3BEO1lBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDeEI7UUFBQyxPQUFPLEtBQUssRUFBRSxHQUFFO0lBQ3BCLENBQUM7Ozs7SUFFdUIsMkJBQVE7OztJQUFoQztRQUNFLElBQUk7WUFDRixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7UUFBQyxPQUFPLEtBQUssRUFBRSxHQUFFO0lBQ3BCLENBQUM7Ozs7O0lBRW9DLDRCQUFTOzs7O0lBQTlDLFVBQStDLEtBQVU7UUFDdkQsSUFBSTtZQUNGLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUNsQyxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUU7b0JBQ2xCLFFBQVEsS0FBSyxDQUFDLE9BQU8sRUFBRTt3QkFDckIsS0FBSyxRQUFROzRCQUNYLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDOzRCQUM5QyxNQUFNO3dCQUNSLEtBQUssVUFBVTs0QkFDYixLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQzs0QkFDOUMsTUFBTTtxQkFDVDtpQkFDRjtnQkFDRCxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7b0JBQ2hCLFFBQVEsS0FBSyxDQUFDLE9BQU8sRUFBRTt3QkFDckIsS0FBSyxRQUFROzRCQUNYLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDOzRCQUMvQyxNQUFNO3dCQUNSLEtBQUssVUFBVTs0QkFDYixLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQzs0QkFDL0MsTUFBTTtxQkFDVDtpQkFDRjthQUNGO1NBQ0Y7UUFBQyxPQUFPLEtBQUssRUFBRSxHQUFFO1FBQ2xCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7O0lBQ29CLHdCQUFLOzs7SUFBMUI7UUFBQSxpQkFNQztRQUxDLElBQUk7WUFDRixVQUFVOzs7WUFBQztnQkFDVCxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDdkIsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ1A7UUFBQyxPQUFPLEtBQUssRUFBRSxHQUFFO0lBQ3BCLENBQUM7Ozs7SUFDc0IsMEJBQU87OztJQUE5QjtRQUFBLGlCQU1DO1FBTEMsSUFBSTtZQUNGLFVBQVU7OztZQUFDO2dCQUNULEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN2QixDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUM7U0FDUDtRQUFDLE9BQU8sS0FBSyxFQUFFLEdBQUU7SUFDcEIsQ0FBQzs7OztJQUNxQix5QkFBTTs7O0lBQTVCO1FBQUEsaUJBTUM7UUFMQyxJQUFJO1lBQ0YsVUFBVTs7O1lBQUM7Z0JBQ1QsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3ZCLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQztTQUNQO1FBQUMsT0FBTyxLQUFLLEVBQUUsR0FBRTtJQUNwQixDQUFDOzs7O0lBRUQsa0NBQWU7OztJQUFmO1FBQ0UsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUk7Z0JBQ0YsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUM7YUFDNUQ7WUFBQyxPQUFPLEtBQUssRUFBRSxHQUFFO1NBQ25COztZQUNLLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxJQUFJO1FBQ3ZDLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLEtBQUssVUFBVSxFQUFFO1lBQzdDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1NBQ2pFO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksS0FBSyxPQUFPLEVBQUU7WUFDdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsZUFBZSxDQUFDLENBQUM7U0FDakU7SUFDSCxDQUFDOzs7O0lBRUQscUNBQWtCOzs7SUFBbEI7UUFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCx5QkFBTTs7O0lBQU47UUFDRSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsRUFBRTtZQUNoRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDakUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQ3JCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUNyQixRQUFRLEVBQ1IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWSxHQUFHLElBQUksQ0FDMUMsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7OztJQUVELGdDQUFhOzs7SUFBYjtRQUFBLGlCQUlDO1FBSEMsVUFBVTs7O1FBQUM7WUFDVCxLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQzs7OztJQUVNLGdDQUFhOzs7SUFBcEI7O1lBQ00sT0FBTzs7WUFDUCxNQUFNO1FBQ1YsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUk7Z0JBQ0YsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQzthQUNwQztZQUFDLE9BQU8sR0FBRyxFQUFFLEdBQUU7WUFFaEIsSUFBSTtnQkFDRixNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDO2FBQzNDO1lBQUMsT0FBTyxHQUFHLEVBQUUsR0FBRTtZQUVoQixJQUFJLENBQUMsT0FBTztnQkFDVixNQUFNLENBQUMsYUFBYSxDQUFDLGFBQWEsR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN4RixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxLQUFLLEVBQUUsRUFBRTtnQkFDdEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQzthQUNqRDtZQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUM7U0FDbEQ7SUFDSCxDQUFDOzs7OztJQUVPLDZCQUFVOzs7O0lBQWxCOztZQUNNLEtBQUssR0FBRyxFQUFFO1FBQ2QsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksRUFBRTtZQUN4QixLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUMxQyxJQUFJLEtBQUssS0FBSyxFQUFFLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQ25ELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtvQkFDZixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2lCQUNuRDthQUNGO1lBQ0QsSUFDRSxDQUFDLEtBQUssS0FBSyxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDaEMsQ0FBQyxLQUFLLEtBQUssRUFBRSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztnQkFDbkQsQ0FBQyxLQUFLLEtBQUssRUFBRSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsRUFDOUQ7Z0JBQ0EsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQzthQUNqRDtTQUNGO0lBQ0gsQ0FBQzs7Z0JBMUtGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtpQkFDdkI7Ozs7Z0JBYkMsVUFBVTtnQkFDVixTQUFTOzZDQTRCTixNQUFNLFNBQUMsV0FBVzs7O2dDQVZwQixLQUFLOzZCQUNMLEtBQUs7MEJBY0wsWUFBWSxTQUFDLE9BQU87eUJBT3BCLFlBQVksU0FBQyxNQUFNOzJCQVNuQixZQUFZLFNBQUMsUUFBUTs0QkFNckIsWUFBWSxTQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQzt3QkEyQmxDLFlBQVksU0FBQyxLQUFLOzBCQU9sQixZQUFZLFNBQUMsT0FBTzt5QkFPcEIsWUFBWSxTQUFDLE1BQU07O0lBcUZ0QixlQUFDO0NBQUEsQUEzS0QsSUEyS0M7U0F2S1ksUUFBUTs7O0lBQ25CLDJCQUF3Qzs7SUFDeEMsMEJBQW9DOztJQUVwQyxpQ0FBOEI7O0lBQzlCLDhCQUEyQjs7SUFFM0IsNkJBQXVCOztJQUN2Qiw2QkFBa0I7O0lBQ2xCLDJCQUFvQjs7Ozs7SUFHbEIsc0JBQXNCOzs7OztJQUN0Qiw2QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMixcbiAgSW5wdXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIEhvc3RMaXN0ZW5lcixcbiAgUExBVEZPUk1fSUQsXG4gIEluamVjdCxcbiAgQWZ0ZXJWaWV3Q2hlY2tlZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET1dOX0FSUk9XLCBVUF9BUlJPVyB9IGZyb20gJy4uL3V0aWxzL2tleWJvYXJkLW5hdmlnYXRpb24nO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWRiSW5wdXRdJyxcbn0pXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLWNsYXNzLXN1ZmZpeFxuZXhwb3J0IGNsYXNzIE1kYklucHV0IGltcGxlbWVudHMgQWZ0ZXJWaWV3Q2hlY2tlZCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHB1YmxpYyBlbExhYmVsOiBFbGVtZW50UmVmIHwgYW55ID0gbnVsbDtcbiAgcHVibGljIGVsSWNvbjogRWxlbWVudCB8IGFueSA9IG51bGw7XG5cbiAgQElucHV0KCkgZm9jdXNDaGVja2JveCA9IHRydWU7XG4gIEBJbnB1dCgpIGZvY3VzUmFkaW8gPSB0cnVlO1xuXG4gIGlzQnJvd3NlcjogYW55ID0gZmFsc2U7XG4gIGlzQ2xpY2tlZCA9IGZhbHNlO1xuICBlbGVtZW50OiBhbnkgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBzdHJpbmdcbiAgKSB7XG4gICAgdGhpcy5pc0Jyb3dzZXIgPSBpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybUlkKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJykgb25mb2N1cygpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbExhYmVsLCAnYWN0aXZlJyk7XG4gICAgICB0aGlzLmlzQ2xpY2tlZCA9IHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdibHVyJykgb25ibHVyKCkge1xuICAgIHRyeSB7XG4gICAgICBpZiAodGhpcy5lbC5uYXRpdmVFbGVtZW50LnZhbHVlID09PSAnJykge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsTGFiZWwsICdhY3RpdmUnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaXNDbGlja2VkID0gZmFsc2U7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjaGFuZ2UnKSBvbmNoYW5nZSgpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5jaGVja1ZhbHVlKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSkgb25rZXlkb3duKGV2ZW50OiBhbnkpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC50eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgICBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgVVBfQVJST1c6XG4gICAgICAgICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9ICtldmVudC50YXJnZXQudmFsdWUgKyAxMDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERPV05fQVJST1c6XG4gICAgICAgICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9ICtldmVudC50YXJnZXQudmFsdWUgLSAxMDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5hbHRLZXkpIHtcbiAgICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgVVBfQVJST1c6XG4gICAgICAgICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9ICtldmVudC50YXJnZXQudmFsdWUgKyAwLjE7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBET1dOX0FSUk9XOlxuICAgICAgICAgICAgICBldmVudC50YXJnZXQudmFsdWUgPSArZXZlbnQudGFyZ2V0LnZhbHVlIC0gMC4xO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge31cbiAgICB0aGlzLmRlbGF5ZWRSZXNpemUoKTtcbiAgfVxuICBASG9zdExpc3RlbmVyKCdjdXQnKSBvbmN1dCgpIHtcbiAgICB0cnkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZGVsYXllZFJlc2l6ZSgpO1xuICAgICAgfSwgMCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcigncGFzdGUnKSBvbnBhc3RlKCkge1xuICAgIHRyeSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5kZWxheWVkUmVzaXplKCk7XG4gICAgICB9LCAwKTtcbiAgICB9IGNhdGNoIChlcnJvcikge31cbiAgfVxuICBASG9zdExpc3RlbmVyKCdkcm9wJykgb25kcm9wKCkge1xuICAgIHRyeSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5kZWxheWVkUmVzaXplKCk7XG4gICAgICB9LCAwKTtcbiAgICB9IGNhdGNoIChlcnJvcikge31cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5pc0Jyb3dzZXIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZC10ZXh0YXJlYS1hdXRvJyk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge31cbiAgICB9XG4gICAgY29uc3QgdHlwZSA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC50eXBlO1xuICAgIGlmICh0aGlzLmZvY3VzQ2hlY2tib3ggJiYgdHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnb25Gb2N1c1NlbGVjdCcpO1xuICAgIH1cbiAgICBpZiAodGhpcy5mb2N1c1JhZGlvICYmIHR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ29uRm9jdXNTZWxlY3QnKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gICAgdGhpcy5pbml0Q29tcG9uZW50KCk7XG4gICAgdGhpcy5jaGVja1ZhbHVlKCk7XG4gIH1cblxuICByZXNpemUoKSB7XG4gICAgaWYgKHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ21kLXRleHRhcmVhLWF1dG8nKSkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgJ2F1dG8nKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICdoZWlnaHQnLFxuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0ICsgJ3B4J1xuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBkZWxheWVkUmVzaXplKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5yZXNpemUoKTtcbiAgICB9LCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBpbml0Q29tcG9uZW50KCk6IHZvaWQge1xuICAgIGxldCBpbnB1dElkO1xuICAgIGxldCBpbnB1dFA7XG4gICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XG4gICAgICB0cnkge1xuICAgICAgICBpbnB1dElkID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmlkO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7fVxuXG4gICAgICB0cnkge1xuICAgICAgICBpbnB1dFAgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgIH0gY2F0Y2ggKGVycikge31cblxuICAgICAgdGhpcy5lbExhYmVsID1cbiAgICAgICAgaW5wdXRQLnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsW2Zvcj1cIicgKyBpbnB1dElkICsgJ1wiXScpIHx8IGlucHV0UC5xdWVyeVNlbGVjdG9yKCdsYWJlbCcpO1xuICAgICAgaWYgKHRoaXMuZWxMYWJlbCAmJiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudmFsdWUgIT09ICcnKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxMYWJlbCwgJ2FjdGl2ZScpO1xuICAgICAgfVxuICAgICAgdGhpcy5lbEljb24gPSBpbnB1dFAucXVlcnlTZWxlY3RvcignaScpIHx8IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tWYWx1ZSgpOiB2b2lkIHtcbiAgICBsZXQgdmFsdWUgPSAnJztcbiAgICBpZiAodGhpcy5lbExhYmVsICE9IG51bGwpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnZhbHVlIHx8ICcnO1xuICAgICAgaWYgKHZhbHVlID09PSAnJykge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsTGFiZWwsICdhY3RpdmUnKTtcbiAgICAgICAgaWYgKHRoaXMuZWxJY29uKSB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbEljb24sICdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICAodmFsdWUgPT09ICcnICYmIHRoaXMuaXNDbGlja2VkKSB8fFxuICAgICAgICAodmFsdWUgPT09ICcnICYmIHRoaXMuZWwubmF0aXZlRWxlbWVudC5wbGFjZWhvbGRlcikgfHxcbiAgICAgICAgKHZhbHVlID09PSAnJyAmJiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuYXR0cmlidXRlcy5wbGFjZWhvbGRlcilcbiAgICAgICkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsTGFiZWwsICdhY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==