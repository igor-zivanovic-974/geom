import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Aplikacije } from '@app/@shared/enums/aplikacije';
import { HomeService, ModuleItem } from '@app/home/home.service';

@Component({
  selector: 'app-app-form',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.scss'],
})
export class AppFormComponent implements OnInit {
  moduleName: string;
  appExist: boolean;

  constructor(private activatedRoute: ActivatedRoute, private homeService: HomeService) {
    this.activatedRoute.params.subscribe((params: any) => {
      // this.spinner.show();
      this.moduleName = params.moduleName;
      this.appExist = this.checkAppExist();
    });
  }

  ngOnInit(): void {}

  checkAppExist() {
    // return !!(Object.keys(Aplikacije).includes(this.moduleName));
    // return !!(Object.values(Aplikacije).includes(this.moduleName));
    return this.moduleName in Aplikacije;
  }
}
