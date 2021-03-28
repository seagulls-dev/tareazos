import { Component, OnInit,Inject } from '@angular/core';

import { fuseAnimations } from "@fuse/animations";
import { FuseConfigService } from '@fuse/services/config.service';
import { CatalogService } from "app/services/catalog.service";
import { NotificationService } from "app/services/notifications.service";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

   /**
     * Constructor
     *
     * @param {MatDialogRef<MailComposeDialogComponent>} matDialogRef
     * @param _data
     */

export interface DialogData {
    requestid: string;
    customer: string;
  }

@Component({
    selector: 'addskill-dialog',
    templateUrl: 'addSkill.component.html',
  })
  export class AddSkilDialogComponent implements OnInit {
  
    constructor(
      public dialogRef: MatDialogRef<AddSkilDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData,
      private CatalogService: CatalogService
      ) {}
  
    public formQuestions: any;
    form: any;
    onNoClick(): void {
      this.dialogRef.close();
    }
    
    ngOnInit(): void {
  
      this.formQuestions = this.CatalogService.getFormQuestions('Habilidades')
     
      this.form = new FormGroup({});
    }
  
  
  
  
  
  }