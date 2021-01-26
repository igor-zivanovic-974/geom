import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFormComponent } from './app-form.component';
import { AppFormRoutingModule } from './app-form-routing.module';
import { ApplicationOneComponent } from './application-one/application-one.component';
import { ApplicationTwoComponent } from './application-two/application-two.component';
import { SharedModule } from '@app/@shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [AppFormComponent, ApplicationOneComponent, ApplicationTwoComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SharedModule, TranslateModule, AppFormRoutingModule],
})
export class AppFormModule {}
