import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ToDoControlService} from "../service/to-do-control.service";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  todosList$ = this.todoControl.todos$
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private todoControl: ToDoControlService) {
    this.form = this.formBuilder.group({
      id: [0],
      value: [''],
      isEdit: [false],
      status: [false]
    })
  }

  ngOnInit(): void {

  }

  addElement() {
    this.todoControl.addElement(this.form.value)
    this.form.controls.value.setValue("")
  }

  editEnable(id: number) {
    this.todoControl.enableEditing(id)
  }

  edit(id: number, value: string) {
    this.todoControl.changeValue(id, value)
  }

  deleteElem(id: number) {
    this.todoControl.todoDelete(id)
  }

  changeStatus(id: number) {
    this.todoControl.markReady(id)
  }
}
