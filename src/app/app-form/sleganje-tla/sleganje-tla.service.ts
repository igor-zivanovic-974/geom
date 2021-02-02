import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DropdownItem } from '@app/@shared/interfaces/dropdownItem.interface';
import { Konsleg } from '@app/@shared/interfaces/konsleg';
import { RadioItem } from '@app/@shared/interfaces/radioItem.interface';
import { environment } from '@env/environment';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';

const endpoints = {
  getSavedData: () => `konsleg/load`,
  calculate: () => `konsleg/calc/rez`,
  save: () => `konsleg/save`,
  delete: (id: number) => `evidences/${id}`,
};

@Injectable({
  providedIn: 'root',
})
export class SleganjeTlaService {
  url = environment.serverUrl + 'konsleg/loadData';

  constructor(private http: HttpClient) {}

  getData(): Observable<DropdownItem[]> {
    // return this.http.get(`${this.url}/${endpoints.getSavedData()}`).pipe(
    //   map((x: any) => {
    //     return x as any;
    //   })
    // )
    return this.getMockedData();
  }

  save(body: any): Observable<any> {
    return this.http.post(`${this.url}/${endpoints.save()}`, body).pipe(
      take(1),
      map((e: any) => {
        this.getData();
        return e;
      })
    );
  }

  // delete(id: number) {
  //   return this.http.delete(`${this.url}/${endpoints.delete(id)}`).pipe(
  //     take(1),
  //     map(() => {
  //       this.getData();
  //       return;
  //     })
  //   );
  // }

  getMockedData() {
    const items: DropdownItem[] = [
      {
        name: 'Select data',
        value: '0',
        selected: true,
        data: {
          klijent_id: +localStorage.getItem('clientId') || 1,
          posao_id: null,
          prilog: 'Prilog broj 0',
          objekat: 'Objekat 0',
          napomena: 'Napomena 0',
          df: 0,
          dimb: 0,
          diml: 0,
          oblik_temelja: 'P',
          bs: [{ d: 0, gama: 0, mv: 0 }],
          sproj: 0,
          ruis: true,
          polje1: false,
          polje2: false,
          polje3: false,
          polje4: false,
          polje5: false,
        },
      },
      {
        name: 'Example-1',
        value: '1',
        selected: false,
        data: {
          klijent_id: +localStorage.getItem('clientId') || 1,
          posao_id: null,
          prilog: 'Prilog broj 11',
          objekat: 'Objekat 11',
          napomena: 'Napomena 11',
          df: 11,
          dimb: 11,
          diml: 11,
          oblik_temelja: 'K',
          bs: [{ d: 11, gama: 11, mv: 11 }],
          sproj: 11,
          ruis: true,
          polje1: false,
          polje2: true,
          polje3: true,
          polje4: false,
          polje5: false,
        },
      },
      {
        name: 'Example-2',
        value: '2',
        selected: false,
        data: {
          klijent_id: +localStorage.getItem('clientId') || 1,
          posao_id: null,
          prilog: 'Prilog broj 22',
          objekat: 'Objekat 22',
          napomena: 'Napomena 22',
          df: 22,
          dimb: 22,
          diml: 22,
          oblik_temelja: 'K',
          bs: [{ d: 22, gama: 22, mv: 22 }],
          sproj: 22,
          ruis: true,
          polje1: true,
          polje2: false,
          polje3: true,
          polje4: false,
          polje5: false,
        },
      },
      {
        name: 'Example-3',
        value: '3',
        selected: false,
        data: {
          klijent_id: +localStorage.getItem('clientId') || 1,
          posao_id: null,
          prilog: 'Prilog broj 33',
          objekat: 'Objekat 33',
          napomena: 'Napomena 33',
          df: 33,
          dimb: 33,
          diml: 33,
          oblik_temelja: 'T',
          bs: [{ d: 33, gama: 33, mv: 33 }],
          sproj: 33,
          ruis: false,
          polje1: true,
          polje2: true,
          polje3: true,
          polje4: true,
          polje5: false,
        },
      },
    ];
    return of(items as DropdownItem[]);
  }

  // Initial data

  getInitData() {
    const initialValues: Konsleg = {
      klijent_id: +localStorage.getItem('clientId') || 1,
      posao_id: null,
      prilog: 'Prilog broj 0',
      objekat: 'Objekat 0',
      napomena: 'Napomena 0',
      df: 0,
      dimb: 0,
      diml: 0,
      oblik_temelja: 'P',
      bs: [{ d: 0, gama: 0, mv: 0 }],
      sproj: 0,
      ruis: true,
      polje1: false,
      polje2: false,
      polje3: false,
      polje4: false,
      polje5: false,
    };
    return initialValues;
  }

  getOblikTemelja(): RadioItem[] {
    const oblikTemelja: RadioItem[] = [
      { name: 'Pravougaonik', value: 'P', checked: true },
      { name: 'Kvadrat', value: 'K', checked: false },
      { name: 'Traka', value: 'T', checked: false },
    ];
    return oblikTemelja;
  }

  getRasterecenje(): RadioItem[] {
    const rasterecenje: RadioItem[] = [
      { name: 'Da', value: true, checked: true },
      { name: 'Ne', value: false, checked: false },
    ];
    return rasterecenje;
  }
}
