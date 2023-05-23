import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewTaskInputComponent } from './components/new-task-input/new-task-input.component';

@NgModule({
  declarations: [
    AppComponent,
    NewTaskInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
