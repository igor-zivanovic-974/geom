import { Injectable } from '@angular/core';
import { HelperService } from '@app/@shared/services/helper.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApplicationOneService {
  image: string;

  constructor(private helper: HelperService) {
    this.image = this.helper.getTestImage();
  }

  importFromFile(): Observable<string> {
    return;
  }

  calculate(form: any): Observable<string> {
    return;
  }

  save(form: any): Observable<string> {
    return;
  }
}
