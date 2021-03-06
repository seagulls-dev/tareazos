/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
export { BarComponent } from './bar.component';
export { ProgressDirective } from './progress.directive';
export { ProgressbarComponent } from './progressbar.component';
export { ProgressbarModule } from './progressbar.module';
export { ProgressbarConfigComponent } from './progressbar.config.component';
export { ProgressSpinnerComponent } from './progress-spinner.component';
import { ProgressbarModule } from './progressbar.module';
import { MdProgressSpinnerModule } from './progress-spinner-module/index';
import { MdProgressBarModule } from './progress-bars-module/index';
/** @type {?} */
const MATERIAL_MODULES = [MdProgressBarModule, MdProgressSpinnerModule, ProgressbarModule];
export class PreloadersModule {
}
PreloadersModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    MdProgressBarModule.forRoot(),
                    MdProgressSpinnerModule.forRoot(),
                    ProgressbarModule.forRoot(),
                ],
                exports: MATERIAL_MODULES,
            },] }
];
export class ProgressBars {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: PreloadersModule };
    }
}
ProgressBars.decorators = [
    { type: NgModule, args: [{
                imports: MATERIAL_MODULES,
                exports: MATERIAL_MODULES,
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3Byb2dyZXNzYmFycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXpELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztNQUU3RCxnQkFBZ0IsR0FBRyxDQUFDLG1CQUFtQixFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixDQUFDO0FBVTFGLE1BQU0sT0FBTyxnQkFBZ0I7OztZQVI1QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLG1CQUFtQixDQUFDLE9BQU8sRUFBRTtvQkFDN0IsdUJBQXVCLENBQUMsT0FBTyxFQUFFO29CQUNqQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUU7aUJBQzVCO2dCQUNELE9BQU8sRUFBRSxnQkFBZ0I7YUFDMUI7O0FBT0QsTUFBTSxPQUFPLFlBQVk7Ozs7SUFDdkIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLENBQUM7SUFDeEMsQ0FBQzs7O1lBUEYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxnQkFBZ0I7Z0JBQ3pCLE9BQU8sRUFBRSxnQkFBZ0I7YUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgeyBCYXJDb21wb25lbnQgfSBmcm9tICcuL2Jhci5jb21wb25lbnQnO1xuZXhwb3J0IHsgUHJvZ3Jlc3NEaXJlY3RpdmUgfSBmcm9tICcuL3Byb2dyZXNzLmRpcmVjdGl2ZSc7XG5leHBvcnQgeyBQcm9ncmVzc2JhckNvbXBvbmVudCB9IGZyb20gJy4vcHJvZ3Jlc3NiYXIuY29tcG9uZW50JztcbmV4cG9ydCB7IFByb2dyZXNzYmFyTW9kdWxlIH0gZnJvbSAnLi9wcm9ncmVzc2Jhci5tb2R1bGUnO1xuZXhwb3J0IHsgUHJvZ3Jlc3NiYXJDb25maWdDb21wb25lbnQgfSBmcm9tICcuL3Byb2dyZXNzYmFyLmNvbmZpZy5jb21wb25lbnQnO1xuZXhwb3J0IHsgUHJvZ3Jlc3NTcGlubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9ncmVzcy1zcGlubmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9ncmVzc2Jhck1vZHVsZSB9IGZyb20gJy4vcHJvZ3Jlc3NiYXIubW9kdWxlJztcblxuaW1wb3J0IHsgTWRQcm9ncmVzc1NwaW5uZXJNb2R1bGUgfSBmcm9tICcuL3Byb2dyZXNzLXNwaW5uZXItbW9kdWxlL2luZGV4JztcbmltcG9ydCB7IE1kUHJvZ3Jlc3NCYXJNb2R1bGUgfSBmcm9tICcuL3Byb2dyZXNzLWJhcnMtbW9kdWxlL2luZGV4JztcblxuY29uc3QgTUFURVJJQUxfTU9EVUxFUyA9IFtNZFByb2dyZXNzQmFyTW9kdWxlLCBNZFByb2dyZXNzU3Bpbm5lck1vZHVsZSwgUHJvZ3Jlc3NiYXJNb2R1bGVdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTWRQcm9ncmVzc0Jhck1vZHVsZS5mb3JSb290KCksXG4gICAgTWRQcm9ncmVzc1NwaW5uZXJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFByb2dyZXNzYmFyTW9kdWxlLmZvclJvb3QoKSxcbiAgXSxcbiAgZXhwb3J0czogTUFURVJJQUxfTU9EVUxFUyxcbn0pXG5leHBvcnQgY2xhc3MgUHJlbG9hZGVyc01vZHVsZSB7fVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBNQVRFUklBTF9NT0RVTEVTLFxuICBleHBvcnRzOiBNQVRFUklBTF9NT0RVTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0JhcnMge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4geyBuZ01vZHVsZTogUHJlbG9hZGVyc01vZHVsZSB9O1xuICB9XG59XG4iXX0=