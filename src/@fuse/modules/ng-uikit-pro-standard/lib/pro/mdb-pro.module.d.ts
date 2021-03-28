import { ModuleWithProviders } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './animated-cards/animated-cards.module';
import * as ɵngcc2 from './chips/chips.module';
import * as ɵngcc3 from './progressbars/index';
import * as ɵngcc4 from './tabs-pills/tabset.module';
import * as ɵngcc5 from './material-select/select.module';
import * as ɵngcc6 from './date-picker/datepicker.module';
import * as ɵngcc7 from './time-picker/timepicker.module';
import * as ɵngcc8 from './lightbox/light-box.module';
import * as ɵngcc9 from './sidenav/sidenav.module';
import * as ɵngcc10 from './easy-charts/chart-simple.module';
import * as ɵngcc11 from './accordion/index';
import * as ɵngcc12 from './sticky-content/sticky-content.module';
import * as ɵngcc13 from './smoothscroll/mdb-page-scroll.module';
import * as ɵngcc14 from './inputs/char-counter.module';
import * as ɵngcc15 from './scroll-spy/scroll-spy.module';
import * as ɵngcc16 from './auto-format/auto-format.module';
import * as ɵngcc17 from './range/range.module';
import * as ɵngcc18 from './auto-completer/auto-completer.module';
import * as ɵngcc19 from './stepper/stepper.module';
import * as ɵngcc20 from './tree-view/tree-view.module';
import * as ɵngcc21 from './file-input/module/mdb-uploader.module';
export { MdbTreeModule, MdbTreeComponent } from './tree-view/index';
export { MdbStepperComponent, MdbStepComponent, StepperModule } from './stepper/index';
export { MdbAutoCompleterComponent, MdbOptionComponent, MdbAutoCompleterDirective, AutoCompleterModule, MdbAutoCompleterOptionDirective, } from './auto-completer/index';
export { RangeModule, MdbRangeInputComponent } from './range/index';
export { AutoFormatModule, MdbDateFormatDirective, MdbCreditCardDirective, MdbCvvDirective, } from './auto-format/index';
export { ScrollSpyModule, ScrollSpyDirective, ScrollSpyWindowDirective, ScrollSpyElementDirective, ScrollSpyLinkDirective, ScrollSpyService, } from './scroll-spy/index';
export { AnimatedCardsModule, CardRotatingComponent, CardRevealComponent, } from './animated-cards/index';
export { ProgressbarComponent, ProgressbarConfigComponent, ProgressbarModule, ProgressBars, ProgressDirective, ProgressSpinnerComponent, BarComponent, } from './progressbars/index';
export { MaterialChipsComponent, ChipsModule } from './chips/index';
export { TabDirective, TabHeadingDirective, TabsetComponent, TabsetConfig, TabsModule, NgTranscludeDirective, } from './tabs-pills/index';
export { MDBSpinningPreloader } from './preloader/preloader.service';
export { SelectModule, Diacritics, Option, OptionList, IOption, SELECT_VALUE_ACCESSOR, SelectComponent, SelectDropdownComponent, } from './material-select/index';
export { MDBDatePickerComponent, DatepickerModule, IMyCalendarDay, IMyCalendarViewChanged, IMyDate, IMyDateModel, IMyDateRange, IMyDayLabels, IMyInputAutoFill, IMyInputFieldChanged, IMyInputFocusBlur, IMyLocales, IMyMarkedDate, IMyMarkedDates, IMyMonth, IMyMonthLabels, IMyOptions, IMyWeek, IMyWeekday, InputAutoFillDirective, MYDP_VALUE_ACCESSOR, UtilService, LocaleService, FocusDirective, } from './date-picker/index';
export { TimePickerModule, ClockPickerComponent } from './time-picker/index';
export { LightBoxModule, ImageModalComponent } from './lightbox/index';
export { SidenavComponent, SidenavModule } from './sidenav/index';
export { ChartSimpleModule, EasyPieChartComponent, SimpleChartComponent, } from './easy-charts/index';
export { SBItemComponent, SBItemBodyComponent, SBItemHeadComponent, SqueezeBoxComponent, AccordionModule, } from './accordion/index';
export { MdbStickyDirective, StickyContentModule } from './sticky-content/index';
export { SmoothscrollModule, PageScrollDirective, PageScrollConfig, PageScrollingViews, PageScrollInstance, PageScrollService, PageScrollTarget, PageScrollUtilService, EasingLogic, } from './smoothscroll/index';
export { CharCounterDirective, CharCounterModule } from './inputs/index';
export { MDBFileDropDirective, MDBFileSelectDirective, FileInputModule, MDBUploaderService, UploadFile, UploadOutput, UploadInput, humanizeBytes, } from './file-input/index';
export declare class MDBRootModulePro {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<MDBRootModulePro, never, [typeof ɵngcc1.AnimatedCardsModule, typeof ɵngcc2.ChipsModule, typeof ɵngcc3.PreloadersModule, typeof ɵngcc4.TabsModule, typeof ɵngcc5.SelectModule, typeof ɵngcc6.DatepickerModule, typeof ɵngcc7.TimePickerModule, typeof ɵngcc8.LightBoxModule, typeof ɵngcc9.SidenavModule, typeof ɵngcc10.ChartSimpleModule, typeof ɵngcc11.AccordionModule, typeof ɵngcc12.StickyContentModule, typeof ɵngcc13.SmoothscrollModule, typeof ɵngcc14.CharCounterModule, typeof ɵngcc15.ScrollSpyModule, typeof ɵngcc16.AutoFormatModule, typeof ɵngcc17.RangeModule, typeof ɵngcc18.AutoCompleterModule, typeof ɵngcc19.StepperModule, typeof ɵngcc20.MdbTreeModule], [typeof ɵngcc1.AnimatedCardsModule, typeof ɵngcc21.FileInputModule, typeof ɵngcc2.ChipsModule, typeof ɵngcc3.ProgressBars, typeof ɵngcc4.TabsModule, typeof ɵngcc5.SelectModule, typeof ɵngcc6.DatepickerModule, typeof ɵngcc7.TimePickerModule, typeof ɵngcc8.LightBoxModule, typeof ɵngcc9.SidenavModule, typeof ɵngcc10.ChartSimpleModule, typeof ɵngcc11.AccordionModule, typeof ɵngcc12.StickyContentModule, typeof ɵngcc13.SmoothscrollModule, typeof ɵngcc14.CharCounterModule, typeof ɵngcc15.ScrollSpyModule, typeof ɵngcc16.AutoFormatModule, typeof ɵngcc17.RangeModule, typeof ɵngcc18.AutoCompleterModule, typeof ɵngcc19.StepperModule, typeof ɵngcc20.MdbTreeModule]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<MDBRootModulePro>;
}
export declare class MDBBootstrapModulePro {
    static forRoot(): ModuleWithProviders<MDBRootModulePro>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<MDBBootstrapModulePro, never, never, [typeof ɵngcc1.AnimatedCardsModule, typeof ɵngcc21.FileInputModule, typeof ɵngcc2.ChipsModule, typeof ɵngcc3.ProgressBars, typeof ɵngcc4.TabsModule, typeof ɵngcc5.SelectModule, typeof ɵngcc6.DatepickerModule, typeof ɵngcc7.TimePickerModule, typeof ɵngcc8.LightBoxModule, typeof ɵngcc9.SidenavModule, typeof ɵngcc10.ChartSimpleModule, typeof ɵngcc11.AccordionModule, typeof ɵngcc12.StickyContentModule, typeof ɵngcc13.SmoothscrollModule, typeof ɵngcc14.CharCounterModule, typeof ɵngcc15.ScrollSpyModule, typeof ɵngcc16.AutoFormatModule, typeof ɵngcc17.RangeModule, typeof ɵngcc18.AutoCompleterModule, typeof ɵngcc19.StepperModule, typeof ɵngcc20.MdbTreeModule]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<MDBBootstrapModulePro>;
}

//# sourceMappingURL=mdb-pro.module.d.ts.map