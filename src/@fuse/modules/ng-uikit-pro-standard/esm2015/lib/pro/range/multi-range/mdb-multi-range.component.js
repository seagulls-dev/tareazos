/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, forwardRef, Input, Output, Renderer2, ViewChild, ViewEncapsulation, ChangeDetectionStrategy, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
/** @type {?} */
export const RANGE_VALUE_ACCESOR = {
    provide: NG_VALUE_ACCESSOR,
    // tslint:disable-next-line: no-use-before-declare
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => MdbMultiRangeInputComponent)),
    multi: true,
};
export class MdbMultiRangeInputComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
        this.value = { first: 0, second: 0 };
        this.min = 0;
        this.max = 100;
        this.rangeValueChange = new EventEmitter();
        this.firstVisibility = false;
        this.secondVisibility = false;
        this.cloudRange = 0;
        // Control Value Accessor Methods
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.range = this.value;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.steps = this.max - this.min;
        // fix(slider): resolve problem with not moving slider cloud when setting value with [value] or reactive forms
        // Manual call the moveValueCloud method to move range value cloud to proper position based on the `value` variable
        if (this.value) {
            this.moveValueCloud(new Event('input'), 'first', Number(this.value.first));
            this.moveValueCloud(new Event('input'), 'second', Number(this.value.second));
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    firstRangeInput(event) {
        this.rangeValueChange.emit(this.range);
        if (typeof this.range === 'object' && this.range.first === 0) {
            return this.range;
        }
        this.focusRangeInput('first');
        this.moveValueCloud(event, 'first');
    }
    /**
     * @param {?} event
     * @return {?}
     */
    secondRangeInput(event) {
        this.rangeValueChange.emit(this.range);
        if (typeof this.range === 'object' && this.range.second === 0) {
            return this.range;
        }
        this.focusRangeInput('second');
        this.moveValueCloud(event, 'second');
    }
    /**
     * @private
     * @param {?} event
     * @param {?} element
     * @param {?=} value
     * @return {?}
     */
    moveValueCloud(event, element, value) {
        // if `moveValueCloud()` is called by (input) event take value as event.target.value.
        // If it's called manually, take value from parameter.
        // if `moveValueCloud()` is called by (input) event take value as event.target.value.
        // If it's called manually, take value from parameter.
        // This is needed in situation, when slider value is set by default or ReactiveForms,
        // and value clound is not moved to proper position
        /** @type {?} */
        const newValue = event.target ? event.target.value : value;
        /** @type {?} */
        const newRelativeGain = newValue - this.min;
        /** @type {?} */
        const inputWidth = element === 'first'
            ? this.firstInput.nativeElement.offsetWidth
            : this.secondInput.nativeElement.offsetWidth;
        /** @type {?} */
        let thumbOffset = 0;
        /** @type {?} */
        const offsetAmmount = 15;
        /** @type {?} */
        const distanceFromMiddle = newRelativeGain - this.steps / 2;
        this.stepLength = inputWidth / this.steps;
        thumbOffset = (distanceFromMiddle / this.steps) * offsetAmmount;
        this.cloudRange = this.stepLength * newRelativeGain - thumbOffset;
        this.renderer.setStyle(element === 'first'
            ? this.firstRangeCloud.nativeElement
            : this.secondRangeCloud.nativeElement, 'left', this.cloudRange + 'px');
    }
    /**
     * @param {?} element
     * @return {?}
     */
    focusRangeInput(element) {
        if (this.checkIfSafari()) {
            element === 'first'
                ? this.firstInput.nativeElement.focus()
                : this.secondInput.nativeElement.focus();
        }
        element === 'first' ? (this.firstVisibility = true) : (this.secondVisibility = true);
    }
    /**
     * @param {?} element
     * @return {?}
     */
    blurRangeInput(element) {
        if (this.checkIfSafari()) {
            element === 'first'
                ? this.firstInput.nativeElement.blur()
                : this.secondInput.nativeElement.blur();
        }
        element === 'first' ? (this.firstVisibility = false) : (this.secondVisibility = false);
    }
    /**
     * @return {?}
     */
    checkIfSafari() {
        /** @type {?} */
        const isSafari = navigator.userAgent.indexOf('Safari') > -1;
        /** @type {?} */
        const isChrome = navigator.userAgent.indexOf('Chrome') > -1;
        /** @type {?} */
        const isFirefox = navigator.userAgent.indexOf('Firefox') > -1;
        /** @type {?} */
        const isOpera = navigator.userAgent.indexOf('Opera') > -1;
        if (isSafari && !isChrome && !isFirefox && !isOpera) {
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
        this.range = value;
        // fix(slider): resolve problem with not moving slider cloud when setting value with [value] or reactive forms
        // Manual call the moveValueCloud method to move range value cloud to proper position based on the `value` variable
        if (value) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.moveValueCloud(new Event('input'), 'first', Number(value.first));
                this.moveValueCloud(new Event('input'), 'second', Number(value.second));
            }), 0);
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
MdbMultiRangeInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-multi-range-input',
                template: "<div class=\"multi-range-field my-5 pb-5\">\n  <div class=\"range-field\" #rangeField>\n    <div class=\"track\">\n      <div #firstRangeCloud class=\"range-cloud\" title=\"range\"\n           [ngClass]=\"{'visible': this.firstVisibility, 'hidden': !this.firstVisibility}\">\n        <span class=\"text-transform\">{{range.first}}</span>\n      </div>\n    </div>\n    <input #firstInput\n           [value]=\"value.first\"\n           [attr.value]=\"value.first\"\n           [name]=\"name\"\n           [id]=\"id\"\n           [min]=\"min\"\n           [max]=\"max\"\n           [step]=\"step\"\n           [disabled]=\"disabled\"\n           type=\"range\"\n           class=\"mdbMultiRange original active\"\n           (input)=\"firstRangeInput($event)\"\n           [(ngModel)]=\"range.first\"\n           (focus)=\"this.firstVisibility = true\"\n           (blur)=\"this.firstVisibility = false; blurRangeInput('first')\"\n           (touchend)=\"blurRangeInput('first')\"\n           (click)=\"focusRangeInput('first')\">\n\n\n    <div class=\"track\">\n      <div #secondRangeCloud class=\"range-cloud\" title=\"range\"\n           [ngClass]=\"{'visible': this.secondVisibility, 'hidden': !this.secondVisibility}\">\n        <span class=\"text-transform\">{{range.second}}</span>\n      </div>\n    </div>\n    <input #secondInput\n           [value]=\"value.second\"\n           [attr.value]=\"value.second\"\n           [name]=\"name\"\n           [id]=\"id\"\n           [min]=\"min\"\n           [max]=\"max\"\n           [step]=\"step\"\n           [disabled]=\"disabled\"\n           type=\"range\"\n           class=\"mdbMultiRange original ghost active\"\n           (input)=\"secondRangeInput($event)\"\n           [(ngModel)]=\"range.second\"\n           (focus)=\"this.secondVisibility = true\"\n           (blur)=\"this.secondVisibility = false; blurRangeInput('second')\"\n           (touchend)=\"blurRangeInput('second')\"\n           (click)=\"focusRangeInput('second')\">\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                providers: [RANGE_VALUE_ACCESOR],
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".range-field input[type=range]{cursor:pointer;position:relative;background-color:transparent;border:1px solid #fff;outline:0;width:100%;margin:15px 0;padding:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.range-field input[type=range]:focus{outline:0}.range-field input[type=range]+.thumb{position:absolute;border:none;height:0;width:0;border-radius:50%;background-color:#4285f4;top:10px;margin-left:-6px;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.range-field input[type=range]+.thumb .value{display:block;width:30px;text-align:center;color:#4285f4;font-size:0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.range-field input[type=range]+.thumb.active{border-radius:50% 50% 50% 0}.range-field input[type=range]+.thumb.active .value{color:#fff;margin-left:-1px;margin-top:8px;font-size:10px}.range-field input[type=range]::-webkit-slider-runnable-track{height:3px;background:#c2c0c2;border:none}.range-field input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;border:none;height:14px;width:14px;border-radius:50%;background-color:#4285f4;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;margin:-5px 0 0;transition:.3s}.range-field input[type=range]:focus::-webkit-slider-runnable-track{background:#ccc}.range-field input[type=range]::-moz-range-track{height:3px;background:#c2c0c2;border:none}.range-field input[type=range]::-moz-range-thumb{border:none;height:14px;width:14px;border-radius:50%;background:#4285f4;margin-top:-5px}.range-field input[type=range]:-moz-focusring{outline:#fff solid 1px;outline-offset:-1px}.range-field input[type=range]:focus::-moz-range-track{background:#c2c0c2}.range-field input[type=range]::-ms-track{height:3px;background:0 0;border-color:transparent;border-width:6px 0;color:transparent}.range-field input[type=range]::-ms-fill-lower{background:#c2c0c2}.range-field input[type=range]::-ms-fill-upper{background:#c2c0c2}.range-field input[type=range]::-ms-thumb{border:none;height:14px;width:14px;border-radius:50%;background:#4285f4}.range-field input[type=range]:focus::-ms-fill-lower{background:#c2c0c2}.range-field input[type=range]:focus::-ms-fill-upper{background:#c2c0c2}@supports (--css:variables){input[type=range].mdbMultiRange{padding:0;margin:0;display:inline-block;vertical-align:top}input[type=range].mdbMultiRange.original{position:absolute}input[type=range].mdbMultiRange.original::-webkit-slider-thumb{position:relative;z-index:2}input[type=range].mdbMultiRange.original::-moz-range-thumb{transform:scale(1);z-index:1}input[type=range].mdbMultiRange::-moz-range-track{border-color:transparent}input[type=range].mdbMultiRange.ghost{position:relative}input[type=range].mdbMultiRange.ghost:nth-of-type(n+1){position:absolute}}.multi-range-field{position:relative}.multi-range-field input[type=range]{cursor:pointer;position:relative;background-color:transparent;border:1px solid #fff;outline:0;width:100%;margin:15px 0;padding:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.multi-range-field input[type=range]:focus{outline:0}.multi-range-field input[type=range]+.thumb{position:absolute;border:none;height:0;width:0;border-radius:50%;background-color:#4285f4;top:10px;margin-left:-6px;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.multi-range-field input[type=range]+.thumb .value{display:block;width:30px;text-align:center;color:#4285f4;font-size:0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.multi-range-field input[type=range]+.thumb.active{border-radius:50% 50% 50% 0}.multi-range-field input[type=range]+.thumb.active .value{color:#fff;margin-left:-1px;margin-top:8px;font-size:10px}.multi-range-field input[type=range]::-webkit-slider-runnable-track{height:3px;background:#c2c0c2;border:none}.multi-range-field input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;border:none;height:14px;width:14px;border-radius:50%;background-color:#4285f4;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;margin:-5px 0 0;transition:.3s}.multi-range-field input[type=range]:focus::-webkit-slider-runnable-track{background:#ccc}.multi-range-field input[type=range]::-moz-range-track{height:3px;background:#c2c0c2;border:none}.multi-range-field input[type=range]::-moz-range-thumb{border:none;height:14px;width:14px;border-radius:50%;background:#4285f4;margin-top:-5px}.multi-range-field input[type=range]:-moz-focusring{outline:#fff solid 1px;outline-offset:-1px}.multi-range-field input[type=range]:focus::-moz-range-track{background:#c2c0c2}.multi-range-field input[type=range]::-ms-track{height:3px;background:0 0;border-color:transparent;border-width:6px 0;color:transparent}.multi-range-field input[type=range]::-ms-fill-lower{background:#c2c0c2}.multi-range-field input[type=range]::-ms-fill-upper{background:#c2c0c2}.multi-range-field input[type=range]::-ms-thumb{border:none;height:14px;width:14px;border-radius:50%;background:#4285f4}.multi-range-field input[type=range]:focus::-ms-fill-lower{background:#c2c0c2}.multi-range-field input[type=range]:focus::-ms-fill-upper{background:#c2c0c2}.thumb-horizontal-wrapper{position:relative;-webkit-transform:rotate(-270deg);transform:rotate(-270deg);top:500px}.multi-range-field input[type=range]+.thumb-horizontal .value{-webkit-transform:rotate(315deg)!important;transform:rotate(315deg)!important}.range-field{position:relative}.range-field .track{position:absolute;right:8px;left:8px;margin-left:-7.5px}.range-field .track .range-cloud{height:30px;width:30px;top:-25px;background-color:#4285f4;position:absolute;color:#fff;border-radius:50%;font-size:12px;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.range-field .track .range-cloud:after{content:'';position:absolute;bottom:0;left:50%;-webkit-transform:translate(-50%,70%);transform:translate(-50%,70%);width:0;height:0;border-style:solid;border-width:7px 7px 0;border-color:#4285f4 transparent transparent}.range-field .track .range-cloud.hidden{display:none}.range-field .track .range-cloud.visible{display:block}.range-field .track .range-cloud .text-transform{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}"]
            }] }
];
/** @nocollapse */
MdbMultiRangeInputComponent.ctorParameters = () => [
    { type: Renderer2 }
];
MdbMultiRangeInputComponent.propDecorators = {
    id: [{ type: Input }],
    required: [{ type: Input }],
    name: [{ type: Input }],
    value: [{ type: Input }],
    disabled: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    step: [{ type: Input }],
    rangeValueChange: [{ type: Output }],
    firstInput: [{ type: ViewChild, args: ['firstInput', { static: true },] }],
    secondInput: [{ type: ViewChild, args: ['secondInput', { static: true },] }],
    firstRangeCloud: [{ type: ViewChild, args: ['firstRangeCloud', { static: true },] }],
    secondRangeCloud: [{ type: ViewChild, args: ['secondRangeCloud', { static: true },] }],
    rangeField: [{ type: ViewChild, args: ['rangeField', { static: true },] }]
};
if (false) {
    /** @type {?} */
    MdbMultiRangeInputComponent.prototype.id;
    /** @type {?} */
    MdbMultiRangeInputComponent.prototype.required;
    /** @type {?} */
    MdbMultiRangeInputComponent.prototype.name;
    /** @type {?} */
    MdbMultiRangeInputComponent.prototype.value;
    /** @type {?} */
    MdbMultiRangeInputComponent.prototype.disabled;
    /** @type {?} */
    MdbMultiRangeInputComponent.prototype.min;
    /** @type {?} */
    MdbMultiRangeInputComponent.prototype.max;
    /** @type {?} */
    MdbMultiRangeInputComponent.prototype.step;
    /** @type {?} */
    MdbMultiRangeInputComponent.prototype.rangeValueChange;
    /** @type {?} */
    MdbMultiRangeInputComponent.prototype.firstInput;
    /** @type {?} */
    MdbMultiRangeInputComponent.prototype.secondInput;
    /** @type {?} */
    MdbMultiRangeInputComponent.prototype.firstRangeCloud;
    /** @type {?} */
    MdbMultiRangeInputComponent.prototype.secondRangeCloud;
    /** @type {?} */
    MdbMultiRangeInputComponent.prototype.rangeField;
    /** @type {?} */
    MdbMultiRangeInputComponent.prototype.range;
    /** @type {?} */
    MdbMultiRangeInputComponent.prototype.steps;
    /** @type {?} */
    MdbMultiRangeInputComponent.prototype.stepLength;
    /** @type {?} */
    MdbMultiRangeInputComponent.prototype.firstVisibility;
    /** @type {?} */
    MdbMultiRangeInputComponent.prototype.secondVisibility;
    /** @type {?} */
    MdbMultiRangeInputComponent.prototype.cloudRange;
    /** @type {?} */
    MdbMultiRangeInputComponent.prototype.onChange;
    /** @type {?} */
    MdbMultiRangeInputComponent.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    MdbMultiRangeInputComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLW11bHRpLXJhbmdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vcmFuZ2UvbXVsdGktcmFuZ2UvbWRiLW11bHRpLXJhbmdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsaUJBQWlCLEVBR2pCLHVCQUF1QixHQUN4QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRXpFLE1BQU0sT0FBTyxtQkFBbUIsR0FBUTtJQUN0QyxPQUFPLEVBQUUsaUJBQWlCOztJQUUxQixXQUFXLEVBQUUsVUFBVTs7O0lBQUMsR0FBRyxFQUFFLENBQUMsMkJBQTJCLEVBQUM7SUFDMUQsS0FBSyxFQUFFLElBQUk7Q0FDWjtBQVVELE1BQU0sT0FBTywyQkFBMkI7Ozs7SUEwQnRDLFlBQW9CLFFBQW1CO1FBQW5CLGFBQVEsR0FBUixRQUFRLENBQVc7UUF0QjlCLFVBQUssR0FBd0QsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUVyRixRQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ1IsUUFBRyxHQUFHLEdBQUcsQ0FBQztRQUdULHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFxQyxDQUFDO1FBWW5GLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN6QixlQUFVLEdBQUcsQ0FBQyxDQUFDOztRQXdHZixhQUFROzs7O1FBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRSxHQUFFLENBQUMsRUFBQztRQUMxQixjQUFTOzs7UUFBRyxHQUFHLEVBQUUsR0FB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eEIsdURBQXlCOztJQUN6QixpREFBZTs7SUF3R2YsK0NBQTBCOztJQUMxQixnREFBcUI7Ozs7O0lBdkdULCtDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIE9uSW5pdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgY29uc3QgUkFOR0VfVkFMVUVfQUNDRVNPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11c2UtYmVmb3JlLWRlY2xhcmVcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTWRiTXVsdGlSYW5nZUlucHV0Q29tcG9uZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItbXVsdGktcmFuZ2UtaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJ21kYi1tdWx0aS1yYW5nZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuLy4uL3JhbmdlLW1vZHVsZS5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByb3ZpZGVyczogW1JBTkdFX1ZBTFVFX0FDQ0VTT1JdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTWRiTXVsdGlSYW5nZUlucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJlcXVpcmVkOiBib29sZWFuO1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHZhbHVlOiB7IGZpcnN0OiBudW1iZXIgfCBzdHJpbmc7IHNlY29uZDogbnVtYmVyIHwgc3RyaW5nIH0gPSB7IGZpcnN0OiAwLCBzZWNvbmQ6IDAgfTtcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG1pbiA9IDA7XG4gIEBJbnB1dCgpIG1heCA9IDEwMDtcbiAgQElucHV0KCkgc3RlcDogbnVtYmVyO1xuXG4gIEBPdXRwdXQoKSByYW5nZVZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx7IGZpcnN0OiBudW1iZXI7IHNlY29uZDogbnVtYmVyIH0+KCk7XG5cbiAgQFZpZXdDaGlsZCgnZmlyc3RJbnB1dCcsIHsgc3RhdGljOiB0cnVlIH0pIGZpcnN0SW5wdXQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3NlY29uZElucHV0JywgeyBzdGF0aWM6IHRydWUgfSkgc2Vjb25kSW5wdXQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2ZpcnN0UmFuZ2VDbG91ZCcsIHsgc3RhdGljOiB0cnVlIH0pIGZpcnN0UmFuZ2VDbG91ZDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnc2Vjb25kUmFuZ2VDbG91ZCcsIHsgc3RhdGljOiB0cnVlIH0pIHNlY29uZFJhbmdlQ2xvdWQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3JhbmdlRmllbGQnLCB7IHN0YXRpYzogdHJ1ZSB9KSByYW5nZUZpZWxkOiBFbGVtZW50UmVmO1xuXG4gIHJhbmdlOiBhbnk7XG5cbiAgc3RlcHM6IG51bWJlcjtcbiAgc3RlcExlbmd0aDogbnVtYmVyO1xuICBmaXJzdFZpc2liaWxpdHkgPSBmYWxzZTtcbiAgc2Vjb25kVmlzaWJpbGl0eSA9IGZhbHNlO1xuICBjbG91ZFJhbmdlID0gMDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yYW5nZSA9IHRoaXMudmFsdWU7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5zdGVwcyA9IHRoaXMubWF4IC0gdGhpcy5taW47XG5cbiAgICAvLyBmaXgoc2xpZGVyKTogcmVzb2x2ZSBwcm9ibGVtIHdpdGggbm90IG1vdmluZyBzbGlkZXIgY2xvdWQgd2hlbiBzZXR0aW5nIHZhbHVlIHdpdGggW3ZhbHVlXSBvciByZWFjdGl2ZSBmb3Jtc1xuICAgIC8vIE1hbnVhbCBjYWxsIHRoZSBtb3ZlVmFsdWVDbG91ZCBtZXRob2QgdG8gbW92ZSByYW5nZSB2YWx1ZSBjbG91ZCB0byBwcm9wZXIgcG9zaXRpb24gYmFzZWQgb24gdGhlIGB2YWx1ZWAgdmFyaWFibGVcbiAgICBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgdGhpcy5tb3ZlVmFsdWVDbG91ZChuZXcgRXZlbnQoJ2lucHV0JyksICdmaXJzdCcsIE51bWJlcih0aGlzLnZhbHVlLmZpcnN0KSk7XG4gICAgICB0aGlzLm1vdmVWYWx1ZUNsb3VkKG5ldyBFdmVudCgnaW5wdXQnKSwgJ3NlY29uZCcsIE51bWJlcih0aGlzLnZhbHVlLnNlY29uZCkpO1xuICAgIH1cbiAgfVxuXG4gIGZpcnN0UmFuZ2VJbnB1dChldmVudDogYW55KSB7XG4gICAgdGhpcy5yYW5nZVZhbHVlQ2hhbmdlLmVtaXQodGhpcy5yYW5nZSk7XG5cbiAgICBpZiAodHlwZW9mIHRoaXMucmFuZ2UgPT09ICdvYmplY3QnICYmIHRoaXMucmFuZ2UuZmlyc3QgPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnJhbmdlO1xuICAgIH1cblxuICAgIHRoaXMuZm9jdXNSYW5nZUlucHV0KCdmaXJzdCcpO1xuICAgIHRoaXMubW92ZVZhbHVlQ2xvdWQoZXZlbnQsICdmaXJzdCcpO1xuICB9XG5cbiAgc2Vjb25kUmFuZ2VJbnB1dChldmVudDogYW55KSB7XG4gICAgdGhpcy5yYW5nZVZhbHVlQ2hhbmdlLmVtaXQodGhpcy5yYW5nZSk7XG5cbiAgICBpZiAodHlwZW9mIHRoaXMucmFuZ2UgPT09ICdvYmplY3QnICYmIHRoaXMucmFuZ2Uuc2Vjb25kID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5yYW5nZTtcbiAgICB9XG5cbiAgICB0aGlzLmZvY3VzUmFuZ2VJbnB1dCgnc2Vjb25kJyk7XG4gICAgdGhpcy5tb3ZlVmFsdWVDbG91ZChldmVudCwgJ3NlY29uZCcpO1xuICB9XG5cbiAgcHJpdmF0ZSBtb3ZlVmFsdWVDbG91ZChldmVudDogYW55LCBlbGVtZW50OiBzdHJpbmcsIHZhbHVlPzogbnVtYmVyKSB7XG4gICAgLy8gaWYgYG1vdmVWYWx1ZUNsb3VkKClgIGlzIGNhbGxlZCBieSAoaW5wdXQpIGV2ZW50IHRha2UgdmFsdWUgYXMgZXZlbnQudGFyZ2V0LnZhbHVlLlxuICAgIC8vIElmIGl0J3MgY2FsbGVkIG1hbnVhbGx5LCB0YWtlIHZhbHVlIGZyb20gcGFyYW1ldGVyLlxuXG4gICAgLy8gVGhpcyBpcyBuZWVkZWQgaW4gc2l0dWF0aW9uLCB3aGVuIHNsaWRlciB2YWx1ZSBpcyBzZXQgYnkgZGVmYXVsdCBvciBSZWFjdGl2ZUZvcm1zLFxuICAgIC8vIGFuZCB2YWx1ZSBjbG91bmQgaXMgbm90IG1vdmVkIHRvIHByb3BlciBwb3NpdGlvblxuICAgIGNvbnN0IG5ld1ZhbHVlID0gZXZlbnQudGFyZ2V0ID8gZXZlbnQudGFyZ2V0LnZhbHVlIDogdmFsdWU7XG4gICAgY29uc3QgbmV3UmVsYXRpdmVHYWluID0gbmV3VmFsdWUgLSB0aGlzLm1pbjtcbiAgICBjb25zdCBpbnB1dFdpZHRoID1cbiAgICAgIGVsZW1lbnQgPT09ICdmaXJzdCdcbiAgICAgICAgPyB0aGlzLmZpcnN0SW5wdXQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aFxuICAgICAgICA6IHRoaXMuc2Vjb25kSW5wdXQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcblxuICAgIGxldCB0aHVtYk9mZnNldCA9IDA7XG4gICAgY29uc3Qgb2Zmc2V0QW1tb3VudCA9IDE1O1xuICAgIGNvbnN0IGRpc3RhbmNlRnJvbU1pZGRsZSA9IG5ld1JlbGF0aXZlR2FpbiAtIHRoaXMuc3RlcHMgLyAyO1xuXG4gICAgdGhpcy5zdGVwTGVuZ3RoID0gaW5wdXRXaWR0aCAvIHRoaXMuc3RlcHM7XG5cbiAgICB0aHVtYk9mZnNldCA9IChkaXN0YW5jZUZyb21NaWRkbGUgLyB0aGlzLnN0ZXBzKSAqIG9mZnNldEFtbW91bnQ7XG4gICAgdGhpcy5jbG91ZFJhbmdlID0gdGhpcy5zdGVwTGVuZ3RoICogbmV3UmVsYXRpdmVHYWluIC0gdGh1bWJPZmZzZXQ7XG5cbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgZWxlbWVudCA9PT0gJ2ZpcnN0J1xuICAgICAgICA/IHRoaXMuZmlyc3RSYW5nZUNsb3VkLm5hdGl2ZUVsZW1lbnRcbiAgICAgICAgOiB0aGlzLnNlY29uZFJhbmdlQ2xvdWQubmF0aXZlRWxlbWVudCxcbiAgICAgICdsZWZ0JyxcbiAgICAgIHRoaXMuY2xvdWRSYW5nZSArICdweCdcbiAgICApO1xuICB9XG5cbiAgZm9jdXNSYW5nZUlucHV0KGVsZW1lbnQ6IHN0cmluZykge1xuICAgIGlmICh0aGlzLmNoZWNrSWZTYWZhcmkoKSkge1xuICAgICAgZWxlbWVudCA9PT0gJ2ZpcnN0J1xuICAgICAgICA/IHRoaXMuZmlyc3RJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKClcbiAgICAgICAgOiB0aGlzLnNlY29uZElucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gICAgZWxlbWVudCA9PT0gJ2ZpcnN0JyA/ICh0aGlzLmZpcnN0VmlzaWJpbGl0eSA9IHRydWUpIDogKHRoaXMuc2Vjb25kVmlzaWJpbGl0eSA9IHRydWUpO1xuICB9XG5cbiAgYmx1clJhbmdlSW5wdXQoZWxlbWVudDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuY2hlY2tJZlNhZmFyaSgpKSB7XG4gICAgICBlbGVtZW50ID09PSAnZmlyc3QnXG4gICAgICAgID8gdGhpcy5maXJzdElucHV0Lm5hdGl2ZUVsZW1lbnQuYmx1cigpXG4gICAgICAgIDogdGhpcy5zZWNvbmRJbnB1dC5uYXRpdmVFbGVtZW50LmJsdXIoKTtcbiAgICB9XG4gICAgZWxlbWVudCA9PT0gJ2ZpcnN0JyA/ICh0aGlzLmZpcnN0VmlzaWJpbGl0eSA9IGZhbHNlKSA6ICh0aGlzLnNlY29uZFZpc2liaWxpdHkgPSBmYWxzZSk7XG4gIH1cblxuICBjaGVja0lmU2FmYXJpKCkge1xuICAgIGNvbnN0IGlzU2FmYXJpID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdTYWZhcmknKSA+IC0xO1xuICAgIGNvbnN0IGlzQ2hyb21lID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdDaHJvbWUnKSA+IC0xO1xuICAgIGNvbnN0IGlzRmlyZWZveCA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignRmlyZWZveCcpID4gLTE7XG4gICAgY29uc3QgaXNPcGVyYSA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignT3BlcmEnKSA+IC0xO1xuXG4gICAgaWYgKGlzU2FmYXJpICYmICFpc0Nocm9tZSAmJiAhaXNGaXJlZm94ICYmICFpc09wZXJhKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8vIENvbnRyb2wgVmFsdWUgQWNjZXNzb3IgTWV0aG9kc1xuICBvbkNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xuICBvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5yYW5nZSA9IHZhbHVlO1xuXG4gICAgLy8gZml4KHNsaWRlcik6IHJlc29sdmUgcHJvYmxlbSB3aXRoIG5vdCBtb3Zpbmcgc2xpZGVyIGNsb3VkIHdoZW4gc2V0dGluZyB2YWx1ZSB3aXRoIFt2YWx1ZV0gb3IgcmVhY3RpdmUgZm9ybXNcbiAgICAvLyBNYW51YWwgY2FsbCB0aGUgbW92ZVZhbHVlQ2xvdWQgbWV0aG9kIHRvIG1vdmUgcmFuZ2UgdmFsdWUgY2xvdWQgdG8gcHJvcGVyIHBvc2l0aW9uIGJhc2VkIG9uIHRoZSBgdmFsdWVgIHZhcmlhYmxlXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5tb3ZlVmFsdWVDbG91ZChuZXcgRXZlbnQoJ2lucHV0JyksICdmaXJzdCcsIE51bWJlcih2YWx1ZS5maXJzdCkpO1xuICAgICAgICB0aGlzLm1vdmVWYWx1ZUNsb3VkKG5ldyBFdmVudCgnaW5wdXQnKSwgJ3NlY29uZCcsIE51bWJlcih2YWx1ZS5zZWNvbmQpKTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxufVxuIl19