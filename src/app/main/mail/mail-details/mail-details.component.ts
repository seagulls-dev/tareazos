import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { fuseAnimations } from "@fuse/animations";
import { CatalogService } from "app/services/catalog.service";
import { NotificationService } from "app/services/notifications.service";
import { Mail } from "../mail.model";
import { MailService } from "../mail.service";
import { MatDialog } from "@angular/material/dialog";
import { MailComposeDialogComponent } from "../dialogs/compose/compose.component";
import { DialogBookingComponent } from "../dialogs/compose/dialog-booking.component";
import { AuthService } from "../../../services/auth.service";
import { environment } from 'environments/environment';
@Component({
    selector: "mail-details",
    templateUrl: "./mail-details.component.html",
    styleUrls: ["./mail-details.component.scss"],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
})
export class MailDetailsComponent implements OnInit, OnDestroy {
    mail: Mail;
    request: any = null;
    labels: any[];
    showDetails: boolean;
    requestOffers: any = [];
    public providers;
    dialogRef: any;
    inboxType: any;
    requestId: any;
    awardedofferData: any;
    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {MailService} _mailService
     */
    constructor(
        public _mailService: MailService,
        private CatalogService: CatalogService,
        public _matDialog: MatDialog,
        public AuthService: AuthService,
        private notificationService:NotificationService
    ) {
        // Set the defaults
        this.showDetails = false;

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {

        this.CatalogService.GetItemsWithKeyFirestore(
            "Providers"
        ).subscribe(result => {
            this.providers = result;

            this._mailService.onCurrentMailChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((currentMail) => {
                if (currentMail?.id) {
                    this.request = currentMail.data;
                    this.requestId = currentMail.id;
    
                    this.CatalogService.GetItemsWithKeyFirestore(
                        "Requests/" + this.requestId + "/Offers"
                    ).subscribe(result => {
                        for (let item of result) {
                            this.getProfilePic(item.data);
                        }
    
                        this.requestOffers = result;
                    }); //authoruid
                }
            });
        });
    }

    getInitials(name) {
        var initials = '';
        var split = name.split(' ');

        initials = split[0][0] + split[1][0];

        return initials.toUpperCase();
    }

    getProfilePic(data) {
        data.picture = '';
        data.color = environment.colors[Math.floor(Math.random() * environment.colors.length)];

        var provider = this.providers.filter(x => x.id === data.authoruid);

        if (provider.length > 0) {
            provider = provider[0].data;
            if (provider.pictures.length > 0) {
                data.picture = provider.pictures[0].downloadUrl;
            }
        }

        return true;
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    OpenBooking(offerid, requestId) {

        this.dialogRef = this._matDialog.open(DialogBookingComponent, {
            panelClass: "mail-compose-dialog",
            data: { offer: offerid, requestId: requestId, request: this.request },
        });
        this.dialogRef.afterClosed().subscribe((response) => {
            if (!response) {
                return;
            }
            const actionType: string = response[0];

            switch (actionType) {
                /**
                 * Send
                 */
                case "book":
                    Promise.all([
                        this.CatalogService.updateDocWithFirestore(
                            "Requests/" + this.requestId,
                            "status",
                            "Assigned"
                        ),
                        this.CatalogService.updateDocWithFirestore(
                            "Requests/" + this.requestId,
                            "awardedOffer",
                            offerid
                        ),
                        this.CatalogService.updateDocWithFirestore(
                            "Requests/" + this.requestId + "/Offers/" + offerid,
                            "awarded",
                            true
                        ),
                    ]).then((data) => {
                        this.CatalogService.SendEmailFireFunctionExt('luisfelipe.0411@gmail.com','Aceptaron tu oferta para:'+this.request.title,'Oferta:'+this.request.awardedOffer + ' Requests:'+this.requestId)
                        this.notificationService.openSnackBar('Tarea actualizada correctamente','');
                        /* this.CatalogService.SendEmailFireFunction
                        ('luisfelipe.0411@gmail.com','Aceptaron tu oferta para:'+this.request.title,'Oferta:'+this.request.awardedOffer + ' Requests:'+this.requestId).toPromise().then(response=>{
                        }) */
                    });
                    break;
                /**
                 * Delete
                 */
                case "rating":
                    const rating = response[1];
                    const offerdata = response[2]
                    Promise.all([
                    this.CatalogService.getCollectionFirestore('Providers/'+offerdata.authoruid+'/Reviews').add({
                        title: this.request.title,
                        requestId: this.requestId,
                        authorname: this.request.authorname,
                        rating: rating.calification,
                        review: rating.review,
                        useruid: this.AuthService.user.uid
                    }),
                    this.CatalogService.updateDocWithFirestore('Providers/'+offerdata.authoruid,'reviewed',true)
                ]).then(data=>{
                    this.notificationService.openSnackBar('Reseña guardada correctamente','cerrar')
                })
                    break;
            }
        });
    }

    OpenProviderProfile(provider) {
        this.dialogRef = this._matDialog.open(MailComposeDialogComponent, {
            panelClass: "mail-compose-dialog",
            data: { providerId: provider },
        });
        this.dialogRef.afterClosed().subscribe((response) => {
            if (!response) {
                return;
            }
            const actionType: string = response[0];

            switch (actionType) {
                /**
                 * Send
                 */
                case "send":
                    break;
                /**
                 * Delete
                 */
                case "delete":
                    break;
            }
        });
    }

    MarkAsCompleted() {
        if(confirm("Seguro que deseas marcar está tarea como completa?")) {
            this.CatalogService.updateDocWithFirestore(
                "Requests/" + this.requestId,
                "status",
                "Completed"
            ).then(_=>{
                this.OpenBooking(this.request.awardedOffer,this.requestId)
            })
        }
      }
      DeleteTask(){
        if(confirm("Seguro que deseas borrar está tarea?")) {
            this.CatalogService.DeleteDocFirestore('Requests',this.requestId
            ).then(_=>{
                this.notificationService.openSnackBar('La tarea ha sido borrada','');
            })
        }
      }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**<
     * Toggle star
     *
     * @param event
     */
    toggleStar(event): void {
        event.stopPropagation();

        this.mail.toggleStar();

        this._mailService.updateMail(this.mail);
    }

    /**
     * Toggle important
     *
     * @param event
     */
    toggleImportant(event): void {
        event.stopPropagation();

        this.mail.toggleImportant();

        this._mailService.updateMail(this.mail);
    }
}
