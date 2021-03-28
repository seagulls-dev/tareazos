import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BuilderComponent implements OnInit {

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

  constructor() { }

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

}
