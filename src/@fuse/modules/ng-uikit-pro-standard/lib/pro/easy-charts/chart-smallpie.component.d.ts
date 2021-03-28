import { ElementRef, OnInit, OnChanges, SimpleChanges, Renderer2 } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class EasyPieChartComponent implements OnInit, OnChanges {
    el: ElementRef;
    private _r;
    percent: any;
    options: any;
    pieChart: any;
    isBrowser: any;
    constructor(el: ElementRef, platformId: string, _r: Renderer2);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<EasyPieChartComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<EasyPieChartComponent, "mdb-easy-pie-chart", never, {
    "options": "options";
    "percent": "percent";
}, {}, never>;
}

//# sourceMappingURL=chart-smallpie.component.d.ts.map