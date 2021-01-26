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
    this.service.calculate(this.form.value).subscribe((img: string) => {});
  }

  save() {
    console.log(this.form.value);
    console.log(JSON.stringify(this.form.value));
    this.service.save(this.form.value).subscribe((img: string) => {});
  }

  importFromFile() {
    console.log(this.form.value);
    console.log(JSON.stringify(this.form.value));
  }

  checkFields(x: string) {
    // alert(x);
  }

  private createForm() {
    this.form = this.formBuilder.group({
      opis: ['f1-opis'],
      objekat: ['', Validators.required],
      napomena: ['', Validators.required],
      tem_int: ['1', Validators.required],
      df: [0, [Validators.required, Validators.max(12), Validators.min(1)]],
      dimb: [null, Validators.required],
      diml: [null, Validators.required],
      ko: ['N', Validators.required],
      h: [null, Validators.required],
      v: [null, Validators.required],
      ds: ['N', Validators.required],
      tm: [null, Validators.required],
      fi1: [null, Validators.required],
      c1: [null, Validators.required],
      gama1: [null, Validators.required],
      fi2: [null, Validators.required],
      c2: [null, Validators.required],
      gama2: [null, Validators.required],
      ffi1: [null, Validators.required],
      fc1: [null, Validators.required],
      vz2: ['N', Validators.required],
      ffi2: [null, Validators.required],
      fc2: [null, Validators.required],
    });
  }
}
