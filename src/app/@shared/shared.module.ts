import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisplayImageComponent } from './display-image/display-image.component';

@NgModule({
  imports: [CommonModule, TranslateModule, FormsModule, ReactiveFormsModule],
  declarations: [LoaderComponent, DisplayImageComponent],
  exports: [LoaderComponent],
})
export class SharedModule {}
