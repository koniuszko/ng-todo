import {Injectable} from '@angular/core';
import {Task, TASKS} from "../../data";

@Injectable({
  providedIn: 'root'
})
export class TasksListService {
  tasks: Task[] = TASKS;

  constructor() {

  }

  addTask(task: Task) {
    this.tasks.push(task);
  }
}
