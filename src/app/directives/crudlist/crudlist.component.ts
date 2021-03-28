import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { NotificationService } from 'app/services/notifications.service';
import { arrow } from '@fuse/modules/ng-uikit-pro-standard/lib/free/utils/positioning/modifiers';
@Component({
  selector: 'app-crudlist',
  templateUrl: './crudlist.component.html',
  styleUrls: ['./crudlist.component.scss']
})
export class CrudlistComponent implements OnInit {
  @Input() Item: any;
  @Output() ListToEmit = new EventEmitter<any[]>();
  items: any[] = [];
  itemsToDispay = [];
  keys: any[];
  firstkey: any;
  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
  }



  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }

  Save() {
    if (this.Item.valid) {
      if(this.Item.value.subcategory == null)
      this.Item.value.subcategory = '';
      var results = this.items.filter((element) => (element.skill == this.Item.value.skill && element.subcategory == this.Item.value.subcategory));
      if (results.length == 0) {
        this.items.push(this.Item.value);
        this.keys = Object.keys(this.Item.value);
        this.firstkey = Object.keys(this.Item.value)[0];
        this.sendListToParent();
        this.Item.reset();
      } else {
        this.notificationService.openSnackBar('Ya existe', '');
      }
    } else {
      this.notificationService.openSnackBar('Complete la información', '')
    }
  }

  sendListToParent() {

    this.ListToEmit.emit(this.items);
  }

  IterateObjetkeys() {
    var st = [];
    this.items.forEach(mainobj => {
      var arr = Object.keys(mainobj);
      var str = '';
      arr.forEach(element => {
        str += mainobj[element] + ' | ';
      })
      st.push(str);
    });
    return st;
  }

  deleteItem(index) {
    this.items.splice(index, 1);
    this.sendListToParent();
  }

}
