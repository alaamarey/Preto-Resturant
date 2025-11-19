import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { register } from 'swiper/element/bundle';
import { CategroyService } from './service/categroy.service';
import { SidesComponent } from "./components/sides/sides.component";
import { KidsComponent } from './components/kids/kids.component';
import { DesertComponent } from './components/desert/desert.component';
import { AnimateOnScroll } from 'primeng/animateonscroll';

register();
  
  
@Component({
  selector: 'app-foodcategroy',
  imports: [BreadcrumbModule, RouterLink, RouterLinkActive, RouterOutlet, SidesComponent , KidsComponent , DesertComponent , AnimateOnScroll],
  templateUrl: './foodcategroy.component.html',
  styleUrl: './foodcategroy.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA] 
})
export class FoodcategroyComponent  implements OnInit {

  private readonly categroyService = inject(CategroyService);

  breadCrumbItems = signal<object[]>([]);


ngOnInit(): void {
  this.categroyService.getAllFoodCategory().subscribe({
    next: (response => {
      console.log(response);
      if (response.result === true) {
        for (const categroy of response.data.slice(0,4)) {
          console.log(categroy.categoryName);
        let  categroyName = categroy.categoryName;
          
          this.breadCrumbItems.update( data =>[
            ...data, { categroyName: categroyName }]  ) 
          }
        
      }
      console.log(this.breadCrumbItems());
    })
  })
  }
  



}
