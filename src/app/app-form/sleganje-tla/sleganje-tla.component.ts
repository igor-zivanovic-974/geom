import { Component, OnInit } from '@angular/core';
import { RadioItem } from '@app/@shared/interfaces/radioItem.interface';
import { SleganjeTlaService } from './sleganje-tla.service';

@Component({
  selector: 'app-sleganje-tla',
  templateUrl: './sleganje-tla.component.html',
  styleUrls: ['./sleganje-tla.component.scss'],
})
export class SleganjeTlaComponent implements OnInit {
  data: any;
  x: any = {
    idKlijenta: this.getClientId(),
    idJoba: 5,
    prilog: 1,
    objekat: 'Objekat xxx',
    napomena: 'Napomena xxx',
    df: null,
    b: null,
    l: null,
    oblikTemelja: {
      title: 'Oblik temelja je: ',
      items: [
        { name: 'Pravougaonik', value: '1', checked: true },
        { name: 'Kvadrat', value: '2', checked: false },
        { name: 'Traka', value: '3', checked: false },
      ],
      value: null,
    },
    tableRows: [{ d: null, gama: null, mv: null }],
    opterecenje: null,
    rasterecenje: {
      title: 'Rasterecenje usled iskopa: ',
      items: [
        { name: 'Da', value: 'D', checked: true },
        { name: 'Ne', value: 'N', checked: false },
      ],
    },
    tacke: [
      { title: 'Ugaona', value: 'N', selected: false },
      { title: 'Ivicna po kracoj strani', value: 'N', selected: false },
      { title: 'Ivicna po duzoj strani', value: 'N', selected: false },
      { title: 'Centricna', value: 'N', selected: false },
      { title: 'Karakteristicna', value: 'N', selected: false },
    ],
  };

  constructor(private service: SleganjeTlaService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.service.getData().subscribe((data: any) => {
      this.data = data;
    });
  }

  getClientId() {
    return localStorage.getItem('username');
  }

  onChangeOblikTemelja(val: RadioItem[]) {
    this.x.oblikTemelja.items = val;
    this.x.oblikTemelja.value = this.x.oblikTemelja.items.find((c: RadioItem) => c.checked === true).value;
    console.log(this.x.oblikTemelja);
  }

  onChangeRasterecenje(val: RadioItem[]) {
    this.x.rasterecenje.items = val;
    this.x.rasterecenje.value = this.x.rasterecenje.items.find((c: RadioItem) => c.checked === true).value;
    console.log(this.x.rasterecenje);
  }

  calculate() {}

  save() {}

  import() {}
}
