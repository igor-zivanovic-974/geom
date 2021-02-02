import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RadioItem } from '../interfaces/radioItem.interface';

@Component({
  selector: 'app-form-element-radio',
  templateUrl: './form-element-radio.component.html',
  styleUrls: ['./form-element-radio.component.scss'],
})
export class FormElementRadioComponent implements OnInit {
  @Input() items: RadioItem[];
  @Input() title: string;
  @Input() name: string;
  @Output() changedValue: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onChange(val: any) {
    this.items.forEach((x: RadioItem) => {
      x.checked = !!(x.value === val);
    });
    this.changedValue.emit(this.items); // val
    console.log(this.items); // val
  }
}
