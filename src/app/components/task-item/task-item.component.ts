import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from 'src/data';
import {ThemeSwitcherService} from "../../services/theme-switcher.service";
import {TasksListService} from "../../services/tasks-list.service";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {
  @Input()
  theme: string;
  @Input()
  task!: Task;
  @Output()
  taskDeleted: EventEmitter<Task> = new EventEmitter<Task>();
  @Output()
  taskDone: EventEmitter<Task> = new EventEmitter<Task>();

  constructor(private service: ThemeSwitcherService) {
    this.theme = service.theme;
    service.themeChange.subscribe((value) => {
      this.theme = value;
    });
  }

  changeTaskStatus() {
    this.taskDone.emit(this.task);
  }

  deleteTask() {
    this.taskDeleted.emit(this.task);
  }
}
