import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DialogData } from "app/main/client-forms/list-requests/list-requests.component";
import { CatalogService } from "app/services/catalog.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Platform } from '@angular/cdk/platform';

@Component({
    selector: "send-mail-dialog",
    styleUrls: ["send-mail-dialog.component.scss"],
    templateUrl: "send-mail-dialog.component.html",
})
export class SendMailDialogComponent {
    public message = "";
    showButton = true;
    appdownloadUrl: string;
 
    constructor(
        private _dialogRef: MatDialogRef<SendMailDialogComponent>,
        private _catalogService: CatalogService,
        private _fb: FormBuilder,
        private _platform: Platform,
        @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {
        if (this._platform.ANDROID || this._platform.IOS) {
            if(this._platform.ANDROID)
            this.appdownloadUrl = 'https://play.google.com/store/apps/details?id=com.tareazos.tareazosApp'

            if(this._platform.IOS)
            this.appdownloadUrl = 'https://apps.apple.com/us/app/id1530751230';
        }
    }

    Opentab(){
        if(this.appdownloadUrl)
        window.open(this.appdownloadUrl);
        else
        window.open('https://play.google.com/store/apps/details?id=com.tareazos.tareazosApp');
    }
}
