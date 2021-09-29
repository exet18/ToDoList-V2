import {Injectable} from '@angular/core';
import {Todo} from "../interface/todo";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {
  }

  getData(key: string) {
    return JSON.parse(<string>localStorage.getItem(key))
  }

  setData(key: string, data: Todo[]) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
