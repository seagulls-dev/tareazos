import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { MatDatepickerInputEvent } from "@angular/material/datepicker";
import { fuseAnimations } from "@fuse/animations";
import { Options, LabelType } from "ng5-slider";
import { MailService } from "../../mail.service";

@Component({
    selector: "mail-main-sidebar",
    templateUrl: "./main-sidebar.component.html",
    styleUrls: ["./main-sidebar.component.scss"],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
})
export class MailMainSidebarComponent implements OnInit, OnDestroy {
    folders: any[];
    statues: any[];
    services: any[];
    labels: any[];
    accounts: object;
    title: any = "Mis Tareas";
    selectedAccount: any = {};
    selectedCategory: any = {};
    minValue: number;
    maxValue: number;
    sliderOptions: Options;
    selectedStatus: any;
    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {MailService} _mailService
     * @param {MatDialog} _matDialog
     */
    constructor(
        private _mailService: MailService,
    ) {
        // Set the defaults
        this.accounts = {
            AsClient: "Como Cliente",
            AsTasker: "Como Tareador",
        };
        this.selectedAccount = "AsClient";
        this.selectedCategory = "";
        this._mailService.setCurrentInboxType(this.selectedAccount);

        // Set the private defaults
        this._unsubscribeAll = new Subject();

        this.minValue = 100;
        this.maxValue = 400;
        this.sliderOptions = {
            floor: 0,
            ceil: 500,
            translate: (value: number, label: LabelType): string => {
                switch (label) {
                    case LabelType.Low:
                        return "$" + value;
                    case LabelType.High:
                        return "$" + value;
                    default:
                        return "$" + value;
                }
            },
        };
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this._mailService.onFoldersChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((folders) => {
                this.folders = folders;
            });

        this._mailService.onStatuesChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((statues) => {
                this.statues = statues;
            });

        this._mailService.onServicesChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((services) => {
                this.services = services;
            });

        this._mailService.onLabelsChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((labels) => {
                this.labels = labels;
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
    ChangeInboxType(event) {
        if (event == "AsClient") this.title = "Mis Tareas como cliente";
        else this.title = "Tareas como Tareador";
        this.LoadSidebarOptions(event);
        this._mailService.setCurrentInboxType(event);
    }

    ChangeCategory(category) {
        this._mailService.setCurrentFilter(category);
    }

    ChangeDate(type: string, event: MatDatepickerInputEvent<Date>) {
        const timestamp = new Date(event.value).getTime();
        this._mailService.setCurrentFilter({ timestamp: timestamp });
    }

    ChangeValue(event) {
        this._mailService.setCurrentFilter({ minBudget: event });
    }

    ChangeHighValue(event) {
        this._mailService.setCurrentFilter({ maxBudget: event });
    }

    LoadSidebarOptions(type) {
        this._mailService.getFolders(type);
    }

    ChangeStatus(filter) {
        this._mailService.setCurrentFilter(filter);
        this.selectedStatus = filter.status;
    }

    ChangeTodas(folder) {
        this._mailService.setCurrentFilter(folder);
        this.selectedStatus = null;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
}
