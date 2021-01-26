import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DropdownItem } from '../interfaces/dropdownItem';

@Component({
  selector: 'app-form-element-dropdown',
  templateUrl: './form-element-dropdown.component.html',
  styleUrls: ['./form-element-dropdown.component.scss'],
})
export class FormElementDropdownComponent implements OnInit {
  @Input() items: DropdownItem[];
  @Input() title: string;
  @Output() changedValue: EventEmitter<string> = new EventEmitter<string>();
  data: string;

  constructor() {}

  ngOnInit(): void {
    this.data = this.items.find((x) => x.selected === true).value;
    console.log(this.data);
  }

  onChange(ev: any) {
    this.data = ev.target.value;
    this.changedValue.emit(this.data);
  }
}
