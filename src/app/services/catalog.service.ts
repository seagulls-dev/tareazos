import { Injectable } from "@angular/core";
import { AngularFireDatabase as database2 } from "@angular/fire/database";
import { Observable } from "rxjs";
import { map, filter } from "rxjs/operators";
import { QuestionBase } from "app/models/question-base";
import "firebase/database";
import { AngularFireStorage } from "@angular/fire/storage";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireFunctions } from "@angular/fire/functions";

@Injectable()
export class CatalogService {
    constructor(
        private af2: database2,
        private firestore: AngularFirestore,
        private firefunctions: AngularFireFunctions
    ) {}
    getObjectReference(name: string) {
        return this.af2.object(name);
    }
    getCollectionFirestore(name: string) {
        return this.firestore.collection(name);
    }

    getItems(name: string): Observable<any[]> {
        return this.af2.list(name).valueChanges();
    }
    getItemsWithKey(name: string) {
        return this.af2
            .list(name)
            .snapshotChanges()
            .pipe(
                map((actions) =>
                    actions.map((a) => {
                        const data: {} = a.payload.val();
                        const key = a.payload.key;
                        return { key, ...data };
                    })
                )
            );
    }

    GetItemsWithKeyFirestore(name: string) {
        return this.firestore
            .collection(name)
            .get()
            .pipe(
                map((actions) =>
                    actions.docs.map((a) => {
                        const data = a.data();
                        const id = a.id;
                        return { id, data };
                    })
                )
            );
    }

    QueryItemsWithFirestore(name: string, field, filter) {
        return this.firestore
            .collection(name, (ref) => ref.where(field, "==", filter).limit(10))
            .snapshotChanges()
            .pipe(
                map((actions) =>
                    actions.map((a) => {
                        const data = a.payload.doc.data();
                        const id = a.payload.doc.id;
                        return { id, data };
                    })
                )
            );
    }

    MultiQueryItemsWithFirestore(name: string, filters: any = {}) {
        const {
            status,
            maxBudget,
            minBudget,
            timestamp,
            category,
            authorid,
            pageIndex,
        } = filters;
        return this.firestore
            .collection(name, (ref) => {
                let inref = ref.orderBy("Request.Budget").orderBy("docId");

                if (authorid) {
                    inref = inref.where("authorid", "==", authorid);
                }
                if (status) {
                    inref = inref.where("status", "==", status);
                }
                if (category) {
                    inref = inref.where("category", "==", category);
                }
                if (minBudget || maxBudget) {
                    inref = inref
                        .where("Request.Budget", ">=", minBudget)
                        .where("Request.Budget", "<=", maxBudget);
                }
                if (timestamp) {
                    inref = inref.where(
                        "Request.dueDate.Date",
                        "==",
                        "5/31/2020"
                    );
                }
                if (pageIndex) {
                    inref = inref.startAt(
                        pageIndex.request?.Budget,
                        pageIndex.docId
                    );
                }
                return inref.limit(10);
            })
            .snapshotChanges()
            .pipe(
                map((actions) => {
                    return actions.map((a) => {
                        const data = a.payload.doc.data();
                        const id = a.payload.doc.id;
                        return {
                            id,
                            data,
                        };
                    });
                })
            );
    }

    MultiQueryProvidersWithFirestore(
        queryField: string,
        pageIndex: any,
        rate: any = {}
    ) {
        const priceType = queryField?.split("_")[1];
        const { min, max } = rate;
        return this.firestore
            .collection("Providers", (ref) => {
                if (queryField && priceType) {
                    let inref = ref
                        .where(queryField, ">=", 0)
                        .orderBy(queryField);
                    if (min) {
                        inref = inref.where(queryField, ">=", min);
                    }
                    if (max) {
                        inref = inref.where(queryField, "<=", max);
                    }
                    if (pageIndex?.filterKey) {
                        inref = inref.startAt(pageIndex.filterKey);
                    }
                    return inref.limit(10);
                } else {
                    let inref = ref.orderBy("docId");
                    if (pageIndex?.docId) {
                        inref = inref.startAt(pageIndex.docId);
                    }
                    return inref.limit(10);
                }
            })
            .snapshotChanges()
            .pipe(
                map((actions) => {
                    return actions.map((a) => {
                        const data = a.payload.doc.data();
                        const id = a.payload.doc.id;
                        return {
                            id,
                            data,
                        };
                    });
                })
            );
    }

