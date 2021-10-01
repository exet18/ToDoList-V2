import {Injectable} from '@angular/core';
import {Todo} from "../interface/todo";
import {BehaviorSubject, of} from "rxjs";
import {LocalStorageService} from "./local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class ToDoControlService {

  private _todosList = new BehaviorSubject<Todo[]>([]);
  private todoElems: Todo[] = [];
  readonly todos$ = this._todosList.asObservable();

  constructor(private LocalStorageServices: LocalStorageService) {
    const localData = this.LocalStorageServices.getData("list");
    if (localData){
      this.todoElems = localData;
    }
    this._todosList.next(this.todoElems);
  }

  addElement(item: Todo): void {
    item.id = item.id = Math.floor(Math.random() * 1000000000);
    this.todoElems.push(item);
    this._todosList.next(this.todoElems);
    this.saveToLocalStorage();
  }

  enableEditing(id: number): void {
    this.todoElems = this.todoElems.map(item => {
      if (item.id === id) {
        item.isEdit = true;
      }
      return item;
    });
    this._todosList.next(this.todoElems);
    this.saveToLocalStorage();
  }

  changeValue(id: number, val: string): void {
    this.todoElems = this.todoElems.map(item => {
      if (item.id === id) {
        item.value = val;
        item.isEdit = false;
      }
      return item;
    });
    this._todosList.next(this.todoElems);
    this.saveToLocalStorage();
  }

  todoDelete(index: number): void {
    this.todoElems.splice(index, 1);
    this._todosList.next(this.todoElems);
    this.saveToLocalStorage();
  }

  markReady(id: number): void {
    this.todoElems = this.todoElems.map(item => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });
    this._todosList.next(this.todoElems);
    this.saveToLocalStorage();
  }

  saveToLocalStorage(): void {
    this.LocalStorageServices.setData("list", this.todoElems);
  }

  completed(): void {
    this.todoElems = this.todoElems.filter(item => !item.status);
    this._todosList.next(this.todoElems);
    this.saveToLocalStorage();
  }
}
