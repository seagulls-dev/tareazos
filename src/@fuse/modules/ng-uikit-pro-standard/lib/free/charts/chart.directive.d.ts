import { OnDestroy, OnInit, OnChanges, EventEmitter, ElementRef, SimpleChanges } from '@angular/core';
import { Colors } from './colors.interface';
import * as ɵngcc0 from '@angular/core';
export declare class BaseChartDirective implements OnDestroy, OnChanges, OnInit, Colors {
    element: ElementRef;
    static defaultColors: Array<number[]>;
    data: number[] | any[];
    datasets: any[];
    labels: Array<any>;
    options: any;
    chartType: string;
    colors: Array<any>;
    legend: boolean;
    chartClick: EventEmitter<any>;
    chartHover: EventEmitter<any>;
    ctx: any;
    chart: any;
    cvs: any;
    initFlag: boolean;
    isBrowser: any;
    constructor(element: ElementRef, platformId: string);
    ngOnInit(): any;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): any;
    getChartBuilder(ctx: any): any;
    getPointDataAtEvent(event: any): any;
    private updateChartData;
    private getDatasets;
    private refresh;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BaseChartDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<BaseChartDirective, "canvas[mdbChart]", ["mdb-base-chart"], {
    "labels": "labels";
    "options": "options";
    "legend": "legend";
    "data": "data";
    "datasets": "datasets";
    "chartType": "chartType";
    "colors": "colors";
}, {
    "chartClick": "chartClick";
    "chartHover": "chartHover";
}, never>;
}

//# sourceMappingURL=chart.directive.d.ts.map