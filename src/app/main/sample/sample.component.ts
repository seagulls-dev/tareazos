import { Component } from '@angular/core';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';

@Component({
    selector: 'sample',
    templateUrl: './sample.component.html',
    styleUrls: ['./sample.component.scss']
})
export class SampleComponent {
    sourceBuilderTools = [
        { name: 'Section', children: [] as any[], inputType: 'section', icon: 'far fa-square', class: 'wide' },
        { name: 'String', inputType: 'string', icon: 'fas fa-language', class: 'half' },
        { name: 'Number', inputType: 'number', icon: 'fas fa-hashtag', class: 'half' },
        { name: 'Select', inputType: 'select', icon: 'fas fa-hashtag', class: 'half' },
        { name: 'Text Area', inputType: 'textarea', icon: 'fas fa-hashtag', class: 'half' },
        { name: 'Radio Vertical', inputType: 'radio_vert', icon: 'fas fa-hashtag', class: 'half' },
        { name: 'Radio Horizontal', inputType: 'radio_hor', icon: 'fas fa-hashtag', class: 'half' },
        { name: 'Date', inputType: 'date', icon: 'fas fa-hashtag', class: 'half' }
    ];
    targetBuilderTools: any[] = [];

    ngOnInit() {
    }

    droppableItemClass = (item: any) => `${item.class} ${item.inputType}`;

    builderDrag(e: any) {
        const item = e.value;
        item.data =
            item.inputType === 'number'
                ? (Math.random() * 100) | 0
                : Math.random()
                    .toString(36)
                    .substring(20);
    }

    log(e: any) {
    }

    canMove(e: any): boolean {
        return e.indexOf('Disabled') === -1;
    }

    /**
     * Constructor
     *
     * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
     */
    constructor(
        private _fuseTranslationLoaderService: FuseTranslationLoaderService
    ) {
        this._fuseTranslationLoaderService.loadTranslations(english, turkish);
    }

    onDrop(ev) {
        if (ev.el.id === 'column') {
            ev.el.innerHTML = ev.el.innerHTML.replace('COLUMNA', '');
        }
    }

    onDropLayout(ev) {
        if (ev.el.id === 'row') {
            ev.el.innerText = '';
        }
    }
}
