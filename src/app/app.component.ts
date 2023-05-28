import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {ThemeSwitcherService} from "./services/theme-switcher.service";
import {Task, TASKS} from "../data";
import {TasksListService} from "./services/tasks-list.service";
import {from, Observable} from "rxjs";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit {
  @Input()
  theme: string;
  tasks!: Task[];
  category: string = 'all';

  constructor(private themeService: ThemeSwitcherService, private taskListService: TasksListService) {
    this.theme = themeService.theme;
    this.tasks = taskListService.tasks;
  }

  ngOnInit() {
    this.taskListService.taskChange.subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  switchTheme() {
    this.themeService.switchTheme();
    this.theme = this.themeService.theme;
  }

  changeCategory(category: string) {
    console.log(category)
    this.category = category;
  }

  markAsDone(task: Task) {
    this.taskListService.markAsDone(task);
  }

  deleteTask(task: Task) {
    this.taskListService.deleteTask(task);
  }

  clearCompleted() {
    this.taskListService.clearCompleted();
  }
}
