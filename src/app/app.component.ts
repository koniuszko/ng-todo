import {Component, Input, OnInit} from '@angular/core';
import {ThemeSwitcherService} from "./services/theme-switcher.service";
import {Task, TASKS} from "../data";
import {TasksListService} from "./services/tasks-list.service";
import {from, Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit {
  @Input()
  theme: string;

  tasks$!: Observable<Task[]>;

  constructor(private themeService: ThemeSwitcherService, private taskListService: TasksListService) {
    this.theme = themeService.theme;

  }

  ngOnInit() {
    this.tasks$ = this.taskListService.observableTasks;
    ;
  }

  switchTheme() {
    this.themeService.switchTheme();
    this.theme = this.themeService.theme;
  }
}
