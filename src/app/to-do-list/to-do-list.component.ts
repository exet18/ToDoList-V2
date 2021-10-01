import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ToDoControlService} from "../service/to-do-control.service";
import {mergeMap, tap} from "rxjs/operators";
import {Todo} from "../interface/todo";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  todosList: Todo[] | undefined;
  formToDoValue: FormGroup;
  waitTodo: number | undefined;
  IsShowClear: boolean | undefined;
  IsShowToDo: boolean | undefined;

  constructor(private formBuilder: FormBuilder, private todoControl: ToDoControlService) {
    this.formToDoValue = this.formBuilder.group({
      id: [0],
      value: [''],
      isEdit: [false],
      status: [false]
    });
  }

  ngOnInit(): void {
    this.todoControl.todos$.pipe(
      tap((item) => {
        this.todosList = item;
        this.waitTodo = item.filter(item => !item.status).length;
        this.IsShowToDo = item.length > 0;
      }),
      mergeMap(item => {
        this.IsShowClear = item.some(i => i.status);
        return item;
      }),
    ).subscribe();
  }

  addElement(): void {
    this.todoControl.addElement(this.formToDoValue.value);
    this.todoFormControl.setValue('');
  }

  editEnable(id: number): void {
    this.todoControl.enableEditing(id);
  }

  edit(id: number, value: string): void {
    this.todoControl.changeValue(id, value);
  }

  deleteElem(index: number): void {
    this.todoControl.todoDelete(index);
  }

  changeStatus(id: number): void {
    this.todoControl.markReady(id);
  }

  clearComplete(): void {
    this.todoControl.completed();
  }

  get todoFormControl(): FormControl {
    return this.formToDoValue.get('value') as FormControl;
  }
}
