import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, HostListener, inject, input, InputSignal, Renderer2, Signal, signal, viewChild, WritableSignal } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();
  
  
  @Component({
  selector: 'app-slider',
  imports: [],
  templateUrl: './slider.component.html',
    styleUrl: './slider.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
  export class SliderComponent {
    

    backgroundImages: InputSignal<string [] > = input.required();



    
  header : Signal<ElementRef |undefined>= viewChild('header');

  private readonly renderer2 = inject(Renderer2); 


 ngAfterViewInit() {
    const swiperEl: any = document.querySelector('swiper-container');
    Object.assign(swiperEl, {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
     
    });
    swiperEl.initialize();
  }


  @HostListener("window:scroll", ["$event"]) 
  onScroll(event: Event) {
  
    if (window.scrollY > 176) {
    
      // console.log('hamada');
      this.renderer2.setStyle(this.header()?.nativeElement, "opacity", "0"); 
      this.renderer2.setStyle(this.header()?.nativeElement, "transition", "opacity 0.8s "); 

  
    }
  
    
    else if (scrollY === 0) {
        this.renderer2.setStyle(this.header()?.nativeElement, "opacity", "1"); 

    }
  }

}
