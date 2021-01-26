import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisplayImageComponent } from './display-image/display-image.component';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { FormElementInputComponent } from './form-element-input/form-element-input.component';
import { FormElementRadioComponent } from './form-element-radio/form-element-radio.component';
import { FormElementDropdownComponent } from './form-element-dropdown/form-element-dropdown.component';

@NgModule({
  imports: [CommonModule, TranslateModule, FormsModule, ReactiveFormsModule],
  declarations: [
    LoaderComponent,
    DisplayImageComponent,
    FormElementsComponent,
    FormElementInputComponent,
    FormElementRadioComponent,
    FormElementDropdownComponent,
  ],
  exports: [
    LoaderComponent,
    DisplayImageComponent,
    FormElementsComponent,
    FormElementInputComponent,
    FormElementRadioComponent,
    FormElementDropdownComponent,
  ],
})
export class SharedModule {}
