import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-to-do-input-add-items',
  templateUrl: './to-do-input-add-items.component.html',
  styleUrls: ['./to-do-input-add-items.component.scss']
})
export class ToDoInputAddItemsComponent {

  @Output() public emitItemTaskList = new EventEmitter();

  public addItemTaskList: string = "";

  constructor() { }

  public submitItemTaskList() {
    this.addItemTaskList = this.addItemTaskList.trim();
    if(this.addItemTaskList) {
      this.emitItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList = "";
    }
  }
}
