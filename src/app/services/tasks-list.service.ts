import {EventEmitter, Injectable} from '@angular/core';
import {Task, TASKS} from "../../data";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TasksListService {
  tasks: Task[] = TASKS;
  observableTasks: Observable<Task[]>;
  tasksChange: EventEmitter<Task[]> = new EventEmitter<Task[]>();

  constructor() {
    this.observableTasks = new Observable<Task[]>(subscriber => {
      subscriber.next(this.tasks);
    });
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(t => t.id !== task.id);
    this.tasksChange.emit(this.tasks);
    console.log(this.tasks)
  }
}
