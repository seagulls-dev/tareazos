import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot,
} from "@angular/router";
import { BehaviorSubject, Observable, Subject } from "rxjs";

import { FuseUtils } from "@fuse/utils";
import { AngularFirestore } from "@angular/fire/firestore";
import "firebase/firestore";
@Injectable()
export class Service implements Resolve<any> {
    onChanged: BehaviorSubject<any>;
    onCatalogoChanged: BehaviorSubject<any>;
    onSelectedChanged: BehaviorSubject<any>;
    onUserDataChanged: BehaviorSubject<any>;
    onSearchTextChanged: Subject<any>;
    onFilterChanged: Subject<any>;

    rows: any;
    campos = [];
    catalogos: any;
    user: any;
    selected: string[] = [];

    searchText: string;
    filterBy: string = "";

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(private firestore: AngularFirestore) {
        // Set the defaults
        this.onChanged = new BehaviorSubject([]);
        this.onCatalogoChanged = new BehaviorSubject([]);
        this.onSelectedChanged = new BehaviorSubject([]);
        this.onUserDataChanged = new BehaviorSubject([]);
        this.onSearchTextChanged = new Subject();
        this.onFilterChanged = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

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
        return new Promise((resolve, reject) => {
            Promise.all([
                this.get(),
                // this.getUserData()
            ]).then(([clientes]) => {
                this.onSearchTextChanged.subscribe((searchText) => {
                    this.searchText = searchText;
                    this.get();
                });

                this.onFilterChanged.subscribe((filter) => {
                    this.filterBy = filter;
                    this.get();
                });

                resolve();
            }, reject);
        });
    }

    /**
     * Get rows
     *
     * @returns {Promise<any>}
     */
    get(): Promise<any> {
        if (this.filterBy === "") {
            return new Promise((resolve, reject) => {
                resolve(this.rows);
            });
        }

        return new Promise((resolve, reject) => {
            this.firestore
                .collection("forms")
                .doc(this.filterBy)
                .valueChanges()
                .subscribe((snapshot) => {
                    var dataModel = snapshot;

                    this.rows = [];

                    this.firestore
                        .collection("forms")
                        .doc(this.filterBy)
                        .collection("campos")
                        .valueChanges()
                        .subscribe((snapshotCampos) => {
                            this.rows.campos = [];
                            this.campos = [];
                            snapshotCampos.forEach((campo) => {
                                this.campos.push(campo);
                            });

                            this.rows.campos = this.campos.sort(function (
                                a,
                                b
                            ) {
                                return a.order - b.order;
                            });

                            if (this.searchText && this.searchText !== "") {
                                this.rows.campos = FuseUtils.filterArrayByString(
                                    this.rows.campos,
                                    this.searchText
                                );
                            }

                            this.onChanged.next(this.rows);
                            resolve(this.rows);
                        });
                }, reject);
            // this.onChanged.next(this.rows);
            // resolve(this.rows);
        });
    }

    /**
     * Get user data
     *
     * @returns {Promise<any>}
     */
    getUserData(): Promise<any> {
        return new Promise(() => {});
        // return new Promise((resolve, reject) => {
        //     this._httpClient.get('api/rows-user/5725a6802d10e277a0f35724')
        //     .subscribe((response: any) => {
        //         this.user = response;
        //         this.onUserDataChanged.next(this.user);
        //         resolve(this.user);
        //     }, reject);
        // });
    }

    /**
     * Toggle selected model by id
     *
     * @param id
     */
    toggleSelected(id): void {
        // First, check if we already have that model as selected...
        if (this.selected.length > 0) {
            const index = this.selected.indexOf(id);

            if (index !== -1) {
                this.selected.splice(index, 1);

                // Trigger the next event
                this.onSelectedChanged.next(this.selected);

                // Return
                return;
            }
        }

        // If we don't have it, push as selected
        this.selected.push(id);

        // Trigger the next event
        this.onSelectedChanged.next(this.selected);
    }

    /**
     * Toggle select all
     */
    toggleSelectAll(): void {
        if (this.selected.length > 0) {
            this.deselect();
        } else {
            this.select();
        }
    }

    /**
     * Select rows
     *
     * @param filterParameter
     * @param filterValue
     */
    select(filterParameter?, filterValue?): void {
        this.selected = [];

        // If there is no filter, select all rows
        if (filterParameter === undefined || filterValue === undefined) {
            this.selected = [];
            this.rows.campos.map((model) => {
                this.selected.push(model.id);
            });
        }

        // Trigger the next event
        this.onSelectedChanged.next(this.selected);
    }

    /**
     * Update model
     *
     * @param model
     * @returns {Promise<any>}
     */
    updateForm(formId, model): Promise<any> {
        return new Promise((resolve, reject) => {
            this.firestore
                .collection("forms")
                .doc(formId)
                .collection("campos")
                .doc(model.id)
                .set(model)
                .then((response) => {
                    resolve(response);
                });
        });
    }

    /**
     * Update model
     *
     * @param model
     * @returns {Promise<any>}
     */
    createForm(formId, model): Promise<any> {
        return new Promise((resolve, reject) => {
            this.firestore
                .collection("forms")
                .doc(formId)
                .collection("campos")
                .add(model)
                .then((response) => {
                    model.id = response.id;
                    this.updateForm(formId, model).then((updateId) => {
                        resolve(response);
                    });
                });
        });
    }

    /**
     * Deselect rows
     */
    deselect(): void {
        this.selected = [];

        // Trigger the next event
        this.onSelectedChanged.next(this.selected);
    }

    /**
     * Delete model
     *
     * @param model
     */
    deleteForm(formId, model): void {
        this.firestore
            .collection("forms")
            .doc(formId)
            .collection("campos")
            .doc(model.id)
            .delete()
            .then(
                () => {},
                (error) => {
                    console.error(error);
                }
            );
    }

    /**
     * Delete selected rows
     */
    deleteSelected(formId): void {
        for (const modelId of this.selected) {
            this.firestore
                .collection("forms")
                .doc(formId)
                .collection("campos")
                .doc(modelId)
                .delete()
                .then(
                    () => {},
                    (error) => {
                        console.error(error);
                    }
                );
        }
        this.deselect();
    }
}
