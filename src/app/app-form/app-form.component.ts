import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService, ModuleItem } from '@app/home/home.service';

@Component({
  selector: 'app-app-form',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.scss'],
})
export class AppFormComponent implements OnInit {
  moduleId: number;
  applicationId: number;
  appExist: boolean;
  modules: ModuleItem[];

  constructor(private activatedRoute: ActivatedRoute, private homeService: HomeService) {
    this.activatedRoute.params.subscribe((params: any) => {
      // this.spinner.show();
      this.moduleId = +params.moduleId;
      this.applicationId = +params.applicationId;
      this.appExist = this.checkAppExist();
    });
  }

  ngOnInit(): void {}

  checkAppExist() {
    this.modules = this.homeService.modules;
    return !!this.modules.find((m) => m.id === this.moduleId && m.items.find((x) => x.id === this.applicationId));
  }
}
