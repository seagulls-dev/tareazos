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
        combineLatest(
            this.CatalogService.GetDocWithFirestore(
                "Providers/" + this.routeParams.id
            ),
            this.CatalogService.GetDocWithFirestore(
                "userData/" + this.routeParams.id
            ),
            this.CatalogService.GetItemsWithKeyFirestore(
                "Providers/" + this.routeParams.id + "/Badges"
            ),
            this.CatalogService.QueryItemsWithFirestore(
                "accountMovements",
                "uid",
                this.routeParams.id
            )
        )
            .pipe(
                map(([provider, userData, badges, accountMovements]) => {
                    return { provider, userData, badges, accountMovements };
                })
            )
            .subscribe((data) => {
                if (data.userData.data.currentBalance === undefined) {
                    data.userData.data.currentBalance = 0;
                }

                this.user = data;
                this.onUserChanged.next(this.user);
            });

        return new Promise((resolve, reject) => {
            this._httpClient
                .get("api/e-commerce-orders/1")
                .subscribe((response: any) => {
                    this.order = response;
                    this.onOrderChanged.next(this.order);
                    resolve(response);
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
