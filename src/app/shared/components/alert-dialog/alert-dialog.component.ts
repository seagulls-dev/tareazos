import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DialogData } from "app/main/client-forms/list-requests/list-requests.component";

@Component({
    selector: "dialog-overview-example-dialog",
    styleUrls: ["alert-dialog.component.scss"],
    templateUrl: "alert-dialog.component.html",
})
export class AlertDialogComponent {
    public message = "";
    public title = "";
    constructor(
        public dialogRef: MatDialogRef<AlertDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {}
}
