import { Component, CUSTOM_ELEMENTS_SCHEMA, input, InputSignal } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button',
  imports: [ButtonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class ButtonComponent {

  labelName: InputSignal<string> = input.required();
  bgColor :InputSignal<string> = input.required();
  classes : InputSignal<string |undefined> = input() ;
  type : InputSignal<string | undefined> = input() ;
}
