import { Component, OnDestroy, OnInit, ViewEncapsulation, Input } from '@angular/core';

import { fuseAnimations } from '@fuse/animations';
import { CatalogService } from "app/services/catalog.service";
import { ProfileService } from '../profile.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from '../../../services/auth.service';

@Component({
    selector     : 'profile-timeline',
    templateUrl  : './timeline.component.html',
    styleUrls    : ['./timeline.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations,
    providers: [ProfileService]
})
export class ProfileTimelineComponent implements OnInit, OnDestroy
{
    timeline: any;
    reviews: any = [];
    @Input() profile;
    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {ProfileService} _profileService
     */
    constructor(
        private _profileService: ProfileService,
        private CatalogService: CatalogService,
        private authService: AuthService
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
        this._profileService.timelineOnChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(timeline => {
                this.timeline = timeline;
            });
        
            if(this.profile){
                    this.CatalogService.GetItemsWithKeyFirestore('Providers/'+this.profile.id+'/Reviews').subscribe((data:any)=>{
                        this.reviews = data
                })
           
        }
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
