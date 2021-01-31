import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '@app/@shared/services/global.service';
import { Observable } from 'rxjs';
import { HomeService, ModuleItem, ModuleSubitem } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoading = false;
  modules: ModuleItem[] = [];
  selectedItems: ModuleSubitem[] = [];
  isMobileScreen$: Observable<boolean>;

  constructor(private router: Router, private homeService: HomeService, private globalService: GlobalService) {
    this.isMobileScreen$ = this.globalService.isMobileScreen$;
  }

  ngOnInit() {
    this.modules = this.homeService.modules;
    this.modules.forEach((x) => {
      this.selectedItems = [...this.selectedItems, ...x.items];
    });
  }

  showModuleApps(id: number) {
    this.selectedItems = [];
    if (id === 6) {
      this.modules.forEach((x) => {
        this.selectedItems = [...this.selectedItems, ...x.items];
      });
    } else {
      this.selectedItems = this.homeService.getModuleItems(id);
    }
  }

  goTo(s: string) {
    this.router.navigate([`app-form/${s}`]);
  }
}
