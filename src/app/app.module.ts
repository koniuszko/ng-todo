import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {NewTaskInputComponent} from './components/new-task-input/new-task-input.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {TaskItemComponent} from './components/task-item/task-item.component';
import {FiltersComponent} from './components/filters/filters.component';
import {FormsModule} from "@angular/forms";
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewTaskInputComponent,
    TaskItemComponent,
    FiltersComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
