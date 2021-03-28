import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot,
} from "@angular/router";
import { BehaviorSubject, forkJoin, Observable } from "rxjs";
import { CatalogService } from "app/services/catalog.service";

@Injectable()
export class EcommerceProductService implements Resolve<any> {
    routeParams: any;
    product: any;
    request: any;
    onProductChanged: BehaviorSubject<any>;
    onRequestChanged: BehaviorSubject<any>;
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
        this.onProductChanged = new BehaviorSubject({});
        this.onRequestChanged = new BehaviorSubject({});
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
            Promise.all([this.getProduct()]).then(() => {
                resolve();
            }, reject);
        });
    }

    /**
     * Get product
     *
     * @returns {Promise<any>}
     */
    getProduct(): Promise<any> {
        this.CatalogService.GetDocWithFirestore(
            "Requests/" + this.routeParams.id
        ).subscribe((value) => {
            this.request = value;

            this.CatalogService.getCollectionFirestore(
                "Requests/" + this.routeParams.id + "/Offers"
            )
                .get()
                .subscribe((value) => {
                    var offers = [];
                    var index = 0;

                    for (var mov in value.docs) {
                        offers.push(value.docs[index].data());
                        index++;
                    }

                    this.request["data"]["offers"] = offers;

                    // get all chatrooms documents and then verify
                    // if exists the task id in the requests collection of each document
                    this.CatalogService.getCollectionFirestore("chatrooms")
                        .get()
                        .subscribe(async (chatrooms) => {
                            var chatroomIndex = 0;
                            var foundDoc = false; //

                            if (chatrooms.docs.length === 0) {
                                this.request["data"]["chat"] = null;
                                this.onRequestChanged.next(this.request);
                            } else {
                                for (var item in chatrooms.docs) {
                                    if (foundDoc) {
                                        this.onRequestChanged.next(
                                            this.request
                                        );
                                    } else {
                                        var chatroom = chatrooms.docs[
                                            chatroomIndex
                                        ].data();

                                        // verify if the task uid exist on the requests collection of the chatrooom

                                        forkJoin(
                                            this.CatalogService.GetDocWithFirestore(
                                                "chatrooms/" +
                                                    chatroom.uId +
                                                    "/requests/" +
                                                    this.routeParams.id
                                            ),
                                            this.CatalogService.getCollectionFirestore(
                                                "chatrooms/" +
                                                    chatroom.uId +
                                                    "/messages"
                                            ).get()
                                        ).subscribe(([requests, messages]) => {
                                            if (!foundDoc) {
                                                if (
                                                    requests.data !== undefined
                                                ) {
                                                    var chat = [];
                                                    foundDoc = true;

                                                    var messageIndex = 0;
                                                    for (var message in messages.docs) {
                                                        chat.push(
                                                            messages.docs[
                                                                messageIndex
                                                            ].data()
                                                        );
                                                        messageIndex++;
                                                    }

                                                    this.request["data"][
                                                        "chat"
                                                    ] = chat;
                                                    this.onRequestChanged.next(
                                                        this.request
                                                    );
                                                }
                                            }
                                        });
                                    }

                                    chatroomIndex++;
                                }
                            }
                        });
                });
        });

        return new Promise((resolve, reject) => {
            if (this.routeParams.id === "new") {
                this.onProductChanged.next(false);
                resolve(false);
            } else {
                this._httpClient
                    .get("api/e-commerce-products/1")
                    .subscribe((response: any) => {
                        this.product = response;
                        this.onProductChanged.next(this.product);
                        resolve(response);
                    }, reject);
            }
        });
    }

    /**
     * Save product
     *
     * @param product
     * @returns {Promise<any>}
     */
    saveProduct(product): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient
                .post("api/e-commerce-products/" + product.id, product)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    /**
     * Add product
     *
     * @param product
     * @returns {Promise<any>}
     */
    addProduct(product): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient
                .post("api/e-commerce-products/", product)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    /**
     * Delete Task
     */
    deleteTask(product): Promise<any> {
        return new Promise((resolve, reject) => {
            this.CatalogService.DeleteDocFirestore(
                "Requests",
                product.docId
            ).then((response) => {
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
                "Requests/" + product.docId,
                "status",
                "Cancelled"
            ).then((response) => {
                resolve(response);
            }, reject);
        });
    }
}
