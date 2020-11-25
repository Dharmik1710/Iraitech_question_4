import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private message = new BehaviorSubject<string>("");
  currentMessage = this.message.asObservable();
  constructor() { }

  onValueChange(message: string){
    this.message.next(message);
  }
}