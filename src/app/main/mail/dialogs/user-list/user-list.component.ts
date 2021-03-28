import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl } from "@angular/forms";
import { FuseConfigService } from "@fuse/services/config.service";
import { CatalogService } from "app/services/catalog.service";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { fuseAnimations } from "@fuse/animations";
import { MailComposeDialogComponent } from "../compose/compose.component";
import { MailService } from "../../mail.service";
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, takeUntil } from "rxjs/operators";
import * as _ from "lodash";
import { Options, LabelType } from "ng5-slider";
import { MailContactDialogComponent } from "../contact/compose.component";
import { environment } from 'environments/environment';

@Component({
    selector: "app-user-list",
    templateUrl: "./user-list.component.html",
    styleUrls: ["./user-list.component.scss"],
    animations: fuseAnimations,
})
export class UserListComponent implements OnInit {
    public providers;
    public tableData: any = [];
    userData: any = [];
    priceTypes: any[];
    queryField: string;
    public isActive: boolean = false;
    selected = "option2";
    options: string[] = ["One", "Two", "Three"];
    filteredOptions: Observable<string[]>;
    displayedColumns: string[] = [
        "Cellphone",
        "FirstName",
        "LastName",
        "Gender",
        "Contratar",
    ];
    contact: boolean;
    minRate: number;
    maxRate: number;
    sliderOptions: Options;
    dataSource: any = [];
    nextKey: any;
    prevKeys: any[] = [];
    searchInput: FormControl;
    selectedPriceType: any = {};
    // Private
    private _unsubscribeAll: Subject<any>;
    myControl = new FormControl();
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    @ViewChild(MatSort, { static: true }) sort: MatSort;
    constructor(
        private _fuseConfigService: FuseConfigService,
        private CatalogService: CatalogService,
        public _matDialog: MatDialog,
        public _mailService: MailService,
        public dialogRef: MatDialogRef<UserListComponent>
    ) {
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true,
                },
            },
        };
        this.searchInput = new FormControl("");
        // Set the private defaults
        this._unsubscribeAll = new Subject();
        this.selectedPriceType = "";
        this.minRate = 0;
        this.maxRate = 30;
        this.sliderOptions = {
            floor: 0,
            ceil: 50,
            translate: (value: number, label: LabelType): string => {
                switch (label) {
                    case LabelType.Low:
                        return value.toString();
                    case LabelType.High:
                        return value.toString();
                    default:
                        return value.toString();
                }
            },
        };
        this.queryField = "";
        this.contact = false;
    }

    ngOnInit(): void {
        this.dataSource.paginator = this.paginator;
        
        this._mailService.onProvidersChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((providers) => {
                for (let item of providers) {
                    this.getProfilePic(item.data);
                }
                this.userData = providers;
                // const len = providers.length >= 5 ? 5 : providers.length - 1;
                this.providers = _.slice(providers, 0, 4).map((item: any) => {
                    return item;
                });
                this.nextKey = {
                    filterKey: _.get(providers[4], "data." + this.queryField),
                    docId: _.get(providers[4], "id"),
                };
                this.isActive = true;
                this.dataSource = new MatTableDataSource(
                    this.providers.map((item: any) => item.data)
                );
            });
        this._mailService.onCurrentMailChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((currentMail) => {
                this._mailService.setRequestCategory(currentMail);
            });

        this.searchInput.valueChanges
            .pipe(
                takeUntil(this._unsubscribeAll),
                debounceTime(300),
                distinctUntilChanged()
            )
            .subscribe((searchText) => {
                this._mailService.onSearchProvidersTextChanged.next(searchText);
            });

        this._mailService.onPriceTypesChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((priceTypes) => {
                this.priceTypes = priceTypes;
            });

        this._mailService.onQueryFieldChanged.subscribe((queryField) => {
            if (queryField !== "") {
                this.queryField = queryField;
            }
        });
    }

    getProfilePic(data) {
        data.picture = '';
        data.color = environment.colors[Math.floor(Math.random() * environment.colors.length)];

        if (data.pictures) {
            if (data.pictures.length > 0) {
                data.picture = data.pictures[0].downloadUrl;
            }
        }

        return true;
    }

    nextPage() {
        this.prevKeys.push({
            docId: _.first(this.providers)["id"],
            filterKey: _.first(this.providers)["data." + this.queryField],
        });
        this._mailService.setProvidersIndex({
            pageIndex: this.nextKey,
        });
    }

    prevPage() {
        const prevKey = _.last(this.prevKeys); // use last key in array
        this.prevKeys = _.dropRight(this.prevKeys); // then remove the last key in the array
        this._mailService.setProvidersIndex({
            pageIndex: prevKey,
        });
    }

    ChangePriceType(priceType) {
        this._mailService.setPriceType(priceType);
    }

    ChangeRate(min) {
        this._mailService.setRate({ min: min });
    }

    ChangeHighRate(max) {
        this._mailService.setRate({ max: max });
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();

        return this.options.filter((option) =>
            option.toLowerCase().includes(filterValue)
        );
    }
    closeDialog(): void {
        this.dialogRef.close();
    }
    getContact(e) {
        this._mailService.createOffer();
        let dialogRef = this._matDialog.open(MailContactDialogComponent, {
            panelClass: "mail-compose-dialog",
        });
        dialogRef.afterClosed().subscribe((response) => {
            this.contact = false;
        });
    }
    getRecord(e) {
        if (this.contact) return;
        this.contact = false;
        let requestId = this.userData.filter((item, index) => {
            if (index == e) {
                return item;
            }
        });
        let dialogRef = this._matDialog.open(MailComposeDialogComponent, {
            panelClass: "mail-compose-dialog",
            data: { providerId: requestId[0].id },
        });
        dialogRef.afterClosed().subscribe((response) => {
            if (!response) {
                return;
            }
        });
    }
}
