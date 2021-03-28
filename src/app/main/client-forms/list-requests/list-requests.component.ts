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
  requestid: string;
  customer: string;
}

@Component({
  selector: 'app-list-requests',
  templateUrl: './list-requests.component.html',
  animations:fuseAnimations,
  styleUrls: ['./list-requests.component.scss']
})

export class ListRequestsComponent implements OnInit {
  requests : Observable<any[]>
  selectedrequest: string;
  constructor(
    private CatalogService: CatalogService,
    private NotificationService: NotificationService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.requests = this.CatalogService.GetItemsWithKeyFirestore('Requests');
  }
  
  FilterChange(event):void{
    this.requests = this.CatalogService.GetItemsWithKeyFirestore('Requests');
  }
  
  ViewRequestDetails(requestid): void{
      this.selectedrequest=requestid;
  }

  openDialog(requestid): void {
    this.selectedrequest = requestid;
    const dialogRef = this.dialog.open(OfferDialogComponent, {
      width: '550px',
      height:'500px',
      data: {requestid: requestid, customer: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result)
      this.CatalogService.getCollectionFirestore('Requests/'+this.selectedrequest+'/Offers').add(result).then( (data)=>{
      })
      
    });
  }

}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-offer.html',
})
export class OfferDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<OfferDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private CatalogService: CatalogService
    ) {}

  public formQuestions: any;
  form: any;
  onNoClick(): void {
    this.dialogRef.close();
  }
  SubmitForm()
  {

    this.dialogRef.close(this.form.value);
  }
  ngOnInit(): void {

    this.formQuestions = this.CatalogService.getFormQuestions('Offers')
   
    this.form = new FormGroup({});
  }





}

