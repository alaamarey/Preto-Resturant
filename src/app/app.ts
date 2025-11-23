import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { NgxSpinnerModule } from "ngx-spinner";
import { DrawerModule } from 'primeng/drawer';
import { FooterComponent } from "../shared/components/footer/footer.component";
import { NavbarComponent } from "../shared/components/navbar/navbar.component";





@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, NavbarComponent, FooterComponent, NgxSpinnerModule,  DrawerModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

}