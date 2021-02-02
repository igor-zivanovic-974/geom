import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  isMobileScreen$ = new BehaviorSubject<boolean>(false);

  constructor() {}

  // getClientId {
  //   return localStorage.get('clientId');
  // }
}
