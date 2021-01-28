import { Component, OnInit } from '@angular/core';
import { TableRow } from '@app/@shared/interfaces/tableRow.interface';

@Component({
  selector: 'app-application-two',
  templateUrl: './application-two.component.html',
  styleUrls: ['./application-two.component.scss'],
})
export class ApplicationTwoComponent implements OnInit {
  // num = 0;
  // components = [
  //   { id: 1, type: 'input', value: 'pera' },
  //   { id: 2, type: 'dropdown', value: 'ivan' },
  //   { id: 3, type: 'radio', value: 'deki' },
  //   { id: 4, type: 'radio', value: 'zika' },
  //   { id: 5, type: 'dropdown', value: 'mika' },
  // ];
  control1 = 0;
  control2 = 'Objekat visine 100m';
  control3 = 1.5;
  control4 = [
    { name: 'da', value: 'D', checked: true },
    { name: 'ne', value: 'N', checked: false },
    { name: 'mozda', value: 'M', checked: false },
  ];
  c4Title = 'Calculation according to a two-layer system';
  c4 = 'D';
  control5 = [
    { name: 'pera', value: 'peric', selected: true },
    { name: 'sima', value: 'simic', selected: false },
    { name: 'ivan', value: 'ivanovic', selected: false },
  ];
  c5Title = 'neki naziv';
  c5 = 'peric';
  control6 = true;
  tableRows: TableRow[] = [{ d: null, gama: null, mv: null }];

  constructor() {}

  ngOnInit(): void {}
}
