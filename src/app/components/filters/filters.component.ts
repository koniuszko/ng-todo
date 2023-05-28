import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ThemeSwitcherService} from "../../services/theme-switcher.service";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  @Input()
  theme: string;
  @Input()
  category!: string;
  @Output()
  categoryChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(private themeService: ThemeSwitcherService) {
    this.theme = themeService.theme;
    themeService.themeChange.subscribe((value) => {
      this.theme = value;
    });
  }

  changeCategory(category: string) {
    this.category = category;
    this.categoryChange.emit(category);
  }
}
