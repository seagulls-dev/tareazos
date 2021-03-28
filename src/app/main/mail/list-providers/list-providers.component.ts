import {
    Component,
    OnInit,
    Input,
    ViewChild,
    AfterViewInit,
} from "@angular/core";
import { FuseConfigService } from "@fuse/services/config.service";
import { CatalogService } from "app/services/catalog.service";
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, takeUntil } from "rxjs/operators";
import { MailComposeDialogComponent } from "../dialogs/compose/compose.component";
import { MailContactDialogComponent } from "../dialogs/contact/compose.component";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatDialog } from "@angular/material/dialog";
import { UserListComponent } from "./../dialogs/user-list/user-list.component";
import { FormControl } from "@angular/forms";
import { MailService } from "../mail.service";
import * as _ from "lodash";
import { environment } from 'environments/environment';
/** Constants used to fill up our data base. */

@Component({
    selector: "app-list-providers",
    templateUrl: "./list-providers.component.html",
    styleUrls: ["./list-providers.component.scss"],
})
export class ListProvidersComponent implements OnInit, AfterViewInit {
    public providers;
    public tableData: any = [];
    dialogRef: any;
    public isActive: boolean = false;
    @Input() category: string;
    userData: any = [];
    displayedColumns: string[] = [
        "Cellphone",
        "FirstName",
        "LastName",
        "Gender",
        "Contratar",
    ];
    contact: boolean;
    queryField: string;
    nextKey: any;
    prevKeys: any[] = [];
    // dataSource = new MatTableDataSource(this.tableData);
    dataSource: any = [];
    searchInput: FormControl;
    // Private
    private _unsubscribeAll: Subject<any>;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    @ViewChild(MatSort, { static: true }) sort: MatSort;
    constructor(
        private _fuseConfigService: FuseConfigService,
        private CatalogService: CatalogService,
        public _matDialog: MatDialog,
        public _mailService: MailService
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
        this.queryField = "";
        this.contact = false;
    }

    ngOnInit(): void {
        // this.LoadProviders();
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

    // ngOnDestroy(): void {
    //     // Unsubscribe from all subscriptions
    //     this._unsubscribeAll.next();
    //     this._unsubscribeAll.complete();
    // }
    // ngOnChanges(changes: SimpleChanges) {
    //     this.category = changes.category.currentValue;
    //     this.LoadProviders();
    // }

    ngAfterViewInit() {}

    showTable() {
        this.isActive = !this.isActive;
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

    LoadProviders() {
        if (this.category) {
            this.providers = this.CatalogService.QueryItemsWithFirestore(
                "Providers",
                this.category,
                true
            );
        } else {
            this.providers = this.CatalogService.GetItemsWithKeyFirestore(
                "Providers"
            );
        }
    }

    OpenProviderProfile(provider) {
        this.dialogRef = this._matDialog.open(MailComposeDialogComponent, {
            panelClass: "mail-compose-dialog",
            data: { provider },
        });
        this.dialogRef.afterClosed().subscribe((response) => {
            if (!response) {
                return;
            }
        });
    }
    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    openDialog() {
        const dialogRef = this._matDialog.open(UserListComponent, {
            panelClass: "mail-compose-dialog",
            width: '60vw',
            height: '350px'
        });
        dialogRef.afterClosed().subscribe((result) => {
        });
    }
    getContact(e) {
        // const tr = document.getElementById("tr");
        // tr.removeEventListener("click", this.getRecord, false);
        this.contact = true;
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
