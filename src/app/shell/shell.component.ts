import { Component, HostListener, OnInit } from '@angular/core';
import { GlobalService } from '@app/@shared/services/global.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  isMobileScreen$: Observable<boolean>;
  isMobileScreen: boolean;

  constructor(private globalService: GlobalService) {
    this.getScreenSize();

    this.isMobileScreen$ = this.globalService.isMobileScreen$;
  }

  ngOnInit() {}
  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.isMobileScreen = !!(window.innerWidth < 768);
    this.globalService.isMobileScreen$.next(this.isMobileScreen);
  }
}
