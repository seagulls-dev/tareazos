import { ApplicationRef, ComponentFactoryResolver, ElementRef, Injector, NgZone, Renderer2, ViewContainerRef } from '@angular/core';
import { ComponentLoader } from './component-loader.class';
import { PositioningService } from './../positioning/positioning.service';
import * as ɵngcc0 from '@angular/core';
export declare class ComponentLoaderFactory {
    private _componentFactoryResolver;
    private _ngZone;
    private _injector;
    private _posService;
    private _applicationRef;
    constructor(_componentFactoryResolver: ComponentFactoryResolver, _ngZone: NgZone, _injector: Injector, _posService: PositioningService, _applicationRef: ApplicationRef);
    createLoader<T>(_elementRef: ElementRef, _viewContainerRef: ViewContainerRef, _renderer: Renderer2): ComponentLoader<T>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ComponentLoaderFactory>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ComponentLoaderFactory>;
}

//# sourceMappingURL=component-loader.factory.d.ts.map