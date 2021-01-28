import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { TableRow } from '../interfaces/tableRow.interface';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-form-element-table',
  templateUrl: './form-element-table.component.html',
  styleUrls: ['./form-element-table.component.scss'],
})
export class FormElementTableComponent implements OnInit {
  @Input() tableRows: TableRow[]; //  = [{ d: 0, gama: 0, mv: 0 }];
  @Output() changedValue: EventEmitter<any> = new EventEmitter<any>();
  notStringErr: string;
  isMobileScreen$: Observable<boolean>;

  constructor(private globalService: GlobalService) {
    this.isMobileScreen$ = this.globalService.isMobileScreen$;
  }

  ngOnInit(): void {}

  addTableRow() {
    this.tableRows.push({ d: null, gama: null, mv: null });
    this.onChange();
  }

  removeTableRow(index: number) {
    this.tableRows.splice(index, 1);
    this.onChange();
  }

  onChange() {
    this.changedValue.emit(this.tableRows);
    console.log(this.tableRows);
  }

  onChangeContent(row: TableRow, prop: string, ev: any) {
    ev.stopImmediatePropagation();
    if (isNaN(ev.target.textContent) || ev.target.textContent.charcode === 46) {
      this.notStringErr = 'Numbers Only!';
      return;
    }

    this.notStringErr = null;
    switch (prop) {
      case 'd':
        row.d = ev.target.textContent;
        break;
      case 'gama':
        row.gama = ev.target.textContent;
        break;
      case 'mv':
        row.mv = ev.target.textContent;
        break;
      default:
        break;
    }
    this.onChange();
  }

  selectContent() {
    document.execCommand('selectAll', false, null);
  }
}
