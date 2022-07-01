import { FormControl, ValidationErrors } from "@angular/forms";

export class Luv2ShopValidators {

    static notOnlyWhitespace(control: FormControl): ValidationErrors {

        // check if string only contains whitespace
        if ((control.value != null) && (control.value.trim().length === 0)) {

            // invalid, return error object
            return { 'notOnlyWhitespace': true };
        }
        else {
            // valid, return null
            return null;
        }

        // let val: string = control.value

        // if (val.match('^[A-Z]{1}[a-z]+$')) {
        //     return null;
        // } else {
        //     return { 'notOnlyWhiteSpace': true };
        // }

    }


}