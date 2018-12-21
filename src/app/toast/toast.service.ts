import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  toastChanged: Subject<any> = new Subject<any>();
  constructor() { }

  /*
  @params: type: success, info, warning danger
  */

  ShowToast(type: string, timeout: number, message: string) {
    this.toastChanged.next({
      type: type,
      message: message,
      timeout: timeout
    });
  }
}
