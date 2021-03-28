import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot,
} from "@angular/router";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { CatalogService } from "app/services/catalog.service";

@Injectable()
export class EcommerceOrdersService implements Resolve<any> {
    orders: any[] = [];
    onOrdersChanged: BehaviorSubject<any>;

    txtSearch: string = "";

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
        this.onOrdersChanged = new BehaviorSubject({});
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
            Promise.all([this.getOrders()]).then(() => {
                resolve();
            }, reject);
        });
    }

    /**
     * Get orders
     *
     * @returns {Promise<any>}
     */
    getOrders(): Promise<any> {
        if (localStorage.getItem("Providers") != "undefined") {
            var saveditems = JSON.parse(localStorage.getItem("Providers"));
            if (saveditems) {
                return new Promise((resolve, reject) => {
                    console.log("from local");
                    this.orders = saveditems;
                    this.onOrdersChanged.next(this.orders);
                    resolve(this.orders);
                });
            }
        }

        return new Promise((resolve, reject) => {
            this.CatalogService.GetItemsWithKeyFirestore("Providers").subscribe(
                (response: any[]) => {
                    console.log("from db");
                    this.orders = response;
                    localStorage.setItem(
                        "Providers",
                        JSON.stringify(this.orders)
                    );
                    this.onOrdersChanged.next(this.orders);
                    resolve(response);
                },
                reject
            );
        });

        return new Promise((resolve, reject) => {
            this._httpClient
                .get("api/e-commerce-orders")
                .subscribe((response: any) => {
                    this.orders = response;
                    this.onOrdersChanged.next(this.orders);
                    resolve(response);
                }, reject);
        });
    }
}
