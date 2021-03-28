import { Component, Inject, ViewEncapsulation, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { CatalogService } from "app/services/catalog.service";
import { MailService } from "../../mail.service";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import * as _ from "lodash";
import { MatDatepickerInputEvent } from "@angular/material/datepicker";
import { fuseAnimations } from "@fuse/animations";

@Component({
    selector: "mail-contact",
    templateUrl: "./compose.component.html",
    styleUrls: ["./compose.component.scss"],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
})
export class MailContactDialogComponent implements OnInit {
    showExtraToFields: boolean;
    composeForm: FormGroup;
    requestId: string;
    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {MatDialogRef<MailContactDialogComponent>} matDialogRef
     * @param _data
     */
    constructor(
        public matDialogRef: MatDialogRef<MailContactDialogComponent>,
        public _mailService: MailService,
        @Inject(MAT_DIALOG_DATA) private _data: any
    ) {
        // Set the defaults
        this.showExtraToFields = false;
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    ngOnInit() {
        // this._mailService.onCurrentMailChanged
        //     .pipe(takeUntil(this._unsubscribeAll))
        //     .subscribe((currentMail) => {
        //         this.requestId = currentMail?.id;
        //     });
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    updateOfferDate() {
        this._mailService.updateOffer();
    }
    ChangeOfferDate(type: string, event: MatDatepickerInputEvent<Date>) {
        this._mailService.setOfferDate(new Date(event.value));
    }
    /**
     * Create contact form
     *
     * @returns {FormGroup}


    /**
     * Toggle extra to fields
     */
    toggleExtraToFields(): void {
        this.showExtraToFields = !this.showExtraToFields;
    }
}
