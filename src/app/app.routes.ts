import { Routes } from '@angular/router';
import { authGuard } from '../core/guard/auth-guard';
import { CartComponent } from '../features/cart/cart.component';
import { ExperienceComponent } from '../features/experience/experience.component';
import { GroupingbookingComponent } from '../features/groupingbooking/groupingbooking.component';
import { MewnuitemdetailsComponent } from '../features/mewnuitemdetails/mewnuitemdetails.component';
import { NotfoundComponent } from '../features/notfound/notfound.component';
import { OurfoodComponent } from '../features/ourfood/ourfood.component';
import { ProfileComponent } from '../features/profile/profile.component';
import { ZomatoComponent } from '../features/zomato/zomato.component';

export const routes: Routes = [
    {
        path: '', redirectTo: () => "zomato", pathMatch: 'full'
    },

    {
        path: 'zomato', component: ZomatoComponent, title: 'Zomato Page'
    },

    {
        path: 'ourfood', component: OurfoodComponent, title: 'All-You-Can-Eat',
        canActivate: [authGuard],
        children: [

            {
                path: '', redirectTo: 'pizza', pathMatch: 'full'

            },
            {
                path: 'pizza', loadComponent: () => import('../features/ourfood/components/foodcategroy/components/pizza/pizza.component').then(c => c.PizzaComponent),


            },
            {
                path: 'Burger', loadComponent: () => import('../features/ourfood/components/foodcategroy/components/burger/burger.component').then(c => c.BurgerComponent),


            },
            {
                path: 'Sandwich', loadComponent: () => import('../features/ourfood/components/foodcategroy/components/sandwish/sandwish.component').then(c => c.SandwishComponent),


            },
            {
                path: 'Dosa', loadComponent: () => import('../features/ourfood/components/foodcategroy/components/dosa/dosa.component').then(c => c.DosaComponent),


            },
        ]
    },

    {
        path: 'categroies', loadComponent: () => import('../features/menus/menus.component').then(c => c.MenusComponent),
        canActivate: [authGuard],
        title: 'Find Your Menu'
    },
    {
        path: 'categroiestemdetails/:categroyId', component: MewnuitemdetailsComponent, canActivate: [authGuard], title: 'Preto Resturant'
    },

    {
        path: 'cart', component: CartComponent, canActivate: [authGuard], title: 'Your Cart'
    },


    {
        path: 'experience', component: ExperienceComponent, canActivate: [authGuard], title: 'Preto Experience'
    },
    {
        path: 'group-booking', component: GroupingbookingComponent, canActivate: [authGuard], title: 'Group Booking & Private Events'
    },

    {
        path: 'profile', component: ProfileComponent, canActivate: [authGuard], title: 'Your profile'
    },


    { path: "**", component: NotfoundComponent, title: 'Notfound Page' }
];
