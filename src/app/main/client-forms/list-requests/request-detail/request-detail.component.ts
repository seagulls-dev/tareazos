import { Component, OnInit,Input,OnChanges, SimpleChanges,ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from "@fuse/animations";
import { FuseConfigService } from '@fuse/services/config.service';
import { CatalogService } from "app/services/catalog.service";
import { NotificationService } from "app/services/notifications.service";
@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RequestDetailComponent implements OnInit, OnChanges {
  public requestOffers;
  @Input() requestId: any;
  public providers;
  public requestDetails: any={};
   
  constructor(    private CatalogService: CatalogService,
    private NotificationService: NotificationService) { }

    ngOnInit(): void {
      this.LoadRequestData();
     
    }
    ngOnChanges(changes: SimpleChanges) {
      this.requestId = changes.requestId.currentValue;
      this.LoadRequestData();
      this.LoadProviders()
    }
    LoadProviders(){
      //lista de proveedores 
      this.providers = this.CatalogService.GetItemsWithKeyFirestore('Providers')
    }

    LoadRequestData(){
     this.CatalogService.GetDocWithFirestore('Requests/'+this.requestId).subscribe(data=>{
      this.requestDetails = data.data;
     
      });
      this.requestOffers = this.CatalogService.GetItemsWithKeyFirestore('Requests/'+this.requestId+'/Offers');
    }

    TakeOffer(offerid){
      var docToUpdate= this.CatalogService.updateDocWithFirestore('Requests/'+this.requestId, 'status', 'Taken')
    }
  

}
