import { Component, OnInit } from "@angular/core";
import { CatalogService } from "app/services/catalog.service";
import { NotificationService } from "app/services/notifications.service";
import { BehaviorSubject } from "rxjs";
import { FuseUtils } from "@fuse/utils";
import { NumericDictionary } from 'lodash';
@Component({
    selector: "catalogos",
    templateUrl: "./main.component.html",
    styleUrls: ["./main.component.scss"],
    providers: [CatalogService],
})
export class MainComponent implements OnInit {
    public catalog: any = {};
    data: any = [];
    displayedColumns: string[] = [];
    columnsToDisplay: string[];
    public catalogref: any;
    public itemsref: any;
    public gridData: any[] = [];
    public item: any = {};
    public name: string;
    public selectcatalog: string;
    public nuevo: boolean;
    edit = false;
    dataSource = new BehaviorSubject([]);
    constructor(
        public CatalogService: CatalogService,
        public NotificationService: NotificationService
    ) { }

    ngOnInit() {
        this.item.enabled = true;
        this.catalogref = this.CatalogService.getItemsWithKey("catalog");

        //CREAR HEADERS DE LA TABLA DINAMICAMENTE DESDE LAS PREGUTNAS DEL FORMULARIO
        this.displayedColumns = ["options"];
        this.CatalogService.getFormQuestions("Catelog").subscribe((data) => {
            data.forEach((element) => {
                this.displayedColumns.push(element.key);
            });
            this.columnsToDisplay = this.displayedColumns.slice();
        });
    }

    AddItem(event) {
        if (this.item.description) {
            var result = this.data.filter(
                (elem) =>
                    elem.description.toLowerCase() ===
                    this.item.description.toLowerCase() &&
                    elem.filter.toLowerCase() == this.item.filter.toLowerCase()
            );
            if (result.length === 0) {
                this.columnsToDisplay = this.displayedColumns.slice();

                this.data.push({
                    key: this.item.description,
                    description: this.item.description,
                    enabled: this.item.enabled,
                    filter: this.item.filter ?? "",
                    hasSubList: this.item.hasSubList ?? false,
                    subListName: this.item.subListName ?? "",
                    customIcon: this.item.customIcon ?? "",
                    iconData: this.item.iconData ?? "",
                    publicIconUrl: this.item.publicIconUrl ?? "",
                    legend: this.item.legend ?? "",
                });

                this.dataSource.next(this.data);
                this.NotificationService.openSnackBar(
                    "Agregado correctamente",
                    ""
                );
            } else
                this.NotificationService.openSnackBar(
                    "Ya existe en la lista",
                    ""
                );
        }
    }

    ChangeCatalog(event) {
        this.nuevo = false;
        this.catalog.name = event.toUpperCase();
        this.CatalogService.getItems("catalog/" + event + "/items").subscribe(
            (data) => {
                this.data = [];
                data.forEach((element) => {
                    this.data.push(element);
                });
                this.dataSource.next(this.data);
            }
        );
    }

    SaveCatalog() {
        //GUARDAR SIEMPRE EL KEY EN LOWER CASE Y EL NAME EN UPPER CASE
        this.CatalogService.getObjectReference(
            "catalog/" + this.catalog.name.toLowerCase()
        )
            .set({ name: this.catalog.name.toUpperCase(), items: this.data })
            .then((_) => {
                this.nuevo = false;
                this.NotificationService.openSnackBar(
                    "Guardado Correctamente",
                    ""
                );
            });
    }
    Cancel() {
        this.selectcatalog = undefined;
        this.item = {};
        this.data = [];
        this.dataSource.next(this.data);
        this.catalog = {};
        this.nuevo = true;
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;

        var datafiltered = FuseUtils.filterArrayByString(
            this.data,
            filterValue
        );
        this.dataSource.next(datafiltered);
        //this.dataSource. = filterValue.trim().toLowerCase();
    }

    deleteRow(element) {
        this.data.splice(element, 1);
        this.dataSource.next(this.data);
    }

    editRow(element, index) {
        this.edit = true;
        this.item = element;
    }
    exitEdit(){
        this.edit= false;
        this.item = {};
    }
}
