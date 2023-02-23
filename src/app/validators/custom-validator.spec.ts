import { FormControl, Validators } from "@angular/forms";
import { CustomValidator } from "./custom-validator";

describe('CustomValidator', () => {
it('should return invalid error when password has validation errors', () => {
  const formControl = new FormControl('test', [Validators.required, CustomValidator]);
  
  expect(formControl.errors).toEqual({invalid: true});
});
})
