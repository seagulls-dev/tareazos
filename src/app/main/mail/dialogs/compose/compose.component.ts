import { Component, Inject, ViewEncapsulation, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { CatalogService } from "app/services/catalog.service";
@Component({
    selector: "mail-compose",
    templateUrl: "./compose.component.html",
    styleUrls: ["./compose.component.scss"],
    encapsulation: ViewEncapsulation.None,
})
export class MailComposeDialogComponent implements OnInit {
    showExtraToFields: boolean;
    composeForm: FormGroup;
    provider: any;
    providerId: any;
    /**
     * Constructor
     *
     * @param {MatDialogRef<MailComposeDialogComponent>} matDialogRef
     * @param _data
     */
    constructor(
        public matDialogRef: MatDialogRef<MailComposeDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: any,
        private CatalogService: CatalogService
    ) {
        // Set the defaults

        this.showExtraToFields = false;
        if (this._data.provider) this.provider = this._data.provider;
        else if (this._data.providerId) {
            this.CatalogService.GetDocWithFirestore(
                "Providers/" + this._data.providerId
            ).subscribe((data) => {
                this.provider = data;
            });
        }
    }

    ngOnInit() {}
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Create compose form
     *
     * @returns {FormGroup}


    /**
     * Toggle extra to fields
     */
    toggleExtraToFields(): void {
        this.showExtraToFields = !this.showExtraToFields;
    }
}
