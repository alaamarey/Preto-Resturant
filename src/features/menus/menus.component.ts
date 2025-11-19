import { Component } from '@angular/core';
import { MeanuimageComponent } from "./components/meanuimage/meanuimage.component";
import { MenuitemsComponent } from "./components/menuitems/menuitems.component";

@Component({
  selector: 'app-menus',
  imports: [MeanuimageComponent, MenuitemsComponent],
  templateUrl: './menus.component.html',
  styleUrl: './menus.component.css',
})
export class MenusComponent {

}
