import {Component, Input} from '@angular/core';
import {ThemeSwitcherService} from "../../services/theme-switcher.service";


@Component({
  selector: 'app-new-task-input',
  templateUrl: './new-task-input.component.html',
  styleUrls: ['./new-task-input.component.scss',
    '../../../styles.scss']
})
export class NewTaskInputComponent {
  @Input()
  theme: string;

  constructor(private service: ThemeSwitcherService) {
    this.theme = service.theme;
    service.themeChange.subscribe((value) => {
      this.theme = value;
    });
  }

}
