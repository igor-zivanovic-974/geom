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

  save() {
    console.log(this.form.value);
    console.log(JSON.stringify(this.form.value));
  }

  x() {
    console.log(this.form.value);
    console.log(JSON.stringify(this.form.value));
  }

  private createForm() {
    this.form = this.formBuilder.group({
      opis: [''],
      objekat: ['', Validators.required],
      napomena: ['', Validators.required],
      tem_int: ['0', Validators.required],
      df: [0, Validators.required],
      dimb: [0, Validators.required],
      diml: [0, Validators.required],
      ko: ['N', Validators.required],
      h: [0, Validators.required],
      v: [0, Validators.required],
      ds: ['N', Validators.required],
      tm: [0, Validators.required],
      fi1: [0, Validators.required],
      c1: [0, Validators.required],
      gama1: [0, Validators.required],
      fi2: [0, Validators.required],
      c2: [0, Validators.required],
      gama2: [0, Validators.required],
      ffi1: [0, Validators.required],
      fc1: [0, Validators.required],
      vz2: ['N', Validators.required],
      ffi2: [0, Validators.required],
      fc2: [0, Validators.required],
    });
  }
}
