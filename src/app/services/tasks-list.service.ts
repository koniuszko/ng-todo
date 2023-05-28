import {EventEmitter, Injectable} from '@angular/core';
import {Task, TASKS} from "../../data";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TasksListService {
  tasks: Task[] = TASKS;
  taskChange: EventEmitter<Task[]> = new EventEmitter<Task[]>();

  constructor() {
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }

  markAsDone(task: Task) {
    this.tasks = this.tasks.map(t => {
      if (t.id === task.id) {
        t.active = !t.active;
      }
      return t;
    });
    this.taskChange.emit(this.tasks);
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(t => t.id !== task.id);
    this.taskChange.emit(this.tasks);
  }

  clearCompleted() {
    this.tasks = this.tasks.filter(t => t.active);
    this.taskChange.emit(this.tasks);
  }
}
