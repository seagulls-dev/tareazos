import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { FuseConfigService } from '@fuse/services/config.service';
import { navigation } from 'app/navigation/navigation';
import { MatDialog } from '@angular/material/dialog';
import { Service } from './service';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';

@Component({
    selector     : 'vertical-layout-1',
    templateUrl  : './layout-1.component.html',
    styleUrls    : ['./layout-1.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class VerticalLayout1Component implements OnInit, OnDestroy
{
    fuseConfig: any;
    navigation: any;
    rows: any = [];
    catalogos: any;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     * @param {Service} _service
     * @param {MatDialog} _matDialog
     * @param {FuseConfigService} _fuseConfigService
     * @param {FuseNavigationService} _fuseNavigationService
     */
    constructor(
        private _service: Service,
        public _matDialog: MatDialog,
        private _fuseConfigService: FuseConfigService,
        private _fuseNavigationService: FuseNavigationService,
    )
    {
        // Set the defaults
        this.navigation = navigation;

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to config changes
        this._fuseConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {
                this.fuseConfig = config;
            });
            
        this._service.onCatalogoChanged
        .pipe(takeUntil(this._unsubscribeAll))
        .subscribe(result => {            
            this.catalogos = result;
        });
        
        this._service.onChanged
        .pipe(takeUntil(this._unsubscribeAll))
        .subscribe(result => {
            if (result.length > 0) {
                var vencidos = result
                .filter(x => x.pagos
                .filter(y => y.estado.toLowerCase() === 'pendiente')[0].fechaPago.getTime() 
                    <= new Date(new Date().setDate(new Date().getDate() - this.catalogos.cntDiasMoroso)).getTime()
                );
                
                this.rows = vencidos;

                this._fuseNavigationService.updateNavigationItem('facturas', {
                    badge: {
                        title   : result.length.toString(),
                        bg      : '#F44336',
                        fg      : '#FFFFFF'
                    }
                });
            }
        });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
