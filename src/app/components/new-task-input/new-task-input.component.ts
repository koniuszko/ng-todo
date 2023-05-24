import {Component, Input} from '@angular/core';
import {ThemeSwitcherService} from "../../services/theme-switcher.service";
import {TasksListService} from "../../services/tasks-list.service";
import {Task} from "../../../data";


@Component({
  selector: 'app-new-task-input',
  templateUrl: './new-task-input.component.html',
  styleUrls: ['./new-task-input.component.scss',
    '../../../styles.scss']
})
export class NewTaskInputComponent {
  @Input()
  theme: string;
  taskNameInput: string = '';


  constructor(private themeService: ThemeSwitcherService,
              private tasksListService: TasksListService
  ) {
    this.theme = themeService.theme;
    themeService.themeChange.subscribe((value) => {
      this.theme = value;
    });
  }

  addTask() {
    const newTask: Task = {
      id: 20,
      description: this.taskNameInput,
      active: true,
    }
    this.tasksListService.addTask(newTask);
    this.taskNameInput = '';
  }
}
