import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input()
  theme: string = 'dark';


  themeSwitch() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
  }
}
