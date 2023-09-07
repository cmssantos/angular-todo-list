import { Component, DoCheck } from '@angular/core';

//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements DoCheck {

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');

  constructor() { }

  ngDoCheck(): void {
    this.setLocalStorage();
  }

  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList() {
    const confirm = window.confirm("Do you really want to delete everything?")
    if(confirm) {
      this.taskList = []
    }
  }

  public setEmitTaskList(event: string) {
    this.taskList.push({task: event, checked: false});
  }

  public validationInput(event: string, index: number) {
    if(!event.length) {
      const confirm = window.confirm("Task is empty, want to delete?");

      if(confirm) {
        this.deleteItemTaskList(index);
      }
    }
  }

  public setLocalStorage() {
    if(this.taskList) {
      this.taskList.sort((a, b) => Number(a.checked) - Number(b.checked));
      localStorage.setItem("list", JSON.stringify(this.taskList));
    }
  }
}
