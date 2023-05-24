import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeSwitcherService {
  theme: string;
  themeChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.theme = 'theme-dark';
  }

  getTheme() {
    return this.theme;
  }

  switchTheme() {
    this.theme = this.theme === 'theme-dark' ? 'theme-light' : 'theme-dark';
    this.themeChange.emit(this.theme);
  }
}
