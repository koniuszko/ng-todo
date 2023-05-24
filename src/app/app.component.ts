import {Component, Input} from '@angular/core';
import {ThemeSwitcherService} from "./services/theme-switcher.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  @Input()
  theme: string;

  constructor(private service: ThemeSwitcherService) {
    this.theme = service.getTheme();
  }

  switchTheme() {
    this.service.switchTheme();
    this.theme = this.service.getTheme();
  }
}
