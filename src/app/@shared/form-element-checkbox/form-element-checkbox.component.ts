import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-element-checkbox',
  templateUrl: './form-element-checkbox.component.html',
  styleUrls: ['./form-element-checkbox.component.scss'],
})
export class FormElementCheckboxComponent implements OnInit {
  @Input() isChecked: boolean;
  @Input() title: string;
  @Input() name: string;
  // @Output() changedValue: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() changedValue: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onChange() {
    this.isChecked = !this.isChecked;
    const val = this.isChecked === true ? 'D' : 'N';
    this.changedValue.emit(val); // this.isChecked
  }
}
