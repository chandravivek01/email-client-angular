import { Injectable } from "@angular/core";
import { AbstractControl, FormGroup, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";

@Injectable( { providedIn: 'root' } )
export class MatchPassword implements Validator {

    validate : ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
        
        const password = control.get('password')?.value;
        const passwordConfirmation = control.get('passwordConfirmation')?.value;

        return password === passwordConfirmation ? null : { passwordsDontMatch : true };
    }
    registerOnValidatorChange?(fn: () => void): void {
        throw new Error("Method not implemented.");
    }

}
