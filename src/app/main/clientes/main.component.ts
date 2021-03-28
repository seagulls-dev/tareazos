import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Subject, Observable, of } from "rxjs";

import { fuseAnimations } from "@fuse/animations";

import { QuestionBase } from "app/models/question-base";

import { CatalogService } from "app/services/catalog.service";
import { NotificationService } from "app/services/notifications.service";
import { MatDialog } from "@angular/material/dialog";
import "firebase/database";
@Component({
    selector: "facturas",
    templateUrl: "./main.component.html",
    styleUrls: ["./main.component.scss"],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
})
export class ClientesComponent implements OnInit, OnDestroy {
    dialogRef: any;
    newQuestions: QuestionBase<any>[] = [];
    public questionstype: any[];
    public textboxType: any[];
    public formsref: any;
    public questionsref: any;
    public topicinfo: any = {};
    public topic: any = {};
    public nuevo: boolean = true;
    public FormId: any;
    public showopciones: boolean = false;
    public Mainform: FormGroup = new FormGroup({});
    public ObjectRef: any;
    public questions: Observable<any[]>;
    public Mainform2: FormGroup = new FormGroup({});
    public url: any;
    public categoryID: any;
    public options: any;
    public form: FormGroup;
    public edit: any = null;

    // Private
    private _unsubscribeAll: Subject<any>;

    sourceBuilderTools = [
        {
            controlType: "section",
            children: [] as any[],
            icon: "far fa-square",
            label: "Nueva Sección",
            order: 0,
            width: 100,
        },
        {
            controlType: "textbox",
            key: "Textbox",
            label: "Nuevo Textbox",
            order: 0,
            required: true,
            title: "Nombre",
            type: "text",
            value: "",
            visible: true,
            width: 25,
            icon: "",
        },
        {
            controlType: "dropdown",
            key: "Dropdown",
            label: "Nuevo Dropdown",
            optionsList: "PROVINCIAS",
            ChangeMeKey: "",
            ListToFilter: "",
            noOptionsHidden: false,
            order: 0,
            required: true,
            value: "",
            visible: true,
            width: 25,
            icon: "",
            tooltip:""
        },
        {
            controlType: "datepicker",
            key: "Datepicker",
            label: "Nuevo DatePicker",
            order: 0,
            title: "Fecha",
            value: "",
            visible: true,
            width: 25,
        },
        {
            controlType: "textarea",
            key: "Textarea",
            label: "Nuevo Textarea",
            order: 0,
            required: true,
            title: "Nombre",
            type: "text",
            value: "",
            visible: true,
            width: 25,
            icon: "",
        },
        {
            controlType: "toggle",
            key: "Toggle",
            label: "Nuevo Toggle",
            order: 0,
            title: "Nombre",
            value: "",
            visible: true,
            width: 25,
        },
    ];

    droppableItemClass = (item: any) =>
        `control widthControl-${item.width} ${item.controlType}`;

    builderDrag(e: any) {
        const item = e.value;
        item.data =
            item.controlType === "number"
                ? (Math.random() * 100) | 0
                : Math.random().toString(36).substring(20);

        this.form.registerControl(
            item.key,
            new FormControl("", Validators.required)
        );
    }

