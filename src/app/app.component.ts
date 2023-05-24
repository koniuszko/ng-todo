import {Component, Input} from '@angular/core';
import {ThemeSwitcherService} from "./services/theme-switcher.service";
import {Task, TASKS} from "../data";
import {TasksListService} from "./services/tasks-list.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  @Input()
  theme: string;

  tasks: Task[];

  constructor(private themeService: ThemeSwitcherService,
              private tasksListService: TasksListService) {
    this.theme = themeService.theme;
    this.tasks = tasksListService.tasks;
  }

  switchTheme() {
    this.themeService.switchTheme();
    this.theme = this.themeService.theme;
  }
}
