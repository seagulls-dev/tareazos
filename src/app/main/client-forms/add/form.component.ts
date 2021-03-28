import {
    Component,
    OnChanges,
    Input,
    SimpleChanges,
    Output,
    EventEmitter,
} from "@angular/core";
import { FormGroup } from "@angular/forms";
import { fuseAnimations } from "@fuse/animations";
import { FuseConfigService } from "@fuse/services/config.service";
import { CatalogService } from "app/services/catalog.service";
import { NotificationService } from "app/services/notifications.service";
import { Subject } from "rxjs";
import { AngularFireStorage } from "@angular/fire/storage";
import { AngularFirestore } from "@angular/fire/firestore";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { map, filter } from "rxjs/operators";
import "firebase/storage";
export interface State {
    flag: string;
    name: string;
    population: string;
}

@Component({
    selector: "new-form",
    templateUrl: "./form.component.html",
    styleUrls: ["./form.component.scss"],
    animations: fuseAnimations,
})
export class FormDialogComponent implements OnChanges {
    dialogRef: any;
    file: any;
    filename: string = "";
    public stepper: any[] = [];
    pictures: any[] = [];
    finalObject: any = {};
    categories: any[];
    courses: any[];
    coursesFilteredByCategory: any[];
    filteredCourses: any[];
    currentCategory: string;
    searchTerm: string;
    ServicesList: any;
    @Input()
    public _data: any;
    @Input() Formid: any;
    @Input() FormData: any;
    @Input() Title: any = "";
    @Input() isColumn: boolean = false;
    @Output() FormSubmissionEvent = new EventEmitter<any>();

    selectedService: any;

    private _unsubscribeAll: Subject<any>;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private CatalogService: CatalogService,
        private NotificationService: NotificationService,
        private storage: AngularFireStorage,
        private firestore: AngularFirestore,
        private _fuseConfigService: FuseConfigService
    ) {
        this._unsubscribeAll = new Subject();
        // this._fuseConfigService.config = {
        //     layout: {
        //         toolbar  : {
        //             hidden: true
        //         },
        //     }
        // };

        this.currentCategory = "all";
        this.searchTerm = "";

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    CreateStepper(Formid) {
        //recorre cada stepper, busca las preguntas e inicializa el form
        //EL STEPPER TIENE QUE CARGAR DINAMICO DESDE FIREBASE -- HARDCODED FOR NOW
        var AllowAddingItems = false;

        // si es el formulario de proveedor agregar datos generales y habiliades
        if (Formid == "Proveedor") {
            AllowAddingItems = false;

            this.stepper.push({
                id: "Mainform",
                formName: "Candidatos",
                title: "Generales",
                cols: 3,
                AllowAddingItems: AllowAddingItems,
            });

            this.stepper.push({
                id: "Habilidades",
                formName: "Habilidades",
                title: "Habilidades",
                cols: 3,
                AllowAddingItems: true,
            });
            //si hay otro formulario agregar un else if, luego moveremos a firebase
            //si es el de categorias: plomeria, manten,etc. agrega el formulario de categorias
        } else {
            this.stepper.push({
                id: Formid,
                formName: Formid,
                title: Formid,
                cols: 3,
                AllowAddingItems: AllowAddingItems,
            });
            this.stepper.push({
                id: "Request",
                formName: "Request",
                title: "Request",
                cols: 3,
                AllowAddingItems: AllowAddingItems,
            });
        }

        this.stepper.forEach((element) => {
            element.formQuestions = this.CatalogService.getFormQuestions(
                element.formName
            );
            element.form = new FormGroup({});
        });
    }
    ngOnChanges(changes: SimpleChanges) {
        this.Formid = changes.Formid.currentValue;
        this.CreateStepper(this.Formid);
    }

    SelectService(item, form: FormGroup) {
        this.selectedService = item;
        form.patchValue({
            skill: item.key,
        });
    }

    ngOnInit() {
        if (this.Formid == "Proveedor")
            this.CatalogService.QueryItems(
                "catalog",
                "name",
                "SERVICES"
            ).subscribe((data) => {
                if (data.length > 0) {
                    this.CatalogService.QueryItems2(
                        "catalog/" + data[0].key + "/items",
                        "enabled",
                        true
                    ).subscribe((res) => {
                        this.ServicesList = res.sort((a,b)=>a.description > b.description?1:-1);
                    });
                }
            });
        //aqui hay que recibir la variable desde la ruta para poder cargar cualquier formulario
    }
    validateFirstStep(step){
    if(step.title == "Generales" && this.pictures.length < 2){
        return true;
    }
    
    return false;
    }


    SubmitForm() {
        //este titulo cambia en el componente que recibe el form
        this.finalObject.title = this.Formid;
        // para las categories limpieza, etc cuando proveedor va a decir proveedor
        this.finalObject.category = this.Formid;
        this.finalObject.createDate = new Date();
        if (this.pictures.length > 0) this.finalObject.pictures = this.pictures;
        //si el form usa el component allowasddingitems se guarda la lista, sino agrega items, se guarda el form
        this.stepper.forEach((stepperForm) => {
            if (!stepperForm.AllowAddingItems)
                this.finalObject[stepperForm.title] = stepperForm.form.value;
        });
        //envia el formulario lleno al component padre
        this.FormSubmissionEvent.emit(this.finalObject);

        this.stepper.forEach((element) => {
            element.form.reset();
        });
    }

    GetLists(Formlist, message) {
        this.finalObject[message] = Formlist;
    }

    GetDropdownChange(obj,step) {
       //TODAS LAS VECES QUE LOS DROPDOWN CAMBIEN pasa por aquí. 
        if((obj.key == 'subcategory' || obj.key == "skill") && step.title== 'Habilidades')
        this.CatalogService.QueryItems2('catalog/rates/items','filter',obj.value).subscribe(values=>{
            
            if(values.length>0){
               step.form.patchValue({
                   rate: values[0].description
               })
            }else
            step.form.patchValue({
                rate: ''
            })

        });
    }
    GetDownloadUrl(event) {
        //title viene del key del input en el formulario , deleted es cuando se borra un archivo en el component uploader
        if (event.deleted) {
            this.pictures.splice(event.index, 1);
        } else
            this.pictures.push({
                title: event.key,
                downloadUrl: event.downloadUrl,
            });
    }

    Opentab(){
        window.open('https://wa.me/50768329942?text=Hola!%20Estoy%20teniendo%20inconvenientes%20para%20cargar%20mis%20documentos')
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
}