    constructor(
        private CatalogService: CatalogService,
        private NotificationService: NotificationService,
        private _matDialog: MatDialog
    ) {
        this.form = new FormGroup({});
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    ngOnInit() {
        this.formsref = this.CatalogService.getItemsWithKey("Forms");

        this.questionstype = [
            {
                description: "Texto Corto",
                key: "textbox",
            },
            {
                description: "DatePicker",
                key: "datepicker",
            },
            {
                description: "Seleccionable",
                key: "dropdown",
            },
            {
                description: "Selección Multiple",
                key: "multiple",
            },
            {
                description: "Texto Largo",
                key: "textarea",
            },
            {
                description: "Cierto/Falso",
                key: "toggle",
            },
            {
                description: "File",
                key: "file",
            },
        ];

        this.textboxType = [
            {
                description: "Numerico ",
                key: "number",
            },
            {
                description: "Texto",
                key: "text",
            },
            {
                description: "Fecha",
                key: "date",
            },
            {
                description: "Contraseña",
                key: "password",
            },
            {
                description: "Correo",
                key: "email",
            },
        ];
    }

    controlClick(row) {
        this.edit = null;

        this.edit = {
            question: row,
            questionstype: this.questionstype,
            textboxType: this.textboxType,
        };
    }

    ChangeForm(event) {
        this.topic = {};
        this.topic.questions = [];
        if (event) {
            this.nuevo = false;
            this.showopciones = true;
        } else this.showopciones = false;
        this.questionsref = this.CatalogService.getFormQuestions(event);

        this.ObjectRef = this.CatalogService.getObjectReference(
            "Forms/" + event
        );
        this.CatalogService.getitem("Forms", event).subscribe((data) => {
            if (data != null) this.topic = data;

            if (!this.topic.questions) this.topic.questions = [];

            for (let item of this.topic.questions) {
                if (item.required) {
                    this.form.registerControl(
                        item.key,
                        new FormControl("", Validators.required)
                    );
                } else {
                    this.form.registerControl(item.key, new FormControl(""));
                }

                if (
                    item.controlType == "dropdown" ||
                    (item.controlType == "multiple" && item.optionsList)
                ) {
                    this.CatalogService.QueryItems(
                        "catalog",
                        "name",
                        item.optionsList
                    ).subscribe((data) => {
                        if (data.length > 0)
                            this.options = this.CatalogService.QueryItems2(
                                "catalog/" + data[0].key + "/items",
                                "enabled",
                                true
                            );
                    });
                    //SINO SE VERIFICA SI TRAE LAS OPCIONES YA CARGADAS Y SE CONVIERTEN EN OBSERVABLE
                } else if (
                    item.controlType == "dropdown" ||
                    (item.controlType == "multiple" && item.options)
                ) {
                    this.options = of(item.options);
                }
            }

            if (this.topic.questions) {
                this.topic.questions.sort((a, b) => a.order - b.order);
            }
        });
    }
    //NO HABILITAR EN PUBLICACIONES
    SaveTopic() {
        this.updateOrder(this.topic.questions);

        if (this.nuevo) {
            this.ObjectRef = this.CatalogService.getObjectReference(
                "Forms" + "/" + this.topic.name
            );
            const promise = this.ObjectRef.set(this.topic);
            promise.then((_) => {
                this.NotificationService.openSnackBar(
                    "Agregardo Correctamente",
                    null
                );
            });
        } else {
            this.CatalogService.getitem("Forms", this.topic.key);
            const promise = this.ObjectRef.update(this.topic);
            promise.then((_) =>
                this.NotificationService.openSnackBar(
                    "Actualizado correctamente",
                    null
                )
            );
        }
    }

    AddQuestionToForm(event) {
        if (!this.topic.questions) this.topic.questions = [];

        this.topic.questions.push({
            controlType: "textbox",
            key: "",
            label: "",
            order: this.topic.questions.length + 1,
            required: true,
            value: "",
            width: 100,
            visible: true,
        });
    }

    CleanForm() {
        location.reload();
    }

    DeleteQuestion(dataItem) {
        var index = this.topic.questions.indexOf(dataItem, 0);
        if (index > -1) {
            this.topic.questions.splice(index, 1);
        }
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    log(e: any) {
        if (e.type === "drop" && this.topic?.questions) {
            var model = this.topic.questions.filter((x) => x === e.value)[0];
            if (model !== undefined) {
                this.controlClick(model);
            }
        }
    }

    loadQuestions() {
        this.topic.questions = [];
    }

    updateOrder(obj) {
        var count = 0;
        for (var item of obj) {
            count++;
            item.order = count;
        }

        return obj;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * New
     */
    // new(): void {
    //     this.dialogRef = this._matDialog.open(FormDialogComponent, {
    //         panelClass: 'form-dialog',
    //         disableClose: true,
    //         width: '400px',
    //         data: {
    //             action: 'new',
    //             form: this.model
    //         }
    //     });

    //     this.dialogRef.afterClosed()
    //         .subscribe((response: any) => {

    //             this.myFormGroup = undefined;

    //             if (response === null) {
    //                 return;
    //             }
    //         });
    // }
}
