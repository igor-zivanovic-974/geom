import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-element-checkbox',
  templateUrl: './form-element-checkbox.component.html',
  styleUrls: ['./form-element-checkbox.component.scss'],
})
export class FormElementCheckboxComponent implements OnInit {
  @Input() isChecked: boolean;
  @Input() title: string;
  @Output() changedValue: EventEmitter<boolean> = new EventEmitter<boolean>();
  // data: boolean;

  constructor() {}

  ngOnInit(): void {}

  onChange() {
    this.isChecked = !this.isChecked;
    this.changedValue.emit(this.isChecked);
  }
}
