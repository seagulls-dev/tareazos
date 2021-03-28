/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// free
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CardsModule } from './cards/cards.module';
import { ButtonsModule } from './buttons/buttons.module';
import { NavbarModule } from './navbars/navbar.module';
import { DropdownModule } from './dropdown/dropdown.module';
import { CarouselModule } from './carousel/carousel.module';
import { ChartsModule } from './charts/chart.module';
import { CollapseModule } from './collapse/collapse.module';
import { ModalModule } from './modals/modal.module';
import { TooltipModule } from './tooltip/tooltip.module';
import { PopoverModule } from './popover/popover.module';
import { InputsModule } from './inputs/inputs.module';
import { WavesModule } from './waves/waves.module';
import { IconsModule } from './icons/icon.module';
import { CheckboxModule } from './checkbox/checkbox.module';
import { TableModule } from './tables/tables.module';
import { BadgeModule } from './badge/badge.module';
import { BreadcrumbModule } from './breadcrumbs/breadcrumb.module';
import { InputUtilitiesModule } from './input-utilities/input-utilities.module';
import { StickyHeaderModule } from './sticky-header/sticky-header.module';
export { StickyHeaderDirective, StickyHeaderModule } from './sticky-header/index';
export { MdbErrorDirective, MdbSuccessDirective, MdbValidateDirective, InputUtilitiesModule, } from './input-utilities/index';
export { MdbBreadcrumbComponent, MdbBreadcrumbItemComponent, BreadcrumbModule, } from './breadcrumbs/index';
export { MDBBadgeComponent, BadgeModule } from './badge/index';
export { MdbTablePaginationComponent, MdbTableRowDirective, MdbTableScrollDirective, MdbTableSortDirective, MdbTableDirective, MdbTableService, TableModule, } from './tables/index';
export { CHECKBOX_VALUE_ACCESSOR, CheckboxComponent, CheckboxModule } from './checkbox/index';
export { ButtonsModule, ButtonRadioDirective, ButtonCheckboxDirective, MdbBtnDirective, FixedButtonCaptionDirective, } from './buttons/index';
export { CardsModule, MdbCardComponent, MdbCardBodyComponent, MdbCardImageComponent, MdbCardTextComponent, MdbCardTitleComponent, MdbCardFooterComponent, MdbCardHeaderComponent, } from './cards/index';
export { WavesModule, WavesDirective } from './waves/index';
export { InputsModule, MdbInputDirective, MdbInput } from './inputs/index';
export { NavbarModule } from './navbars/index';
export { BsDropdownConfig, BsDropdownContainerComponent, BsDropdownDirective, BsDropdownMenuDirective, DropdownModule, BsDropdownState, BsDropdownToggleDirective, } from './dropdown/index';
export { CarouselComponent, CarouselConfig, CarouselModule } from './carousel/index';
export { ChartsModule, BaseChartDirective } from './charts/index';
export { CollapseComponent, CollapseModule } from './collapse/index';
export { ModalBackdropComponent, ModalBackdropOptions, ModalDirective, ModalModule, ModalOptions, MDBModalService, ModalContainerComponent, MDBModalRef, } from './modals/index';
export { TooltipConfig, TooltipContainerComponent, TooltipDirective, TooltipModule, } from './tooltip/index';
export { PopoverConfig, PopoverContainerComponent, PopoverModule, PopoverDirective, } from './popover/index';
export { IconsModule, MdbIconComponent, FalDirective, FarDirective, FasDirective, FabDirective, } from './icons/index';
/** @type {?} */
var MODULES = [
    ButtonsModule,
    CardsModule,
    WavesModule,
    InputsModule,
    NavbarModule,
    DropdownModule,
    CarouselModule,
    ChartsModule,
    CollapseModule,
    ModalModule,
    TooltipModule,
    PopoverModule,
    IconsModule,
    CheckboxModule,
    TableModule,
    BadgeModule,
    BreadcrumbModule,
    InputUtilitiesModule,
    StickyHeaderModule,
];
var MDBRootModule = /** @class */ (function () {
    function MDBRootModule() {
    }
    MDBRootModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        ButtonsModule,
                        WavesModule.forRoot(),
                        InputsModule.forRoot(),
                        NavbarModule,
                        DropdownModule.forRoot(),
                        CarouselModule.forRoot(),
                        ChartsModule,
                        CollapseModule.forRoot(),
                        ModalModule.forRoot(),
                        TooltipModule.forRoot(),
                        PopoverModule.forRoot(),
                        IconsModule,
                        CardsModule.forRoot(),
                        CheckboxModule,
                        TableModule,
                        BadgeModule,
                        BreadcrumbModule,
                        InputUtilitiesModule,
                        StickyHeaderModule,
                    ],
                    exports: MODULES,
                    schemas: [NO_ERRORS_SCHEMA],
                },] }
    ];
    return MDBRootModule;
}());
export { MDBRootModule };
var MDBBootstrapModule = /** @class */ (function () {
    function MDBBootstrapModule() {
    }
    /**
     * @return {?}
     */
    MDBBootstrapModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: MDBRootModule };
    };
    MDBBootstrapModule.decorators = [
        { type: NgModule, args: [{ exports: MODULES },] }
    ];
    return MDBBootstrapModule;
}());
export { MDBBootstrapModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWZyZWUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvbWRiLWZyZWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF1QixRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDckQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ25E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QUNYLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtDQUNuQjtBQUVEO0lBQUE7SUF5QjRCLENBQUM7O2dCQXpCNUIsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxhQUFhO3dCQUNiLFdBQVcsQ0FBQyxPQUFPLEVBQUU7d0JBQ3JCLFlBQVksQ0FBQyxPQUFPLEVBQUU7d0JBQ3RCLFlBQVk7d0JBQ1osY0FBYyxDQUFDLE9BQU8sRUFBRTt3QkFDeEIsY0FBYyxDQUFDLE9BQU8sRUFBRTt3QkFDeEIsWUFBWTt3QkFDWixjQUFjLENBQUMsT0FBTyxFQUFFO3dCQUN4QixXQUFXLENBQUMsT0FBTyxFQUFFO3dCQUNyQixhQUFhLENBQUMsT0FBTyxFQUFFO3dCQUN2QixhQUFhLENBQUMsT0FBTyxFQUFFO3dCQUN2QixXQUFXO3dCQUNYLFdBQVcsQ0FBQyxPQUFPLEVBQUU7d0JBQ3JCLGNBQWM7d0JBQ2QsV0FBVzt3QkFDWCxXQUFXO3dCQUNYLGdCQUFnQjt3QkFDaEIsb0JBQW9CO3dCQUNwQixrQkFBa0I7cUJBQ25CO29CQUNELE9BQU8sRUFBRSxPQUFPO29CQUNoQixPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztpQkFDNUI7O0lBQzJCLG9CQUFDO0NBQUEsQUF6QjdCLElBeUI2QjtTQUFoQixhQUFhO0FBRTFCO0lBQUE7SUFLQSxDQUFDOzs7O0lBSGUsMEJBQU87OztJQUFyQjtRQUNFLE9BQU8sRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLENBQUM7SUFDckMsQ0FBQzs7Z0JBSkYsUUFBUSxTQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRTs7SUFLOUIseUJBQUM7Q0FBQSxBQUxELElBS0M7U0FKWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmcmVlXG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDYXJkc01vZHVsZSB9IGZyb20gJy4vY2FyZHMvY2FyZHMubW9kdWxlJztcbmltcG9ydCB7IEJ1dHRvbnNNb2R1bGUgfSBmcm9tICcuL2J1dHRvbnMvYnV0dG9ucy5tb2R1bGUnO1xuaW1wb3J0IHsgTmF2YmFyTW9kdWxlIH0gZnJvbSAnLi9uYXZiYXJzL25hdmJhci5tb2R1bGUnO1xuaW1wb3J0IHsgRHJvcGRvd25Nb2R1bGUgfSBmcm9tICcuL2Ryb3Bkb3duL2Ryb3Bkb3duLm1vZHVsZSc7XG5pbXBvcnQgeyBDYXJvdXNlbE1vZHVsZSB9IGZyb20gJy4vY2Fyb3VzZWwvY2Fyb3VzZWwubW9kdWxlJztcbmltcG9ydCB7IENoYXJ0c01vZHVsZSB9IGZyb20gJy4vY2hhcnRzL2NoYXJ0Lm1vZHVsZSc7XG5pbXBvcnQgeyBDb2xsYXBzZU1vZHVsZSB9IGZyb20gJy4vY29sbGFwc2UvY29sbGFwc2UubW9kdWxlJztcbmltcG9ydCB7IE1vZGFsTW9kdWxlIH0gZnJvbSAnLi9tb2RhbHMvbW9kYWwubW9kdWxlJztcbmltcG9ydCB7IFRvb2x0aXBNb2R1bGUgfSBmcm9tICcuL3Rvb2x0aXAvdG9vbHRpcC5tb2R1bGUnO1xuaW1wb3J0IHsgUG9wb3Zlck1vZHVsZSB9IGZyb20gJy4vcG9wb3Zlci9wb3BvdmVyLm1vZHVsZSc7XG5pbXBvcnQgeyBJbnB1dHNNb2R1bGUgfSBmcm9tICcuL2lucHV0cy9pbnB1dHMubW9kdWxlJztcbmltcG9ydCB7IFdhdmVzTW9kdWxlIH0gZnJvbSAnLi93YXZlcy93YXZlcy5tb2R1bGUnO1xuaW1wb3J0IHsgSWNvbnNNb2R1bGUgfSBmcm9tICcuL2ljb25zL2ljb24ubW9kdWxlJztcbmltcG9ydCB7IENoZWNrYm94TW9kdWxlIH0gZnJvbSAnLi9jaGVja2JveC9jaGVja2JveC5tb2R1bGUnO1xuaW1wb3J0IHsgVGFibGVNb2R1bGUgfSBmcm9tICcuL3RhYmxlcy90YWJsZXMubW9kdWxlJztcbmltcG9ydCB7IEJhZGdlTW9kdWxlIH0gZnJvbSAnLi9iYWRnZS9iYWRnZS5tb2R1bGUnO1xuaW1wb3J0IHsgQnJlYWRjcnVtYk1vZHVsZSB9IGZyb20gJy4vYnJlYWRjcnVtYnMvYnJlYWRjcnVtYi5tb2R1bGUnO1xuaW1wb3J0IHsgSW5wdXRVdGlsaXRpZXNNb2R1bGUgfSBmcm9tICcuL2lucHV0LXV0aWxpdGllcy9pbnB1dC11dGlsaXRpZXMubW9kdWxlJztcbmltcG9ydCB7IFN0aWNreUhlYWRlck1vZHVsZSB9IGZyb20gJy4vc3RpY2t5LWhlYWRlci9zdGlja3ktaGVhZGVyLm1vZHVsZSc7XG5cbmV4cG9ydCB7IFN0aWNreUhlYWRlckRpcmVjdGl2ZSwgU3RpY2t5SGVhZGVyTW9kdWxlIH0gZnJvbSAnLi9zdGlja3ktaGVhZGVyL2luZGV4JztcblxuZXhwb3J0IHtcbiAgTWRiRXJyb3JEaXJlY3RpdmUsXG4gIE1kYlN1Y2Nlc3NEaXJlY3RpdmUsXG4gIE1kYlZhbGlkYXRlRGlyZWN0aXZlLFxuICBJbnB1dFV0aWxpdGllc01vZHVsZSxcbn0gZnJvbSAnLi9pbnB1dC11dGlsaXRpZXMvaW5kZXgnO1xuXG5leHBvcnQge1xuICBNZGJCcmVhZGNydW1iQ29tcG9uZW50LFxuICBNZGJCcmVhZGNydW1iSXRlbUNvbXBvbmVudCxcbiAgQnJlYWRjcnVtYk1vZHVsZSxcbn0gZnJvbSAnLi9icmVhZGNydW1icy9pbmRleCc7XG5cbmV4cG9ydCB7IE1EQkJhZGdlQ29tcG9uZW50LCBCYWRnZU1vZHVsZSB9IGZyb20gJy4vYmFkZ2UvaW5kZXgnO1xuXG5leHBvcnQge1xuICBNZGJUYWJsZVBhZ2luYXRpb25Db21wb25lbnQsXG4gIE1kYlRhYmxlUm93RGlyZWN0aXZlLFxuICBNZGJUYWJsZVNjcm9sbERpcmVjdGl2ZSxcbiAgTWRiVGFibGVTb3J0RGlyZWN0aXZlLFxuICBNZGJUYWJsZURpcmVjdGl2ZSxcbiAgTWRiVGFibGVTZXJ2aWNlLFxuICBUYWJsZU1vZHVsZSxcbn0gZnJvbSAnLi90YWJsZXMvaW5kZXgnO1xuXG5leHBvcnQgeyBDSEVDS0JPWF9WQUxVRV9BQ0NFU1NPUiwgQ2hlY2tib3hDb21wb25lbnQsIENoZWNrYm94TW9kdWxlIH0gZnJvbSAnLi9jaGVja2JveC9pbmRleCc7XG5cbmV4cG9ydCB7XG4gIEJ1dHRvbnNNb2R1bGUsXG4gIEJ1dHRvblJhZGlvRGlyZWN0aXZlLFxuICBCdXR0b25DaGVja2JveERpcmVjdGl2ZSxcbiAgTWRiQnRuRGlyZWN0aXZlLFxuICBGaXhlZEJ1dHRvbkNhcHRpb25EaXJlY3RpdmUsXG59IGZyb20gJy4vYnV0dG9ucy9pbmRleCc7XG5cbmV4cG9ydCB7XG4gIENhcmRzTW9kdWxlLFxuICBNZGJDYXJkQ29tcG9uZW50LFxuICBNZGJDYXJkQm9keUNvbXBvbmVudCxcbiAgTWRiQ2FyZEltYWdlQ29tcG9uZW50LFxuICBNZGJDYXJkVGV4dENvbXBvbmVudCxcbiAgTWRiQ2FyZFRpdGxlQ29tcG9uZW50LFxuICBNZGJDYXJkRm9vdGVyQ29tcG9uZW50LFxuICBNZGJDYXJkSGVhZGVyQ29tcG9uZW50LFxufSBmcm9tICcuL2NhcmRzL2luZGV4JztcblxuZXhwb3J0IHsgV2F2ZXNNb2R1bGUsIFdhdmVzRGlyZWN0aXZlIH0gZnJvbSAnLi93YXZlcy9pbmRleCc7XG5cbmV4cG9ydCB7IElucHV0c01vZHVsZSwgTWRiSW5wdXREaXJlY3RpdmUsIE1kYklucHV0IH0gZnJvbSAnLi9pbnB1dHMvaW5kZXgnO1xuXG5leHBvcnQgeyBOYXZiYXJNb2R1bGUgfSBmcm9tICcuL25hdmJhcnMvaW5kZXgnO1xuXG5leHBvcnQge1xuICBCc0Ryb3Bkb3duQ29uZmlnLFxuICBCc0Ryb3Bkb3duQ29udGFpbmVyQ29tcG9uZW50LFxuICBCc0Ryb3Bkb3duRGlyZWN0aXZlLFxuICBCc0Ryb3Bkb3duTWVudURpcmVjdGl2ZSxcbiAgRHJvcGRvd25Nb2R1bGUsXG4gIEJzRHJvcGRvd25TdGF0ZSxcbiAgQnNEcm9wZG93blRvZ2dsZURpcmVjdGl2ZSxcbn0gZnJvbSAnLi9kcm9wZG93bi9pbmRleCc7XG5cbmV4cG9ydCB7IENhcm91c2VsQ29tcG9uZW50LCBDYXJvdXNlbENvbmZpZywgQ2Fyb3VzZWxNb2R1bGUgfSBmcm9tICcuL2Nhcm91c2VsL2luZGV4JztcblxuZXhwb3J0IHsgQ2hhcnRzTW9kdWxlLCBCYXNlQ2hhcnREaXJlY3RpdmUgfSBmcm9tICcuL2NoYXJ0cy9pbmRleCc7XG5cbmV4cG9ydCB7IENvbGxhcHNlQ29tcG9uZW50LCBDb2xsYXBzZU1vZHVsZSB9IGZyb20gJy4vY29sbGFwc2UvaW5kZXgnO1xuXG5leHBvcnQge1xuICBNb2RhbEJhY2tkcm9wQ29tcG9uZW50LFxuICBNb2RhbEJhY2tkcm9wT3B0aW9ucyxcbiAgTW9kYWxEaXJlY3RpdmUsXG4gIE1vZGFsTW9kdWxlLFxuICBNb2RhbE9wdGlvbnMsXG4gIE1EQk1vZGFsU2VydmljZSxcbiAgTW9kYWxDb250YWluZXJDb21wb25lbnQsXG4gIE1EQk1vZGFsUmVmLFxufSBmcm9tICcuL21vZGFscy9pbmRleCc7XG5cbmV4cG9ydCB7XG4gIFRvb2x0aXBDb25maWcsXG4gIFRvb2x0aXBDb250YWluZXJDb21wb25lbnQsXG4gIFRvb2x0aXBEaXJlY3RpdmUsXG4gIFRvb2x0aXBNb2R1bGUsXG59IGZyb20gJy4vdG9vbHRpcC9pbmRleCc7XG5cbmV4cG9ydCB7XG4gIFBvcG92ZXJDb25maWcsXG4gIFBvcG92ZXJDb250YWluZXJDb21wb25lbnQsXG4gIFBvcG92ZXJNb2R1bGUsXG4gIFBvcG92ZXJEaXJlY3RpdmUsXG59IGZyb20gJy4vcG9wb3Zlci9pbmRleCc7XG5cbmV4cG9ydCB7XG4gIEljb25zTW9kdWxlLFxuICBNZGJJY29uQ29tcG9uZW50LFxuICBGYWxEaXJlY3RpdmUsXG4gIEZhckRpcmVjdGl2ZSxcbiAgRmFzRGlyZWN0aXZlLFxuICBGYWJEaXJlY3RpdmUsXG59IGZyb20gJy4vaWNvbnMvaW5kZXgnO1xuXG5jb25zdCBNT0RVTEVTID0gW1xuICBCdXR0b25zTW9kdWxlLFxuICBDYXJkc01vZHVsZSxcbiAgV2F2ZXNNb2R1bGUsXG4gIElucHV0c01vZHVsZSxcbiAgTmF2YmFyTW9kdWxlLFxuICBEcm9wZG93bk1vZHVsZSxcbiAgQ2Fyb3VzZWxNb2R1bGUsXG4gIENoYXJ0c01vZHVsZSxcbiAgQ29sbGFwc2VNb2R1bGUsXG4gIE1vZGFsTW9kdWxlLFxuICBUb29sdGlwTW9kdWxlLFxuICBQb3BvdmVyTW9kdWxlLFxuICBJY29uc01vZHVsZSxcbiAgQ2hlY2tib3hNb2R1bGUsXG4gIFRhYmxlTW9kdWxlLFxuICBCYWRnZU1vZHVsZSxcbiAgQnJlYWRjcnVtYk1vZHVsZSxcbiAgSW5wdXRVdGlsaXRpZXNNb2R1bGUsXG4gIFN0aWNreUhlYWRlck1vZHVsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBCdXR0b25zTW9kdWxlLFxuICAgIFdhdmVzTW9kdWxlLmZvclJvb3QoKSxcbiAgICBJbnB1dHNNb2R1bGUuZm9yUm9vdCgpLFxuICAgIE5hdmJhck1vZHVsZSxcbiAgICBEcm9wZG93bk1vZHVsZS5mb3JSb290KCksXG4gICAgQ2Fyb3VzZWxNb2R1bGUuZm9yUm9vdCgpLFxuICAgIENoYXJ0c01vZHVsZSxcbiAgICBDb2xsYXBzZU1vZHVsZS5mb3JSb290KCksXG4gICAgTW9kYWxNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFRvb2x0aXBNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFBvcG92ZXJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEljb25zTW9kdWxlLFxuICAgIENhcmRzTW9kdWxlLmZvclJvb3QoKSxcbiAgICBDaGVja2JveE1vZHVsZSxcbiAgICBUYWJsZU1vZHVsZSxcbiAgICBCYWRnZU1vZHVsZSxcbiAgICBCcmVhZGNydW1iTW9kdWxlLFxuICAgIElucHV0VXRpbGl0aWVzTW9kdWxlLFxuICAgIFN0aWNreUhlYWRlck1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogTU9EVUxFUyxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxufSlcbmV4cG9ydCBjbGFzcyBNREJSb290TW9kdWxlIHt9XG5cbkBOZ01vZHVsZSh7IGV4cG9ydHM6IE1PRFVMRVMgfSlcbmV4cG9ydCBjbGFzcyBNREJCb290c3RyYXBNb2R1bGUge1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IE1EQlJvb3RNb2R1bGUgfTtcbiAgfVxufVxuIl19