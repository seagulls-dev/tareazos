import {
    Component,
    Input,
    Output,
    EventEmitter,
    ViewContainerRef,
    OnInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit,
    DebugElement
} from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { QuestionBase } from "./question-base";
import { of } from "rxjs";
import { CatalogService } from "app/services/catalog.service";

@Component({
    selector: "df-question",
    templateUrl: "./dynamic-form-question.component.html",
    providers: [CatalogService]
})
export class DynamicFormQuestionComponent implements OnInit {
    @Input() question: QuestionBase<any>;
    @Input() form: FormGroup;
    @Output() ControlChange = new EventEmitter<any>();
    @Output() GetDownloadUrl2 = new EventEmitter<any>();
    options: any;
    file: any;
    filename: string = "";
    public constructor(private CatalogService: CatalogService) { }
    ngOnInit() {
        if (this.question.required)
            this.form.registerControl(
                this.question.key,
                new FormControl("", Validators.required)
            );
        else
            this.form.registerControl(
                this.question.key,
                new FormControl("")
            );
        /*   if (this.question.controlType != "file")
              this.form.registerControl(
                  this.question.key,
                  new FormControl("", Validators.required)
              );
          else { */
        /*     this.form.registerControl(
                this.question.key,
                new FormControl("", Validators.required)
            ); */
        //} //SI LA LISTA TRAE OPTIONLIST QUE UN STRING SE BUSCAR EL NOMBRE DE ESA LISTA EN CATALOG

        if (
            this.question.controlType == "dropdown" ||
            (this.question.controlType == "multiple" &&
                this.question.optionsList != '')
        ) {
            //SI EL CONTROL TIENE OTRO CONTROL QUE LO CAMBIE LO DEJAMOS SUSCRITO PARA CUANDO CAMBIE VUELVA A CARGAR LAS OPCIONES
            if (this.question.ChangeMeKey)
                this.form.controls[this.question.ChangeMeKey].valueChanges.subscribe(value => {

                    this.form.get(this.question.key).setValue('');

                    this.options = this.CatalogService.QueryItems2(
                        "catalog/" + this.question.ListToFilter + "/items",
                        'filter',
                        value
                    )

                })
            else {
                this.options = this.CatalogService.QueryItems2(
                    "catalog/" + this.question.optionsList + "/items",
                    "enabled",
                    true
                );
                /*  this.CatalogService.QueryItems(
                     "catalog",
                     "name",
                     this.question.optionsList
                 ).subscribe(data => {
                     if (data.length > 0)
                         this.options = this.CatalogService.QueryItems2(
                             "catalog/" + data[0].key + "/items",
                             "enabled",
                             true
                         );
                 }); */
            }
            //SINO SE VERIFICA SI TRAE LAS OPCIONES YA CARGADAS Y SE CONVIERTEN EN OBSERVABLE
        } else if (
            this.question.controlType == "dropdown" ||
            (this.question.controlType == "multiple" && this.question.options)
        )
            this.options = of(this.question.options);
    }

    // se emite este event en el change de los select el componente padre debe recibirlo
    // y verfiicar si es el control que desea manipular
    controlChange(target) {

        if (target && this.question) {
            let obj = { key: this.question.key, value: target };
            this.ControlChange.emit(obj);
        }
    }

    uploadFile(event, key) {
        this.file = event.target.files[0];
        this.filename = event.target.files[0].name;
        this.ControlChange.emit({ key: key, file: this.file });
    }

    get isValid() {
        return this.form.controls[this.question.key].valid;
    }
    GetDownloadUrl(event) {
        if (event.deleted)
            this.GetDownloadUrl2.emit(event)
        else
            this.GetDownloadUrl2.emit({ key: this.question.label, downloadUrl: event });
    }



}
