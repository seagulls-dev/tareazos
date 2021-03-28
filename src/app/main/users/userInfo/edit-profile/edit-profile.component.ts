import { Component, OnInit, Inject } from '@angular/core';
import { CatalogService } from 'app/services/catalog.service';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { of } from 'rxjs/internal/observable/of';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  constructor(private CatalogService: CatalogService, @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<EditProfileComponent>,) { }
  form: FormGroup;
  formQuestions: any;
  ngOnInit(): void {

    this.form = new FormGroup({});
    this.CatalogService.getFormQuestions(
      'Candidatos'
    ).subscribe(value => {
      this.formQuestions = of(value);
      console.log(value);
      setTimeout(() => {
        var keys = Object.keys(this.data.Generales);
        if (keys)
          keys.forEach((value, index) => {
            var obj = {};
            obj[value] = this.data.Generales[value];
            if (obj[value]?.seconds)
              obj[value] = new Date(obj[value].seconds * 1000)
            this.form.patchValue(obj);
          });
      }, 1000);


    })


    console.log(this.data);
  }


  GetDownloadUrl(event) {
    //title viene del key del input en el formulario , deleted es cuando se borra un archivo en el component uploader


    if (event.deleted) {

      this.data.pictures.splice(event.index, 1);
    } else {
      if (!this.data.pictures)
        this.data.pictures = [];

      this.data.pictures.push({
        title: event.key,
        downloadUrl: event.downloadUrl,
      });
      this.CatalogService.updateDocWithFirestore('Providers/' + this.data.docId, "pictures", this.data.pictures);
    }
  }

  GetDropdownChange(event) {

  }

  SubmitForm() {

    console.log(this.form.value);

    this.CatalogService.MergeFirestoreData('Providers', this.data.docId, { Generales: this.form.value }).then(() => {
      this.data.Generales = this.form.value;
      this.dialogRef.close();
    })


  }

}