    GetDocWithFirestore(name: string) {
        return this.firestore
            .doc(name)
            .get()
            .pipe(
                map((action) => {
                    return {
                        id: action.id,
                        data: action.data(),
                    };
                })
            );
    }
    updateDocWithFirestore(name: string, field: string, value) {
        var obj = {};
        obj[field] = value;
        return this.firestore.doc(name).update(obj);
    }
    updateDocWithFirestore2(name: string, obj: any) {
        return this.firestore.doc(name).update(obj);
    }

    QueryItems(name: string, orderby: string, equalto: any): Observable<any[]> {
        return this.af2
            .list(name, (ref) => ref.orderByChild(orderby).equalTo(equalto))
            .snapshotChanges();
    }

    addDocument(collection: string, obj: any) {
        this.firestore
            .collection(collection)
            .add(obj)
            .then((result) => {
                debugger;
                this.updateDocWithFirestore(
                    collection + "/" + result.id,
                    "docId",
                    result.id
                );
            });
    }

    QueryItems2(
        name: string,
        orderby: string,
        equalto: any
    ): Observable<any[]> {
        return this.af2
            .list(name, (ref) => ref.orderByChild(orderby).equalTo(equalto))
            .valueChanges()
            .pipe(
                map((values) =>
                    values.sort((a: any, b: any) =>
                        a.description > b.description ? 1 : -1
                    )
                )
            );
    }

    getitem(name: string, key: string): Observable<any> {
        return this.af2.object(name + "/" + key).valueChanges();
    }

    DeleteDocFirestore(table: string, documentId: string) {
        return this.firestore.collection(table).doc(documentId).delete();
    }

    SendEmailFireFunction(
        to: string,
        subject: string,
        body: any,
        template: string = ""
    ) {
        //pasar if a cloud functions
        if (template != "") {
            this.getCollectionFirestore("Newsletter").add({
                email: to,
                createDate: new Date(),
            });
        }
        return this.firefunctions.httpsCallable("GMailService")({
            to: to,
            subject: subject,
            body: body,
            template: template,
        });
    }
    SendEmailFireFunctionExt(to: string, subject: string, body: any) {
        this.firestore.collection("Emails").add({
            to: to,
            message: {
                subject: subject,
                text: body,
                html: body,
            },
        });
    }
    getFormQuestions(key: string): Observable<any[]> {
        return this.af2
            .list("Forms/" + key + "/questions")
            .valueChanges()
            .pipe(
                map((items) =>
                    items.sort(
                        (a: QuestionBase<any>, b: QuestionBase<any>) =>
                            a.order - b.order
                    )
                )
            );
    }

    UpdateObject(name: string, key: string, obj: any) {
        return this.af2.object(name + "/" + key).update(obj);
    }

    getUser() {
        return this.firestore.collection("Providers").valueChanges();
    }
    getUserTest() {
        return this.firestore
            .collection("Providers")
            .snapshotChanges()
            .pipe(
                map((actions) =>
                    actions.map((a) => {
                        const data = a.payload.doc.data();
                        const id = a.payload.doc.id;
                        return { id, data };
                    })
                )
            );
    }

    CreateObject(name: string, authName: any) {
        const newObject = {
            availability: "Pendiente",
            comments: "Autogenerated by system",
            authorname: authName,
            awarded: "pending",
            createDate: new Date(),
        };
        return new Promise<any>((resolve, reject) => {
            this.firestore
                .collection(name)
                .add(newObject)
                .then(
                    (res) => {
                        resolve(res.id);
                    },
                    (err) => reject(err)
                );
        });
    }
    UpdateOfferObject(name: string, updateDate: any) {
        const { offerDate } = updateDate;
        return new Promise<any>((resolve, reject) => {
            this.firestore
                .doc(name)
                .update({
                    offerDate: offerDate,
                })
                .then(
                    (res: any) => {
                        resolve(res);
                    },
                    (err) => reject(err)
                );
        });
    }

    MergeFirestoreData(collection: string, doc: string, obj: any) {
        return this.firestore
            .collection(collection)
            .doc(doc)
            .set(obj, { merge: true });
    }
}
