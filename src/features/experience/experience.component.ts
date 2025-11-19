import { Component, ElementRef, inject, Renderer2, Signal, signal, viewChild } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { AnimateOnScroll } from 'primeng/animateonscroll';



@Component({
  selector: 'app-experience',
  imports: [ CarouselModule, TagModule , AnimateOnScroll],
  templateUrl: './experience.component.html',
 
  //     `
  //         :host {
  //             @keyframes slidedown-icon {
  //                 0% {
  //                     transform: translateY(0);
  //                 }

  //                 50% {
  //                     transform: translateY(20px);
  //                 }

  //                 100% {
  //                     transform: translateY(0);
  //                 }
  //             }

  //             .slidedown-icon {
  //                 animation: slidedown-icon;
  //                 animation-duration: 3s;
  //                 animation-iteration-count: infinite;
  //             }

  //             .box {
  //                 background-image: radial-gradient(var(--primary-300), var(--primary-600));
  //                 border-radius: 50% !important;
  //                 color: var(--primary-color-text);
  //             }
  //         }
  //     `
  // ],
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {

private readonly renderer2 = inject(Renderer2) ;

image  : Signal<ElementRef | undefined> = viewChild('img') ; 
header :Signal< ElementRef | undefined> = viewChild('head') ;
hand  : Signal<ElementRef | undefined>= viewChild('hand') ;

flip :boolean = true ;


  backgroundImages = signal([
    { image: '/assets/slider-4.png' },
    { image: '/assets/s11.webp' },
    { image: '/assets/slider-3.png' },
    { image: '/assets/juises.webp' },
    { image: '/assets/slider2.4.webp' },
    { image: '/assets/image6.png' },
  ])



  onClick() {
   if( this.flip ) {
     this.renderer2.addClass( this.image()?.nativeElement   , 'rotate-y-360'  );
     setTimeout(() => {
       this.renderer2.setAttribute(this.image()?.nativeElement , 'src' , '/assets/flip-green.webp' );
     }, 500);
  
     this.renderer2.setStyle(this.header()?.nativeElement , 'backgroundColor' , '#DE685F');
     this.renderer2.addClass(this.hand()?.nativeElement , 'rotate-360')
     setTimeout(() => {
       this.renderer2.setAttribute(this.hand()?.nativeElement , 'src' , '/assets/imgi_2_hand-red.webp')
     }, 200);

     this.flip = false ;
     
   }else{
     this.renderer2.removeClass( this.image()?.nativeElement   , 'rotate-y-360'  );

     setTimeout(() => {
       this.renderer2.setAttribute(this.image()?.nativeElement , 'src' , '/assets/flip-red.webp')
     }, 500);
     this.renderer2.setStyle(this.header()?.nativeElement , 'backgroundColor' , '#afbc72');

     this.renderer2.removeClass(this.hand()?.nativeElement , 'rotate-360')    
     setTimeout(() => {
       this.renderer2.setAttribute(this.hand()?.nativeElement , 'src' , '/assets/imgi_1_hand-green.webp')
     }, 200);
     this.flip = true ;     
    }
}
}
