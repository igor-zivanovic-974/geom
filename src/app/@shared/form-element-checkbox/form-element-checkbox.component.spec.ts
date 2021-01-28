import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormElementCheckboxComponent } from './form-element-checkbox.component';

describe('FormElementCheckboxComponent', () => {
  let component: FormElementCheckboxComponent;
  let fixture: ComponentFixture<FormElementCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormElementCheckboxComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormElementCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
