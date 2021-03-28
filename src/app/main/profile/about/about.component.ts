import { Component, OnDestroy, OnInit, ViewEncapsulation,Input, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { fuseAnimations } from "@fuse/animations";
import { FuseConfigService } from '@fuse/services/config.service';
import { ProfileService } from '../profile.service';
import { CatalogService } from "app/services/catalog.service";
import { NotificationService } from "app/services/notifications.service";

@Component({
    selector     : 'profile-about',
    templateUrl  : './about.component.html',
    styleUrls    : ['./about.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ProfileAboutComponent implements OnInit, OnDestroy
{
    about: any={ Generales:{}, work:{},contacts:{}, groups:[], Habilidades:[]};
    @Input() profile: any;
    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {ProfileService} _profileService
     */
    constructor(
        private CatalogService: CatalogService
    )
    {
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
        this.about = this.profile
        /* this.CatalogService.GetDocWithFirestore('Providers/bbtd7DPlcHOLsbmg0Tv5n40u8F33').snapshotChanges()
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(about => {
                this.about = about.payload.data();
            }); */
    }
    ngOnChanges(changes: SimpleChanges) {
        debugger;
        this.about = changes.profile.currentValue;
       
      }

    deleteSkill(index){
        console.log(this.profile.Habilidades);
        console.log(index);
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
