import { Component, OnInit,Inject } from '@angular/core';

import { fuseAnimations } from "@fuse/animations";
import { FuseConfigService } from '@fuse/services/config.service';
import { CatalogService } from "app/services/catalog.service";
import { NotificationService } from "app/services/notifications.service";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';



export interface DialogData {
    offer: any;
    requestId: string;
    request:any;
  }

@Component({
    selector: 'dialog-booking',
    templateUrl: 'dialog-booking.component.html',
    styleUrls    : ['./compose.component.scss']
  })
  export class DialogBookingComponent implements OnInit {
  
    constructor(
      public dialogRef: MatDialogRef<DialogBookingComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData,
      private CatalogService: CatalogService
      ) {}
  
    public formQuestions: any;
    form: any;
    
    rating= { review:'',calification:''};
    onNoClick(): void {
      this.dialogRef.close();
    }
    SubmitForm()
    {
  
      this.dialogRef.close(this.form.value);
    }
    ngOnInit(): void {
      // si lo recibe no es la oferta y es el id validar que tipo de dato es
  
        if(typeof this.data.offer === 'string'){
          this.CatalogService.GetDocWithFirestore('Requests/'+this.data.requestId+'/Offers/'+this.data.offer).subscribe(data=>{
            this.data.offer = data.data;
          })
        }
      this.formQuestions = this.CatalogService.getFormQuestions('Offers')
     
      this.form = new FormGroup({});
    }
    ratingComponentClick(clickObj: any): void {
      
      this.rating.calification = clickObj.rating;
      
        //this.ratingClicked = clickObj.rating;
        //this.itemIdRatingClicked = item.company;
      }
  
  
  
  
  
  
  }