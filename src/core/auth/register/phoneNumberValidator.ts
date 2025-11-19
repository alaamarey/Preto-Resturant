import { AbstractControl, ControlContainer, ValidationErrors } from "@angular/forms";
import { PhoneNumberUtil } from "google-libphonenumber"

export function phoneNumberValidator(control: AbstractControl, regisonCode: string = 'EG'): ValidationErrors | null {


    const phoneNumberUtil = PhoneNumberUtil.getInstance();
    let phoneValue = control.value.toString().trim();
    if (!phoneValue) return null;

    try {

         phoneValue = '+20' + phoneValue;

        const phoneNumber = phoneNumberUtil.parse(phoneValue, regisonCode);
        const isValidPhoneNumber = phoneNumberUtil.isValidNumber(phoneNumber);
        return isValidPhoneNumber ? null : { isValidPhoneNumber: true };

    } catch {
        return { isValidPhoneNumber: true };
    }


}