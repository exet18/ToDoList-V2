import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ToDoListComponent} from './to-do-list/to-do-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "./shared/shared.module";
import { EditAutoFocusDirective } from './directive/edit-auto-focus.directive';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    EditAutoFocusDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
