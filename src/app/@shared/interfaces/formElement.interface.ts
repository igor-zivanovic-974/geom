export interface FormElement {
  type: FormElementType;
  value: any;
}

export enum FormElementType {
  input = 'input',
  dropdown = 'dropdown',
  radio = 'radio',
}
