import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-form-element-input',
  templateUrl: './form-element-input.component.html',
  styleUrls: ['./form-element-input.component.scss'],
})
export class FormElementInputComponent implements OnInit {
  @Input() data: string | number;
  @Input() type: string;
  @Input() title: string;
  @Input() isRequired = true;
  @Input() min?: number;
  @Input() max?: number;
  @Input() maxLength? = 1000;

  @Output() changedValue: EventEmitter<string | number> = new EventEmitter<string | number>();
  constructor() {}

  ngOnInit(): void {}

  onChange() {
    this.changedValue.emit(this.data);
  }
}
