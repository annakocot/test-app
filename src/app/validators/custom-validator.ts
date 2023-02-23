import { FormControl, ValidationErrors } from "@angular/forms";

export function CustomValidator(control: FormControl): ValidationErrors | null {
  let password = control.value;
    if (password.length < 8 && !password.match(/[A-Z]+[a-z]+\d+/)) {
      return { invalid: true }
    }
  return null;
}
