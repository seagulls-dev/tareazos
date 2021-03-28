import {
    Component,
    HostBinding,
    Input,
    OnDestroy,
    OnInit,
    ViewEncapsulation,
} from "@angular/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Mail } from "../../mail.model";
import { MailService } from "../../mail.service";
import { CatalogService } from "app/services/catalog.service";
import { NotificationService } from "app/services/notifications.service";
import {
    MatDialog,
    MatDialogRef,
    MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { OfferDialogComponent } from "../../dialogs/compose/dialog-offer.component";
import { AuthService } from "../../../../services/auth.service";
@Component({
    selector: "mail-list-item",
    templateUrl: "./mail-list-item.component.html",
    styleUrls: ["./mail-list-item.component.scss"],
    encapsulation: ViewEncapsulation.None,
})
export class MailListItemComponent implements OnInit, OnDestroy {
    @Input() request: any;
    requestId: any;
    labels: any[];
    @Input() mail: Mail;

    @HostBinding("class.selected")
    selected: boolean;

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
        private authService: AuthService,
        public dialog: MatDialog
    ) {
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
        this.requestId = this.request.id;
        this.request = this.request.data;
        // Set the initial values
        this.mail = new Mail({});
        // Subscribe to update on selected mail change
        this._mailService.onSelectedMailsChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((selectedMails) => {
                this.selected = false;

                if (selectedMails.length > 0) {
                    for (const mail of selectedMails) {
                        if (mail.id === this.mail.id) {
                            this.selected = true;
                            break;
                        }
                    }
                }
            });

        // Subscribe to update on label change
        this._mailService.onLabelsChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((labels) => {
                this.labels = labels;
            });
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(OfferDialogComponent, {
            width: "550px",
            height: "500px",
            data: { request: this.request, customer: "" },
        });

        dialogRef.afterClosed().subscribe((result) => {
          
            if (result &&  this.authService.user.uid)
            result.authoruid =  this.authService.user.uid;
            result.authorname =
                this.authService.user.name +
                " " +
                this.authService.user.lastname;
            this.CatalogService.getCollectionFirestore(
                "Requests/" + this.requestId + "/Offers"
            )
                .add(result)
                .then((data) => {});
        });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * On selected change
     */
    onSelectedChange(): void {
        this._mailService.toggleSelectedMail(this.requestId);
    }

    /**
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
     * Toggle Important
     *
     * @param event
     */
    toggleImportant(event): void {
        event.stopPropagation();

        this.mail.toggleImportant();

        this._mailService.updateMail(this.mail);
    }
}
