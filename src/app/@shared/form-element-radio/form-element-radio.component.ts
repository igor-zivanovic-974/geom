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
  // data: any;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      // console.log(this.items);
      //   this.data = this.items[0].checked;
      //   console.log(this.data);
      //   const radiobtn = document.getElementById('ds1') as HTMLInputElement;
      //   radiobtn.checked = true;
    }, 300);
  }

  onChange(val: any) {
    this.items.forEach((x: RadioItem) => {
      x.checked = !!(x.value === val);
    });
    this.changedValue.emit(this.items); // val
    console.log(this.items); // val
  }
}
