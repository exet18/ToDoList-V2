import {Injectable} from '@angular/core';
import {Todo} from "../interface/todo";
import {BehaviorSubject} from "rxjs";
import {LocalStorageService} from "./local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class ToDoControlService {

  private _todosList = new BehaviorSubject<Todo[]>([]);
  private todoElems: Todo[] = [];
  readonly todos$ = this._todosList.asObservable();
  private nextId = 0;

  constructor(private LocalStorageServices: LocalStorageService) {
    this.todoElems = this.LocalStorageServices.getData("list")
    this._todosList.next(this.todoElems)
  }

  addElement(item: Todo) {
    this.todoElems === null ? this.todoElems = [] : this.todoElems;
    this.todoElems.length != 0 ? this.nextId = this.todoElems[this.todoElems.length - 1].id : this.nextId = 0;
    item.id = ++this.nextId;
    this.todoElems = [...this.todoElems, item]
    this._todosList.next(this.todoElems)
    this.saveToLocalStorage()
  }

  enableEditing(id: number) {
    this.todoElems.filter(item => item.id === id).map(i => i.isEdit = true)
    this._todosList.next(this.todoElems)
  }

  changeValue(id: number, val: string) {
    this.todoElems.filter(item => item.id === id).map(i => {
      i.value = val
      i.isEdit = false
    })
    this._todosList.next(this.todoElems)
    this.saveToLocalStorage()
  }

  todoDelete(id: number) {
    this.todoElems.forEach((i, index) => {
      if (i.id === id) {
        this.todoElems.splice(index, 1)
      }
    })
    this._todosList.next(this.todoElems)
    this.saveToLocalStorage()
  }

  markReady(id: number) {
    this.todoElems.filter(item => item.id === id).map(i => i.status = !i.status)
    this.saveToLocalStorage()
  }

  saveToLocalStorage() {
    this.LocalStorageServices.setData("list", this.todoElems)
  }
}
