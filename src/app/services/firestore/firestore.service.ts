import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { firestore } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(
    private firestore: AngularFirestore
  ) { }
  
  public create(table: string, data: any) {
    return this.firestore.collection(table).add(data);
  }
  
  public get(table: string, documentId: string) {
    return this.firestore.collection(table).doc(documentId).snapshotChanges();
  }
  
  public gets(table: string, columna: string = null, operador: firestore.WhereFilterOp = null, valor: string = null,
  orderBy: string = null, direction: firestore.OrderByDirection = 'desc', limit: number = null) {    
    if (columna !== null) {
      if(orderBy !== null) {
        if (limit !== null) {
          return this.firestore.collection(table, ref => ref.where(columna, operador, valor).orderBy(orderBy, direction).limit(limit)).snapshotChanges();  
        }

        return this.firestore.collection(table, ref => ref.where(columna, operador, valor).orderBy(orderBy, direction)).snapshotChanges();
      }
      
      if (limit !== null) {
        return this.firestore.collection(table, ref => ref.where(columna, operador, valor).limit(limit)).snapshotChanges();
      }

      return this.firestore.collection(table, ref => ref.where(columna, operador, valor)).snapshotChanges();
    } else if (orderBy !== null) {
      
      if (limit !== null) {
        return this.firestore.collection(table, ref => ref.orderBy(orderBy, direction).limit(limit)).snapshotChanges();
      }

      return this.firestore.collection(table, ref => ref.orderBy(orderBy, direction)).snapshotChanges();
    } else {
      
      if (limit !== null) {
        return this.firestore.collection(table, ref => ref.limit(limit)).snapshotChanges();
      }

      return this.firestore.collection(table).snapshotChanges();
    }
  }
  
  public update(table: string, documentId: string, data: any) {
    return this.firestore.collection(table).doc(documentId).set(data, { merge: true });
  }
  
  public delete(table: string, documentId: string) {
    return this.firestore.collection(table).doc(documentId).delete();
  }
}
