import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor() {}

  getBrinload() {
    return {
      opis: 'PRORACUN DOZVOLJENOG OPTERECENJA TLA',
      objekat: 'proba01',
      napomena: 'napomena01',
      tem_int: 0,
      df: 1.16,
      dimb: 2,
      diml: 3,
      ko: 'N',
      h: 555,
      v: 155,
      ds: 'N',
      tm: 2,
      fi1: 12,
      c1: 13,
      gama1: 14,
      fi2: 22,
      c2: 23,
      gama2: 24,
      ffi1: 1.8,
      fc1: 3,
      vz2: 'N',
      ffi2: 1.8,
      fc2: 2.7,
    };
  }
}
