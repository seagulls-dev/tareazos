import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot,
} from "@angular/router";
import { BehaviorSubject, Observable, combineLatest, of } from "rxjs";
import { CatalogService } from "app/services/catalog.service";
import { map } from "rxjs/operators";
@Injectable()
export class EcommerceOrderService implements Resolve<any> {
    routeParams: any;
    order: any;
    user: any;
    onOrderChanged: BehaviorSubject<any>;
    onUserChanged: BehaviorSubject<any>;

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
        this.onOrderChanged = new BehaviorSubject({});
        this.onUserChanged = new BehaviorSubject({});
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
            Promise.all([this.getOrder()]).then(() => {
                resolve();
            }, reject);
        });
    }

    /**
     * Get order
     *
     * @returns {Promise<any>}
     */
    getOrder(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.CatalogService.getCollectionFirestore(
                "userData/" + this.routeParams.id + "/fundsWithdrawl"
            )
                .get()
                .subscribe((value) => {
                    var offers = [];
                    var index = 0;

                    for (var mov in value.docs) {
                        var item = value.docs[index].data();
                        item.uid = value.docs[index].id;
                        offers.push(item);
                        index++;
                    }

                    this.user = offers;
                    this.onUserChanged.next(this.user);
                    resolve(this.user);
                }, reject);
        });
    }

    /**
     * Save order
     *
     * @param order
     * @returns {Promise<any>}
     */
    saveOrder(order): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient
                .post("api/e-commerce-orders/" + order.id, order)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    /**
     * Add order
     *
     * @param order
     * @returns {Promise<any>}
     */
    addOrder(order): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient
                .post("api/e-commerce-orders/", order)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }
}
