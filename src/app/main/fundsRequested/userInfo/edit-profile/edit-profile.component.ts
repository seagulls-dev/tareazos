import { Component, OnInit, Inject } from "@angular/core";
import { CatalogService } from "app/services/catalog.service";
import { FormGroup } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { of } from "rxjs/internal/observable/of";
import { EcommerceOrderService } from "../order.service";

@Component({
    selector: "app-edit-profile",
    templateUrl: "./edit-profile.component.html",
    styleUrls: ["./edit-profile.component.scss"],
})
export class DetalleSolicitudComponent implements OnInit {
    constructor(
        private _ecommerceOrderService: EcommerceOrderService,
        private CatalogService: CatalogService,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<DetalleSolicitudComponent>
    ) {}
    form: FormGroup;
    formQuestions: any;
    ngOnInit(): void {
        this.form = new FormGroup({});
        this.formQuestions = this.CatalogService.getFormQuestions(
            "Transferencias Bancarias"
        );
    }

    GetDownloadUrl(event) {
        //title viene del key del input en el formulario , deleted es cuando se borra un archivo en el component uploader

        if (event.deleted) {
            this.data.pictures.splice(event.index, 1);
        } else {
            if (!this.data.pictures) this.data.pictures = [];

            this.data.pictures.push({
                title: event.key,
                downloadUrl: event.downloadUrl,
            });
            this.CatalogService.updateDocWithFirestore(
                "userData/" +
                    this.data.userId +
                    "/fundsWithdrawl/" +
                    this.data.transactionId,
                "pictures",
                this.data.pictures
            );

            // this.CatalogService.updateDocWithFirestore(
            //     "Providers/" + this.data.docId,
            //     "pictures",
            //     this.data.pictures
            // );
        }
    }

    updateStatus(): void {
        this.dialogRef.close(this.data.pictures);
    }
}
