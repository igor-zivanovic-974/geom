import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import * as EventEmitter from 'events';

@Component({
  selector: 'app-form-element-input',
  templateUrl: './form-element-input.component.html',
  styleUrls: ['./form-element-input.component.scss'],
})
export class FormElementInputComponent implements OnInit {
  @Input() data: any; // string | number;
  // @Input() controlName: string;
  @Input() type: string;
  @Input() title: string;
  @Input() isRequired = true;
  @Input() min?: number;
  @Input() max?: number;
  @Input() maxLength? = 1000;

  @Output() changedValue: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      // console.log(this.max + typeof (this.max));
    }, 1000);
  }

  onChange() {
    this.changedValue.emit(this.data); // { controlName: this.controlName, value: this.data }
  }
}
