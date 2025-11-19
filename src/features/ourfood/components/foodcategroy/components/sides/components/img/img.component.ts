import { register } from 'swiper/element/bundle';
import { Component, input, InputSignal } from '@angular/core';
import { Daum } from '../../../../models/foodcategroy.interface';
import { ImgDirective } from "../../../../../../../../shared/directives/img.directive";

@Component({
  selector: 'app-img',
  imports: [ImgDirective],
  templateUrl: './img.component.html',
  styleUrl: './img.component.css',
})
export class ImgComponent {

item : InputSignal<Daum>= input.required() ;
}
