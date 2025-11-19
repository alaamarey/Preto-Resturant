import { Component, input, InputSignal } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-validator',
  imports: [],
  templateUrl: './validator.component.html',
  styleUrl: './validator.component.css',
})
export class ValidatorComponent {

  control : InputSignal<AbstractControl |undefined> = input.required()

}
