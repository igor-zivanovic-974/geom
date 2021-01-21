import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DisplayImageComponent } from '@app/@shared/display-image/display-image.component';
import { GlobalService } from '@app/@shared/services/global.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { ApplicationOneService } from './application-one.service';

@Component({
  selector: 'app-application-one',
  templateUrl: './application-one.component.html',
  styleUrls: ['./application-one.component.scss'],
})
export class ApplicationOneComponent implements OnInit {
  form!: FormGroup;
  isMobileScreen$: Observable<boolean>;

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private service: ApplicationOneService,
    private globalService: GlobalService
  ) {
    this.isMobileScreen$ = this.globalService.isMobileScreen$;
    this.createForm();
  }

  ngOnInit(): void {}

  openSketch() {
    console.log('openSketch');
    const modalRef = this.modalService.open(DisplayImageComponent, { size: 'xl' });
    modalRef.componentInstance.image = this.service.image;
  }

  calculate() {
    console.log(this.form.value);
    console.log(JSON.stringify(this.form.value));
  }

  private createForm() {
    this.form = this.formBuilder.group({
      objectName: ['', Validators.required],
      note: ['', Validators.required],
      foundationShape: ['1', Validators.required],
      df: [0, Validators.required],
      b: [0, Validators.required],
      l: [0, Validators.required],
      oblique: [false, Validators.required],
      horizontalF: [0, Validators.required],
      verticalF: [0, Validators.required],
      twoLayer: [false, Validators.required],
      layerHeight: [0, Validators.required],
      fi1: [0, Validators.required],
      c1: [0, Validators.required],
      gama1: [0, Validators.required],
      fi2: [0, Validators.required],
      c2: [0, Validators.required],
      gama2: [0, Validators.required],
      fi: [1.5, Validators.required],
      c: [2.5, Validators.required],
    });
  }
}
