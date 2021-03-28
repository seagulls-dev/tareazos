import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { CatalogService } from "app/services/catalog.service";
import { NotificationService } from "app/services/notifications.service";
import { fuseAnimations } from "@fuse/animations";
import { Observable } from "rxjs";
import { Mail } from "../mail.model";
import { MailService } from "../mail.service";
import { AuthService } from "../../../services/auth.service";
import * as _ from "lodash";

@Component({
    selector: "mail-list",
    templateUrl: "./mail-list.component.html",
    styleUrls: ["./mail-list.component.scss"],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
})
export class MailListComponent implements OnInit, OnDestroy {
    mails: Mail[];
    currentMail: Mail;
    requests: any[] = [];
    nextKey: any;
    prevKeys: any[] = [];

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {ActivatedRoute} _activatedRoute
     * @param {MailService} _mailService
     * @param {Location} _location
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        public _mailService: MailService,
        private _location: Location,
        private CatalogService: CatalogService,
        private AuthService: AuthService
    ) {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */

    ngOnInit(): void {
        // subscribe to user login only load requests by user or involving the usera

        // Subscribe to update mails on changes
        this._mailService.onMailsChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((requests) => {
                // const len = requests.length >= 5 ? 5 : requests.length - 1;
                this.requests = _.slice(requests, 0, 5);
                this.nextKey = {
                    docId: _.get(requests[5], "id"),
                    request: _.get(requests[5], "data.Request"),
                };
            });

        // Subscribe to update current mail on changes
        this._mailService.onCurrentMailChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((currentMail) => {
                this.currentMail = currentMail;
                /*   if ( !currentMail )
                {
                    // Set the current mail id to null to deselect the current mail
                    this.currentMail = null;

                    // Handle the location changes
                    const labelHandle  = this._activatedRoute.snapshot.params.labelHandle,
                          filterHandle = this._activatedRoute.snapshot.params.filterHandle,
                          folderHandle = this._activatedRoute.snapshot.params.folderHandle;

                    if ( labelHandle )
                    {
                        this._location.go('apps/mail/label/' + labelHandle);
                    }
                    else if ( filterHandle )
                    {
                        this._location.go('apps/mail/filter/' + filterHandle);
                    }
                    else
                    {
                        this._location.go('apps/mail/' + folderHandle);
                    }
                }
                else
                {
                    this.currentMail = currentMail;
                } */
            });
    }

    nextPage() {
        this.prevKeys.push({
            docId: _.first(this.requests)["id"],
            request: _.first(this.requests)["data"]["Request"],
        });
        this._mailService.setCurrentFilter({
            pageIndex: this.nextKey,
        });
    }

    prevPage() {
        const prevKey = _.last(this.prevKeys); // use last key in array
        this.prevKeys = _.dropRight(this.prevKeys); // then remove the last key in the array
        this._mailService.setCurrentFilter({
            pageIndex: prevKey,
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
     * Read mail
     *
     * @param requesId
     */
    readMail(requesId): void {
        const labelHandle = this._activatedRoute.snapshot.params.labelHandle;
        const filterHandle = this._activatedRoute.snapshot.params.filterHandle;
        const folderHandle = this._activatedRoute.snapshot.params.folderHandle;
        if (labelHandle) {
            this._location.go("mail/label/" + labelHandle + "/" + requesId);
        } else if (filterHandle) {
            this._location.go("mail/filter/" + filterHandle + "/" + requesId);
        } else {
            this._location.go("mail/" + folderHandle + "/" + requesId);
        }

        // Set current mail
        this._mailService.setCurrentMail(requesId);
    }
}
