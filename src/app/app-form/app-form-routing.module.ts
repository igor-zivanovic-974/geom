import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { Shell } from '@app/shell/shell.service';
import { AppFormComponent } from './app-form.component';

const routes: Routes = [
  Shell.childRoutes([
    // { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'app-form/:moduleId/:applicationId', component: AppFormComponent, data: { title: marker('App Form') } },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppFormRoutingModule {}
