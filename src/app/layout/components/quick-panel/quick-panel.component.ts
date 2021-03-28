import { Component, ViewEncapsulation, OnInit, OnDestroy, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector     : 'quick-panel',
    templateUrl  : './quick-panel.component.html',
    styleUrls    : ['./quick-panel.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class QuickPanelComponent
{
    date: Date;
    events: any[];
    notes: any[];
    settings: any;
    dialogRef: any;
    @Input() rows: any = [];

    /**
     * Constructor
     * @param {MatDialog} _matDialog
     */
    constructor(
        public _matDialog: MatDialog
    )
    {
        // Set the defaults
        this.date = new Date();
        this.settings = {
            notify: true,
            cloud : false,
            retro : true
        };
    }
    
    getCuota(row){
        return row.pagos.filter(x => x.estado.toLowerCase() === 'pendiente')[0];
    }
}
