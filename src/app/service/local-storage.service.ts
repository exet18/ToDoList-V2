import {Injectable} from '@angular/core';
import {Todo} from "../interface/todo";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {
  }

  getData(key: string): Todo[] {
    const todoList = JSON.parse(<string>localStorage.getItem(key));
    return todoList;
  }

  setData(key: string, data: Todo[]): void {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
