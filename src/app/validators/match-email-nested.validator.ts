import { AbstractControl, FormGroup, ValidationErrors } from "@angular/forms";

export function matchEmailNestedValidator(c: AbstractControl): ValidationErrors | null {
    const email = c.get("email")?.value;
    const email2 = c.get("emailConfirm")?.value;

    if(email2) {
        return email === email2 ? null : { match: true };
    }

    return null;
}