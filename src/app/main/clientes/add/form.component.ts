import { Component, Inject, ViewEncapsulation, OnInit, ViewChild, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { startWith } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { fuseAnimations } from '@fuse/animations';
import { MatPaginator } from '@angular/material/paginator';
import { Service } from '../service';
import { FuseConfirmDialogComponent } from '@fuse/components/confirm-dialog/confirm-dialog.component';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';



export interface State {
    flag: string;
    name: string;
    population: string;
}

@Component({
    selector     : 'edit-form',
    templateUrl  : './form.component.html',
    styleUrls    : ['./form.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})

export class FormDialogComponent
{
    @Input()
    public _data: any;
    
    /**
     * Constructor
     *
     * @param {MatDialogRef<FormDialogComponent>} matDialogRef
     * @param _data
     * @param {FormBuilder} _formBuilder
     * @param {Service} _service
     * @param {MatDialog} _matDialog
     */
    constructor(
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
}
