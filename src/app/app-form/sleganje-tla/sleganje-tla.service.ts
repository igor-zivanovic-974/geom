import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SleganjeTlaService {
  url = 'localhost:4300/api/v1/konsleg/loadData';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    // return this.http.get(this.url).pipe(
    //   map((x: any) => {
    //     return x as any;
    //   })
    // )
    return of([
      { id: 1, name: 'Example-1', data: {} },
      { id: 2, name: 'Example-2', data: {} },
      { id: 3, name: 'Example-3', data: {} },
    ]);
  }
}
