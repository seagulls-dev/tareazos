import { AfterViewInit, EventEmitter, OnChanges, OnInit, ElementRef, Renderer2, ChangeDetectorRef, SimpleChanges, OnDestroy } from '@angular/core';
import { Option } from './option';
import { OptionList } from './option-list';
import * as ɵngcc0 from '@angular/core';
export declare class SelectDropdownComponent implements AfterViewInit, OnChanges, OnInit, OnDestroy {
    _elementRef: ElementRef;
    _renderer: Renderer2;
    private cdRef;
    filterEnabled: boolean;
    filterAutocomplete: boolean;
    highlightColor: string;
    highlightTextColor: string;
    left: number;
    multiple: boolean;
    notFoundMsg: string;
    optionList: OptionList;
    top: number;
    width: number;
    placeholder: string;
    customClass: string;
    visibleOptions: number;
    dropdownHeight: number;
    dropdownMaxHeight: number;
    optionHeight: number;
    enableSelectAll: boolean;
    selectAllLabel: string;
    outline: boolean;
    close: EventEmitter<boolean>;
    optionClicked: EventEmitter<Option>;
    singleFilterClick: EventEmitter<null>;
    singleFilterInput: EventEmitter<string>;
    singleFilterKeydown: EventEmitter<any>;
    animationDone: EventEmitter<any>;
    animationStart: EventEmitter<any>;
    selectAll: EventEmitter<boolean>;
    filterInput: any;
    optionsList: any;
    dropdownContent: ElementRef;
    customContent: ElementRef;
    disabledColor: string;
    disabledTextColor: string;
    state: string;
    startHeight: any;
    endHeight: any;
    hasOptionsItems: boolean;
    private _destroy;
    private _pressedKeysStream;
    private _pressedKeys;
    selectAllSelected: boolean;
    constructor(_elementRef: ElementRef, _renderer: Renderer2, cdRef: ChangeDetectorRef);
    highlightedItem: any;
    searchIndex: number;
    previousKey: string;
    onWindowKeydown(event: any): void;
    highlightOptionByTyping(): void;
    navigateThroughArray(key: string, itemSource: any): void;
    /** Event handlers. **/
    onkeyup(): void;
    onkeydown(): void;
    ngOnInit(): void;
    setDropdownHeight(): void;
    setVisibleOptionsNumber(): void;
    setOptionHeight(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    onSingleFilterClick(): void;
    onSingleFilterInput(event: any): void;
    onSingleFilterKeydown(event: any): void;
    onOptionsWheel(event: any): void;
    onOptionClick(option: Option): void;
    /** Initialization. **/
    private optionsReset;
    /** View. **/
    getOptionStyle(option: Option): any;
    onSelectAllClick(): void;
    updateSelectAllState(): void;
    clearFilterInput(): void;
    onAnimationDone(): void;
    onAnimationStart(): void;
    moveHighlightedIntoView(): void;
    private handleOptionsWheel;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SelectDropdownComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SelectDropdownComponent, "mdb-select-dropdown", never, {
    "customClass": "customClass";
    "visibleOptions": "visibleOptions";
    "selectAllLabel": "selectAllLabel";
    "outline": "outline";
    "filterEnabled": "filterEnabled";
    "filterAutocomplete": "filterAutocomplete";
    "highlightColor": "highlightColor";
    "highlightTextColor": "highlightTextColor";
    "left": "left";
    "multiple": "multiple";
    "notFoundMsg": "notFoundMsg";
    "optionList": "optionList";
    "top": "top";
    "width": "width";
    "placeholder": "placeholder";
    "dropdownHeight": "dropdownHeight";
    "dropdownMaxHeight": "dropdownMaxHeight";
    "optionHeight": "optionHeight";
    "enableSelectAll": "enableSelectAll";
}, {
    "close": "close";
    "optionClicked": "optionClicked";
    "singleFilterClick": "singleFilterClick";
    "singleFilterInput": "singleFilterInput";
    "singleFilterKeydown": "singleFilterKeydown";
    "animationDone": "animationDone";
    "animationStart": "animationStart";
    "selectAll": "selectAll";
}, never>;
}

//# sourceMappingURL=select-dropdown.component.d.ts.map