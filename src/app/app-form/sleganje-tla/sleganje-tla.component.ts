import { Component, OnInit } from '@angular/core';
import { CheckboxItem } from '@app/@shared/interfaces/checkboxItem.interface';
import { DropdownItem } from '@app/@shared/interfaces/dropdownItem.interface';
import { Konsleg } from '@app/@shared/interfaces/konsleg';
import { RadioItem } from '@app/@shared/interfaces/radioItem.interface';
import { TableRow } from '@app/@shared/interfaces/tableRow.interface';
import { SleganjeTlaService } from './sleganje-tla.service';

@Component({
  selector: 'app-konsleg',
  templateUrl: './sleganje-tla.component.html',
  styleUrls: ['./sleganje-tla.component.scss'],
})
export class SleganjeTlaComponent implements OnInit {
  data: DropdownItem[] = [];
  selectedData: DropdownItem;
  oblik_temelja: RadioItem[] = [];
  rasterecenje: RadioItem[] = [];
  polje1: CheckboxItem = { name: 'Ugaona', value: false };
  polje2: CheckboxItem = { name: 'Ivicna po kracoj strani', value: false };
  polje3: CheckboxItem = { name: 'Ivicna po duzoj strani', value: false };
  polje4: CheckboxItem = { name: 'Centricna', value: false };
  polje5: CheckboxItem = { name: 'Karakteristicna', value: false };
  konsleg: Konsleg;

  constructor(private service: SleganjeTlaService) {}

  ngOnInit(): void {
    this.oblik_temelja = this.service.getOblikTemelja();
    this.rasterecenje = this.service.getRasterecenje();
    this.konsleg = this.service.getInitData();
    this.loadData();
  }

  loadData() {
    this.service.getData().subscribe((data: DropdownItem[]) => {
      this.data = data;
    });
  }

  getClientId() {
    return localStorage.getItem('username');
  }

  onChangeOblikTemelja(val: RadioItem[]) {
    this.oblik_temelja = val;
    this.konsleg.oblik_temelja = this.oblik_temelja.find((c: RadioItem) => c.checked === true).value;
  }

  onChangeTacke(field: string, propName: string, val: boolean): CheckboxItem {
    this.konsleg[field] = val;
    return { name: propName, value: val, selected: val };
  }

  // onChangeTacke(val: boolean, , index: number) {
  // this.tacke[index].value = val;
  // this.tacke.forEach((t: CheckboxItem, indx: number) => {
  //   t.selected = !!(t.value === val);
  //   this.konsleg.tacke_za_proracun[indx] = t.value;
  // })

  // console.log('konsleg.tacke: ', this.konsleg.tacke);
  // }

  onChangeRasterecenje(val: RadioItem[]) {
    this.rasterecenje = val;
    this.konsleg.ruis = this.rasterecenje.find((r: RadioItem) => r.checked === true).value;
  }

  onSelectSavedData(val: string) {
    // debugger
    this.data.forEach((d) => {
      if (d.value === val) {
        d.selected = true;
        this.selectedData = d;
      } else {
        d.selected = false;
        // this.selectedData = d;
      }
    });
    this.konsleg = this.selectedData.data;
    this.oblik_temelja.forEach((ot) => {
      ot.checked = !!(this.konsleg.oblik_temelja === ot.value);
    });
    this.rasterecenje.forEach((r) => {
      r.checked = !!(this.konsleg.ruis === r.value);
    });
    this.polje1.value = this.konsleg.polje1;
    this.polje2.value = this.konsleg.polje2;
    this.polje3.value = this.konsleg.polje3;
    this.polje4.value = this.konsleg.polje4;
    this.polje5.value = this.konsleg.polje5;
    console.log('new konsleg: ', this.konsleg);
  }

  onChangeTableRows(val: TableRow[]) {
    this.konsleg.bs = val;
  }

  calculate() {}

  save() {}

  import() {}
}
