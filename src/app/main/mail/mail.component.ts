import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, takeUntil } from "rxjs/operators";

import { FuseSidebarService } from "@fuse/components/sidebar/sidebar.service";
import { FuseTranslationLoaderService } from "@fuse/services/translation-loader.service";
import { FuseConfigService } from "@fuse/services/config.service";
import { Mail } from ".//mail.model";
import { MailService } from "./mail.service";

import { locale as english } from ".//i18n/en";
import { locale as turkish } from ".//i18n/tr";
import { MailComposeDialogComponent } from './dialogs/compose/compose.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: "mail",
    templateUrl: "./mail.component.html",
    styleUrls: ["./mail.component.scss"],
    encapsulation: ViewEncapsulation.None,
})
export class MailComponent implements OnInit, OnDestroy {
    hasSelectedMails: boolean;
    isIndeterminate: boolean;
    folders: any[];
    statues: any[];
    labels: any[];
    searchInput: FormControl;
    currentMail: Mail;
    dialogRef: any;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {MailService} _mailService
     * @param {FuseSidebarService} _fuseSidebarService
     * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
     */
    constructor(
        private _mailService: MailService,
        private _fuseSidebarService: FuseSidebarService,
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        public _matDialog: MatDialog
    ) {
        // Load the translations
        this._fuseTranslationLoaderService.loadTranslations(english, turkish);

        // Set the defaults
        this.searchInput = new FormControl("");

        // Set the private defaults
        this._unsubscribeAll = new Subject();
        // this._fuseConfigService.config = {
        //     layout: {
        //         navbar:{
        //             hidden:true
        //         }
        //     }
        // }
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this._mailService.onSelectedMailsChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((selectedMails) => {
                setTimeout(() => {
                    // this.hasSelectedMails = selectedMails.length > 0;
                    //this.isIndeterminate = (selectedMails.length !== this._mailService.mails.length && selectedMails.length > 0);
                }, 0);
            });

        this._mailService.onFoldersChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((folders) => {
                this.folders = this._mailService.folders;
            });

        this._mailService.onStatuesChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {
                this.statues = this._mailService.statues;
            });

        this._mailService.onLabelsChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((labels) => {
                this.labels = this._mailService.labels;
            });

        this._mailService.onCurrentMailChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((currentMail) => {
                if (!currentMail) {
                    this.currentMail = null;
                } else {
                    this.currentMail = currentMail;
                }
            });

        this.searchInput.valueChanges
            .pipe(
                takeUntil(this._unsubscribeAll),
                debounceTime(300),
                distinctUntilChanged()
            )
            .subscribe((searchText) => {
                this._mailService.onSearchTextChanged.next(searchText);
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

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Compose dialog
     */
    composeDialog(): void {
        this.dialogRef = this._matDialog.open(MailComposeDialogComponent, {
            panelClass: "mail-compose-dialog",
        });
        this.dialogRef.afterClosed().subscribe((response) => {
            if (!response) {
                return;
            }
            const actionType: string = response[0];
            const formData: FormGroup = response[1];
            switch (actionType) {
                /**
                 * Send
                 */
                case "send":
                    break;
                /**
                 * Delete
                 */
                case "delete":
                    break;
            }
        });
    }

    /**
     * Toggle select all
     */
    toggleSelectAll(): void {
        this._mailService.toggleSelectAll();
    }

    /**
     * Select mails
     *
     * @param filterParameter
     * @param filterValue
     */
    selectMails(filterParameter?, filterValue?): void {
        this._mailService.selectMails(filterParameter, filterValue);
    }

    /**
     * Deselect mails
     */
    deselectMails(): void {
        this._mailService.deselectMails();
    }

    /**
     * Deselect current mail
     */
    deselectCurrentMail(): void {
        this._mailService.onCurrentMailChanged.next(null);
    }

    /**
     * Toggle label on selected mails
     *
     * @param labelId
     */
    toggleLabelOnSelectedMails(labelId): void {
        this._mailService.toggleLabelOnSelectedMails(labelId);
    }

    /**
     * Set folder on selected mails
     *
     * @param folderId
     */
    setFolderOnSelectedMails(folderId): void {
        this._mailService.setFolderOnSelectedMails(folderId);
    }

    /**
     * Toggle the sidebar
     *
     * @param name
     */
    toggleSidebar(name): void {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    }
}
