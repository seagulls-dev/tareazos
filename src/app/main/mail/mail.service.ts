import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot,
} from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";
import { CatalogService } from "app/services/catalog.service";
import { FuseUtils } from "@fuse/utils";
import { AuthService } from "../../services/auth.service";
import { Mail } from "./mail.model";
import { type } from "os";

@Injectable()
export class MailService implements Resolve<any> {
    mails: Mail[];
    requests: any;
    providers: any;
    selectedMails: Mail[];
    currentMail: Mail;
    currentCategory: any;
    queryFieldForProvider: any;
    priceType: any;
    ProvidersIndex: any;
    searchText = "";
    providerSearchText = "";
    folders: any;
    statues: any;
    services: any;
    labels: any[];
    rate: any = {};
    routeParams: any;
    inboxtype: any;
    selectedFilters: any = {};
    selectedProviderFilters: any = {};
    onMailsChanged: BehaviorSubject<any>;
    onProvidersChanged: BehaviorSubject<any>;
    onSelectedMailsChanged: BehaviorSubject<any>;
    onCurrentMailChanged: BehaviorSubject<any>;
    onFoldersChanged: BehaviorSubject<any>;
    onStatuesChanged: BehaviorSubject<any>;
    onServicesChanged: BehaviorSubject<any>;
    onPriceTypesChanged: BehaviorSubject<any>;
    onLabelsChanged: BehaviorSubject<any>;
    onSearchTextChanged: BehaviorSubject<any>;
    onSearchProvidersTextChanged: BehaviorSubject<any>;
    onInboxTypeChanged: BehaviorSubject<any>;
    onQueryFieldChanged: BehaviorSubject<any>;
    requestId: string;
    selectedOffer: string;
    offerDate: Date;

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient,
        private CatalogService: CatalogService,
        private AuthService: AuthService
    ) {
        // Set the defaults
        this.selectedMails = [];
        this.onMailsChanged = new BehaviorSubject([]);
        this.onProvidersChanged = new BehaviorSubject([]);
        this.onSelectedMailsChanged = new BehaviorSubject([]);
        this.onCurrentMailChanged = new BehaviorSubject({});
        this.onFoldersChanged = new BehaviorSubject([]);
        this.onStatuesChanged = new BehaviorSubject([]);
        this.onServicesChanged = new BehaviorSubject([]);
        this.onPriceTypesChanged = new BehaviorSubject([]);
        this.onLabelsChanged = new BehaviorSubject([]);
        this.onInboxTypeChanged = new BehaviorSubject([]);
        this.onQueryFieldChanged = new BehaviorSubject("");
        this.onSearchTextChanged = new BehaviorSubject("");
        this.onSearchProvidersTextChanged = new BehaviorSubject("");
        this.priceType = "";
        this.requestId = "";
    }

    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        this.routeParams = route.params;

        return new Promise((resolve, reject) => {
            Promise.all([
                this.getFolders(),
                this.getStatues(),
                this.getLabels(),
                this.getMails(),
                this.getServices(),
                this.getProviders(),
                this.getPriceTypes(),
            ]).then(() => {
                if (this.routeParams.requestId) {
                    this.setCurrentMail(this.routeParams.requestId);
                } else {
                    this.setCurrentMail(null);
                }

                this.onSearchTextChanged.subscribe((searchText) => {
                    if (searchText !== "") {
                        this.searchText = searchText;
                        this.getMails();
                    } else {
                        this.searchText = searchText;
                        this.getMails();
                    }
                });

                this.onSearchProvidersTextChanged.subscribe((searchText) => {
                    if (searchText !== "") {
                        this.providerSearchText = searchText;
                        this.getProviders();
                    }
                });

                resolve();
            }, reject);
        });
    }

    /**
     * Get all folders TRAE LAS OPCIONE DEL SIDEBAR
     *
     * @returns {Promise<any>}
     */
    getFolders(type = null): Promise<any> {
        if (!type) type = "AsClient";

        return new Promise((resolve, reject) => {
            this.CatalogService.getCollectionFirestore("SideBar")
                .doc(type)
                .snapshotChanges()
                .subscribe((response) => {
                    this.folders = response.payload.data();
                    this.folders = this.folders.folders;
                    this.onFoldersChanged.next(this.folders);
                    resolve(this.folders);
                }, reject);
        }); //obtener si mostramos las opciones de tasker o de provider por default.
        /*    
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/mail-folders')
                .subscribe((response: any) => {
                    this.folders = response;
                    this.onFoldersChanged.next(this.folders);
                    resolve(this.folders);
                }, reject);
        }); */
    }

    /**
     * Get all statues TRAE LOS FILTROS DEL SIDEBAR
     *
     * @returns {Promise<any>}
     */
    getStatues(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.CatalogService.getCollectionFirestore("SideBar")
                .doc("TaskFilters")
                .snapshotChanges()
                .subscribe((response) => {
                    this.statues = response.payload.data();
                    this.statues = this.statues.Filters;

                    this.onStatuesChanged.next(this.statues);
                    resolve(this.statues);
                }, reject);
        });
    }

    /**
     * Get all services TRAE LOS FILTROS DEL SIDEBAR
     *
     * @returns {Promise<any>}
     */
    getServices(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.CatalogService.getItems("catalog/services/items").subscribe(
                (response) => {
                    this.services = response;
                    this.onServicesChanged.next(this.services);
                    resolve();
                },
                reject
            );
        });
    }

    /**
     * Get all price types for the providers modal
     *
     * @returns {Promise<any>}
     */
    getPriceTypes(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.CatalogService.getItems("catalog/price_type/items").subscribe(
                (response) => {
                    this.onPriceTypesChanged.next(response);
                    resolve();
                },
                reject
            );
        });
    }

    /**
     * Get all labels
     *
     * @returns {Promise<any>}
     */
    getLabels(): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient
                .get("api/mail-labels")
                .subscribe((response: any) => {
                    this.labels = response;
                    this.onLabelsChanged.next(this.labels);
                    resolve(this.labels);
                }, reject);
        });
    }

    /**
     * Get all mails
     *
     * @returns {Promise<Mail[]>}
     */
    getMails(): Promise<Mail[]> {
        if (this.routeParams.labelHandle) {
            return this.getMailsByLabel(this.routeParams.labelHandle);
        }

        if (this.routeParams.filterHandle) {
            return this.getMailsByFilter(this.routeParams.filterHandle);
        }

        return this.getRequestsByParams(this.routeParams.folderHandle);
    }

    /**
     * Get providers
     *
     * @returns {Promise<Mail[]>}
     */
    getProviders(): Promise<Mail[]> {
        return this.getProvidersByParams();
    }

    /**
     * Get mails by folder
     *
     * @param handle
     * @returns {Promise<Mail[]>}
     */
    getRequestsByParams(handle): Promise<Mail[]> {
        // EL FILTRO PARA PROVEEDORES PONERLO EN FIREBASE FUNCTION PARA PODER MANIPULARLO SIEMPRE
        return new Promise((resolve, reject) => {
            this.AuthService.afAuth.authState.subscribe((user) => {
                if (this.inboxtype) {
                    if (user && this.inboxtype === "AsClient") {
                        this.selectedFilters[
                            "authorid"
                        ] = this.AuthService.user.uid;
                        this.CatalogService.MultiQueryItemsWithFirestore(
                            "Requests",
                            this.selectedFilters
                        ).subscribe((requests) => {
                            this.requests = requests;
                            this.requests = FuseUtils.filterArrayByString(
                                this.requests,
                                this.searchText
                            );
                            this.onMailsChanged.next(this.requests);
                            resolve(this.requests);
                        }, reject);
                    } else {
                        this.selectedFilters["authorid"] = "";
                        this.CatalogService.MultiQueryItemsWithFirestore(
                            "Requests",
                            this.selectedFilters
                        ).subscribe((requests: any) => {
                            if (this.inboxtype === "AsTasker") {
                                this.requests = requests;
                                this.requests = FuseUtils.filterArrayByString(
                                    this.requests,
                                    this.searchText
                                );
                                this.onMailsChanged.next(this.requests);
                            }
                            resolve(this.requests);
                        }, reject);
                    }
                } else resolve([]);
            });
        });
    }

    /**
     * Get providers
     *
     * @params requestCategory, priceType, rate
     * @returns {Promise<Mail[]>}
     */
    getProvidersByParams(): Promise<Mail[]> {
        return new Promise((resolve, reject) => {
            this.CatalogService.MultiQueryProvidersWithFirestore(
                this.queryFieldForProvider,
                this.ProvidersIndex,
                this.rate
            ).subscribe((providers: any) => {
                this.providers = providers;
                this.providers = FuseUtils.filterArrayByString(
                    this.providers,
                    this.providerSearchText
                );
                this.onProvidersChanged.next(this.providers);
                resolve(this.providers);
            }, reject);
        });
    }

    /**
     * Get mails by filter
     *
     * @param handle
     * @returns {Promise<Mail[]>}
     */
    getMailsByFilter(handle): Promise<Mail[]> {
        // EL FILTRO PARA PROVEEDORES PONERLO EN FIREBASE FUNCTION PARA PODER MANIPULARLO SIEMPRE
        return new Promise((resolve, reject) => {
            this.AuthService.afAuth.authState.subscribe((user) => {
                if (user && this.inboxtype === "AsClient") {
                    this.CatalogService.QueryItemsWithFirestore(
                        "Requests",
                        // "authorid",
                        // this.AuthService.user.uid,
                        "status",
                        "Open"
                    ).subscribe((requests) => {
                        this.requests = requests;
                        this.requests = FuseUtils.filterArrayByString(
                            this.requests,
                            this.searchText
                        );
                        this.onMailsChanged.next(this.requests);
                        resolve(this.requests);
                    }, reject);
                } else {
                    this.CatalogService.QueryItemsWithFirestore(
                        "Requests",
                        "status",
                        "Open"
                    ).subscribe((requests: any) => {
                        if (this.inboxtype === "AsTasker") {
                            this.requests = requests;
                            this.requests = FuseUtils.filterArrayByString(
                                this.requests,
                                this.searchText
                            );
                            this.onMailsChanged.next(this.requests);
                        }
                        resolve(this.requests);
                    }, reject);
                }
            });
        });
    }

    /**
     * Get mails by label
     *
     * @param handle
     * @returns {Promise<Mail[]>}
     */
    getMailsByLabel(handle): Promise<Mail[]> {
        return new Promise((resolve, reject) => {
            this._httpClient
                .get("api/mail-labels?handle=" + handle)
                .subscribe((labels: any) => {
                    const labelId = labels[0].id;

                    this._httpClient
                        .get("api/mail-mails?labels=" + labelId)
                        .subscribe((mails: any) => {
                            this.mails = mails.map((mail) => {
                                return new Mail(mail);
                            });

                            this.mails = FuseUtils.filterArrayByString(
                                this.mails,
                                this.searchText
                            );

                            this.onMailsChanged.next(this.mails);

                            resolve(this.mails);
                        }, reject);
                });
        });
    }

    /**
     * Toggle selected mail by id
     *
     * @param id
     */
    toggleSelectedMail(id): void {
        // First, check if we already have that mail as selected...
        if (this.selectedMails.length > 0) {
            for (const mail of this.selectedMails) {
                // ...delete the selected mail
                if (mail.id === id) {
                    const index = this.selectedMails.indexOf(mail);

                    if (index !== -1) {
                        this.selectedMails.splice(index, 1);

                        // Trigger the next event
                        this.onSelectedMailsChanged.next(this.selectedMails);

                        // Return
                        return;
                    }
                }
            }
        }

        // If we don't have it, push as selected
        this.selectedMails.push(
            this.mails.find((mail) => {
                return mail.id === id;
            })
        );

        // Trigger the next event
        this.onSelectedMailsChanged.next(this.selectedMails);
    }

    /**
     * Toggle select all
     */
    toggleSelectAll(): void {
        if (this.selectedMails.length > 0) {
            this.deselectMails();
        } else {
            this.selectMails();
        }
    }

    /**
     * Select mails
     *
     * @param filterParameter
     * @param filterValue
     */
    selectMails(filterParameter?, filterValue?): void {
        this.selectedMails = [];

        // If there is no filter, select all mails
        if (filterParameter === undefined || filterValue === undefined) {
            this.selectedMails = this.mails;
        } else {
            this.selectedMails.push(
                ...this.mails.filter((mail) => {
                    return mail[filterParameter] === filterValue;
                })
            );
        }

        // Trigger the next event
        this.onSelectedMailsChanged.next(this.selectedMails);
    }

    /**
     * Deselect mails
     */
    deselectMails(): void {
        this.selectedMails = [];

        // Trigger the next event
        this.onSelectedMailsChanged.next(this.selectedMails);
    }

    /**
     * Set current mail by id
     *
     * @param id
     */
    setCurrentMail(id): void {
        if (id) {
            this.CatalogService.GetDocWithFirestore("Requests/" + id).subscribe(
                (data) => {
                    this.onCurrentMailChanged.next(data);
                }
            );
        }
    }
    setCurrentInboxType(key): void {
        this.inboxtype = key;
        this.getRequestsByParams("inbox");
    }
    setCurrentFilter(filter): void {
        Object.keys(filter).map((key) => {
            if (key !== "pageIndex") {
                this.selectedFilters.pageIndex = null;
            }
            if (key === "folder") {
                this.selectedFilters = {};
            }
            this.selectedFilters[key] = filter[key];
        });
        this.getRequestsByParams("inbox");
    }

    // For the provider list
    setRequestCategory(request: any) {
        this.currentCategory = request.data.category;
        this.requestId = request.id;
        this.queryFieldForProvider = this.currentCategory + "_" + "";
        this.rate = {};
        this.onQueryFieldChanged.next(this.queryFieldForProvider);
        this.getProvidersByParams();
    }
    setPriceType(priceType) {
        this.priceType = priceType;
        this.queryFieldForProvider =
            this.currentCategory + "_" + this.priceType;
        this.onQueryFieldChanged.next(this.queryFieldForProvider);
        this.getProvidersByParams();
    }
    setProvidersIndex(key) {
        this.ProvidersIndex = key.pageIndex;
        this.getProvidersByParams();
    }
    setRate(rate: any) {
        const key = Object.keys(rate)[0];
        this.rate[key] = rate[key];
        this.getProvidersByParams();
    }
    setOfferDate(timestamp) {
        this.offerDate = timestamp;
    }
    createOffer() {
        this.CatalogService.CreateObject(
            `Requests/${this.requestId}/Offers`,
            this.AuthService.user.name
        ).then((res) => {
            this.selectedOffer = res;
        });
    }
    updateOffer() {
        this.CatalogService.UpdateOfferObject(
            `Requests/${this.requestId}/Offers/${this.selectedOffer}`,
            { offerDate: this.offerDate }
        ).then((res) => {
        });
    }
    /**
     * Toggle label on selected mails
     *
     * @param labelId
     */
    toggleLabelOnSelectedMails(labelId): void {
        this.selectedMails.map((mail) => {
            const index = mail.labels.indexOf(labelId);

            if (index !== -1) {
                mail.labels.splice(index, 1);
            } else {
                mail.labels.push(labelId);
            }

            this.updateMail(mail);
        });
    }

    /**
     * Set folder on selected mails
     *
     * @param folderId
     */
    setFolderOnSelectedMails(folderId): void {
        this.selectedMails.map((mail) => {
            mail.folder = folderId;

            this.updateMail(mail);
        });

        this.deselectMails();
    }

    /**
     * Update the mail
     *
     * @param mail
     * @returns {Promise<any>}
     */
    updateMail(mail): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient
                .post("api/mail-mails/" + mail.id, { ...mail })
                .subscribe((response) => {
                    this.getMails().then((mails) => {
                        if (mails && this.currentMail) {
                            this.setCurrentMail(this.currentMail.id);
                        }

                        resolve(mails);
                    }, reject);
                });
        });
    }
}
