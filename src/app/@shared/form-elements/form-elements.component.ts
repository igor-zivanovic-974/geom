import { Component, Input, OnInit } from '@angular/core';
import { FormElement } from '../interfaces/formElement.interface';

@Component({
  selector: 'app-form-elements',
  templateUrl: './form-elements.component.html',
  styleUrls: ['./form-elements.component.scss'],
})
export class FormElementsComponent implements OnInit {
  @Input() components: FormElement[];

  constructor() {}

  ngOnInit(): void {
    // setTimeout(() => {
    //   console.log(this.components);
    // }, 1000);
  }
}
