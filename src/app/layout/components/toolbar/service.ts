import { Injectable } from '@angular/core';
import { FirestoreService } from 'app/services/firestore/firestore.service';

@Injectable()
export class Service
{
    data: any[];
    item: any;
    catalogos: any;

    /**
     * Constructor
     *
     * @param {FirestoreService} firestoreService
     */
    constructor(
        private firestoreService: FirestoreService
    )
    {}

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

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

                resolve(this.catalogos);
            }, reject);
                // this.onChanged.next(this.rows);
                // resolve(this.rows);
        });
    }

    /**
     * Autocomplete 
     *
     * @param tipo
     * @returns {Promise<any>}
     */
    getAutocomplete(tipo = 'todos'): Promise<any>
    {
        return new Promise((resolve, reject) => {
            // if (tipo === 'clientes') {
            //     this.firestoreService.gets('clientes', null, null, null, null, null, null).subscribe((snapshot) => {
            //         this.data = [];
            //         snapshot.forEach((data: any) => {
            //             var dataModel = data.payload.doc.data();

            //             var model = {
            //                 id: dataModel.id,
            //                 titulo: dataModel.nombre + ' ' + dataModel.apellido,
            //                 subtitulo: 'Cédula: ' + dataModel.cedula,
            //                 descripcion: 'Teléfono: ' + dataModel.telefono,
            //                 icono: 'person',
            //                 data: dataModel
            //             }
    
            //             this.data.push(model);
            //         });

            //         this.data = this.shuffle(this.data);
    
            //         resolve(this.data);
            //     }, reject);
            // }

            // if (tipo === 'facturas') {
            //     this.firestoreService.gets('facturas', null, null, null, null, null, null).subscribe((snapshot) => {
            //         this.data = [];
            //         snapshot.forEach((data: any) => {
            //             var dataModel = data.payload.doc.data();
            //             dataModel.fecha = dataModel.fecha.toDate();
    
            //             for (let item of dataModel.pagos) {
            //                 item.fechaPago = item.fechaPago.toDate();
            //             }

            //             var model = {
            //                 id: dataModel.id,
            //                 titulo: 'Número de factura: ' + dataModel.nroFactura,
            //                 subtitulo: 'Monto: $' + parseFloat(dataModel.pagos[0].total).toFixed(2),
            //                 descripcion: 'Estado: ' + dataModel.estado,
            //                 icono: 'receipt',
            //                 data: dataModel
            //             }
    
            //             this.data.push(model);
            //         });

            //         this.data = this.shuffle(this.data);
    
            //         resolve(this.data);
            //     }, reject);
            // }

            // if (tipo === 'todos') {
            //     this.firestoreService.gets('clientes', null, null, null, null, null, null).subscribe((snapshot) => {
            //         this.data = [];
            //         snapshot.forEach((data: any) => {
            //             var dataModel = data.payload.doc.data();

            //             var model = {
            //                 id: dataModel.id,
            //                 titulo: dataModel.nombre + ' ' + dataModel.apellido,
            //                 subtitulo: 'Cédula: ' + dataModel.cedula,
            //                 descripcion: 'Teléfono: ' + dataModel.telefono,
            //                 icono: 'person',
            //                 data: dataModel
            //             }
    
            //             this.data.push(model);
            //         });

                    
            //         this.firestoreService.gets('facturas', null, null, null, null, null, null).subscribe((snapshot) => {
            //             snapshot.forEach((data: any) => {
            //                 var dataModel = data.payload.doc.data();
            //                 dataModel.fecha = dataModel.fecha.toDate();
        
            //                 for (let item of dataModel.pagos) {
            //                     item.fechaPago = item.fechaPago.toDate();
            //                 }

            //                 var model = {
            //                     id: dataModel.id,
            //                     titulo: 'Número de factura: ' + dataModel.nroFactura,
            //                     subtitulo: 'Monto: $' + parseFloat(dataModel.pagos[0].total).toFixed(2),
            //                     descripcion: 'Estado: ' + dataModel.estado,
            //                     icono: 'receipt',
            //                     data: dataModel
            //                 }
        
            //                 this.data.push(model);
            //             });

            //             this.data = this.shuffle(this.data);
        
            //             resolve(this.data);
            //         }, reject);
            //     }, reject);
            // }
        });
    }

    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }
}
