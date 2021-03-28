import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot,
} from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { CatalogService } from "app/services/catalog.service";

@Injectable()
export class EcommerceProductsService implements Resolve<any> {
    products: any[];
    onProductsChanged: BehaviorSubject<any>;
    requests: any[];
    onRequestsChanged: BehaviorSubject<any>;
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient,
        private CatalogService: CatalogService
    ) {
        // Set the defaults
        this.onProductsChanged = new BehaviorSubject({});
        this.onRequestsChanged = new BehaviorSubject({});
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
        return new Promise((resolve, reject) => {
            Promise.all([this.getProducts()]).then(() => {
                resolve();
            }, reject);
        });
    }

    /**
     * Get products
     *
     * @returns {Promise<any>}
     */
    getProducts(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.CatalogService.GetItemsWithKeyFirestore("Requests").subscribe(
                (response: any[]) => {
                    this.requests = response;

                    this.onRequestsChanged.next(this.requests);
                    resolve(response);
                },
                reject
            );
        });
    }

    /**
     * Delete Task
     */
    deleteTask(product): Promise<any> {
        return new Promise((resolve, reject) => {
            this.CatalogService.DeleteDocFirestore(
                "Requests",
                product.data.docId
            ).then((response) => {
                this.getProducts();
                resolve(response);
            }, reject);
        });
    }

    /**
     * Update status
     */
    updateStatus(product): Promise<any> {
        return new Promise((resolve, reject) => {
            this.CatalogService.updateDocWithFirestore(
                "Requests/" + product.data.docId,
                "status",
                "Cancelled"
            ).then((response) => {
                this.getProducts();
                resolve(response);
            }, reject);
        });
    }
}
