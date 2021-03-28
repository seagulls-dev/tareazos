import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { of } from "rxjs";
import { CatalogService } from "app/services/catalog.service";
@Component({
  selector: 'app-dynamicfilters',
  templateUrl: './dynamicfilters.component.html',
  styleUrls: ['./dynamicfilters.component.scss']
})
export class DynamicfiltersComponent implements OnInit {
  @Input() FormId;
  formQuestions: any;
  form: FormGroup = new FormGroup({});
  @Output() ControlChange = new EventEmitter<any>();
  constructor(private CatalogService: CatalogService) { }

  ngOnInit(): void {

    this.CatalogService.getFormQuestions(
      this.FormId
    ).subscribe(data => {
      //SI ES UN TEXT AREA NO FUNCIONA PARA FILTRAR Y SI ES UN TOOGLE CAMBIAR A DROPDOWN CON TRUE OR FALSE
      data.forEach((element, index) => {
        if (element.controlType == 'textarea' || element.controlType == 'file') {
          data.splice(index, 1);
        } if (element.controlType == 'toggle') {
          element.controlType = 'dropdown'
          element.options = [{ key: true, label: 'Cierto' }, { key: false, label: 'Falso' }]
        }
        element.width=100;
      });
      this.formQuestions = of(data);
    });
  }

  GetControl(event){
    this.ControlChange.emit(event);
  }

  ApplyFilter()
  {

  }

}
