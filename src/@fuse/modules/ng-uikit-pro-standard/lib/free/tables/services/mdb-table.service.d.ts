import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class MdbTableService {
    private _dataSource;
    private _dataSourceChanged;
    constructor();
    addRow(newRow: any): void;
    addRowAfter(index: number, row: any): void;
    removeRow(index: number): void;
    rowRemoved(): Observable<boolean>;
    removeLastRow(): void;
    getDataSource(): any;
    setDataSource(data: any): void;
    dataSourceChange(): Observable<any>;
    filterLocalDataBy(searchKey: any): any;
    searchLocalDataBy(searchKey: any): any;
    searchDataObservable(searchKey: any): Observable<any>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MdbTableService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<MdbTableService>;
}

//# sourceMappingURL=mdb-table.service.d.ts.map