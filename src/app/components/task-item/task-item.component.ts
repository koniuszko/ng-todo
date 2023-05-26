import {Component, Input} from '@angular/core';
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

  constructor(private service: ThemeSwitcherService, private taskListService: TasksListService) {
    this.theme = service.theme;
    service.themeChange.subscribe((value) => {
      this.theme = value;
    });
  }

  deleteTask() {
    this.taskListService.deleteTask(this.task);
  }
}
