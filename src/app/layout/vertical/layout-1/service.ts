import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { FuseUtils } from '@fuse/utils';
import { FirestoreService } from 'app/services/firestore/firestore.service';

@Injectable()
export class Service
{
    onChanged: BehaviorSubject<any>;
    onCatalogoChanged: BehaviorSubject<any>;
    onSelectedChanged: BehaviorSubject<any>;
    onUserDataChanged: BehaviorSubject<any>;
    onSearchTextChanged: Subject<any>;
    onFilterChanged: Subject<any>;

    rows: any[];
    catalogos: any;
    user: any;
    selected: string[] = [];

    searchText: string;
    filterBy: string;

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient,
        private firestoreService: FirestoreService
    )
    {
        // Set the defaults
        this.onChanged = new BehaviorSubject([]);
        this.onCatalogoChanged = new BehaviorSubject([]);
        this.onSelectedChanged = new BehaviorSubject([]);
        this.onUserDataChanged = new BehaviorSubject([]);
        this.onSearchTextChanged = new Subject();
        this.onFilterChanged = new Subject();

        this.getCatalogos().then(res => {
            this.getFacturas();
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get rows
     *
     * @returns {Observable<any> | Promise<any> | any}
     */
    getFacturas(): Observable<any> | Promise<any> | any {
        
        return new Promise((resolve, reject) => {

            Promise.all([
                this.get(),
                // this.getUserData()
            ]).then(
                ([files]) => {

                    this.onSearchTextChanged.subscribe(searchText => {
                        this.searchText = searchText;
                        this.get();
                    });

                    this.onFilterChanged.subscribe(filter => {
                        this.filterBy = filter;
                        this.get();
                    });

                    resolve();

                },
                reject
            );
        });
    }

    /**
     * Get rows
     *
     * @returns {Promise<any>}
     */
    get(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            // this.firestoreService.gets('facturas', 'estado', '==', 'Pendiente', 'nroFactura', 'asc').subscribe((snapshot) => {
            //     this.rows = [];
            //     snapshot.forEach((data: any) => {
            //         var dataModel = data.payload.doc.data();
            //         dataModel.fecha = dataModel.fecha.toDate();

            //         for (let item of dataModel.pagos) {
            //             item.fechaPago = item.fechaPago.toDate();
            //         }

            //         this.rows.push(new Factura (dataModel, data.payload.doc.id));
            //     });

            //     if ( this.filterBy === 'starred' )
            //     {
            //         this.rows = this.rows.filter(_model => {
            //             return this.user.starred.includes(_model.id);
            //         });
            //     }

            //     if ( this.filterBy === 'frequent' )
            //     {
            //         this.rows = this.rows.filter(_model => {
            //             return this.user.frequentModels.includes(_model.id);
            //         });
            //     }

            //     if ( this.searchText && this.searchText !== '' )
            //     {
            //         this.rows = FuseUtils.filterArrayByString(this.rows, this.searchText);
            //     }

            //     this.rows = this.rows.map(model => {
            //         return new Factura(model, model.id);
            //     });

            //     this.onChanged.next(this.rows);
            //     resolve(this.rows);
            // }, reject);
                // this.onChanged.next(this.rows);
                // resolve(this.rows);
        });
    }

    /**
     * Get catalogos
     *
     * @returns {Promise<any>}
     */
    getCatalogos(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.firestoreService.get('catalogos', 'catalogos').subscribe((snapshot) => {
                this.catalogos = {};
                
                this.catalogos = snapshot.payload.data();

                this.onCatalogoChanged.next(this.catalogos);
                resolve(this.catalogos);
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
    getUserData(): Promise<any>
    {
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
    toggleSelected(id): void
    {
        // First, check if we already have that model as selected...
        if ( this.selected.length > 0 )
        {
            const index = this.selected.indexOf(id);

            if ( index !== -1 )
            {
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
    toggleSelectAll(): void
    {
        if ( this.selected.length > 0 )
        {
            this.deselect();
        }
        else
        {
            this.select();
        }
    }

    /**
     * Select rows
     *
     * @param filterParameter
     * @param filterValue
     */
    select(filterParameter?, filterValue?): void
    {
        this.selected = [];

        // If there is no filter, select all rows
        if ( filterParameter === undefined || filterValue === undefined )
        {
            this.selected = [];
            this.rows.map(model => {
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
    update(model): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.firestoreService.update('facturas', model.id, model).then(response => {
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
    create(model): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.firestoreService.create('facturas', model).then(response => {
                resolve(response);
            });
        });
    }

    /**
     * Update user data
     *
     * @param userData
     * @returns {Promise<any>}
     */
    updateUserData(userData): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.post('api/rows-user/' + this.user.id, {...userData})
                .subscribe(response => {
                    this.getUserData();
                    resolve(response);
                });
        });
    }

    /**
     * Deselect rows
     */
    deselect(): void
    {
        this.selected = [];

        // Trigger the next event
        this.onSelectedChanged.next(this.selected);
    }

    /**
     * Delete model
     *
     * @param model
     */
    delete(model): void
    {
        this.firestoreService.delete('facturas', model.id).then(() => {
        }, (error) => {
          console.error(error);
        });
    }

    /**
     * Delete selected rows
     */
    deleteSelected(): void
    {
        for ( const modelId of this.selected )
        {
            this.firestoreService.delete('facturas', modelId).then(() => {
            }, (error) => {
              console.error(error);
            });
        }
        this.deselect();
    }

}
