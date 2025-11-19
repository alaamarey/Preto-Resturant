import { Directive, ElementRef, inject, Renderer2, OnInit, input, signal, effect } from '@angular/core';

@Directive({
  selector: '[appImg]'
})
export class ImgDirective {


  private readonly elBasic = inject(ElementRef);
  private readonly renderer2 = inject(Renderer2);

  imgSrc = input('/assets/preto3.webp');
  src = input('');



  constructor() {
    effect(() => {


      const imgSrc = this.imgSrc() ;
      const src = this.src();
      this.renderer2.setAttribute(this.elBasic.nativeElement, 'src', imgSrc);

      const realImg = new Image();
      realImg.src = src;

      realImg.onload = () => {
        this.renderer2.setAttribute(this.elBasic.nativeElement, 'src', src)
      }
    })
  }
}
