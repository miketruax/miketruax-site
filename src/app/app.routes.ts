import { Routes } from '@angular/router';
import { FoodComponent } from './food/food.component';
import {AboutComponent} from "./about/about.component";
import {HomeComponent} from "./home/home.component";
export const routes: Routes = [
  { path: '',   component: HomeComponent, data: {animation: 'HomePage'} },
  { path: 'food',  component: FoodComponent, data: {animation: 'FoodPage'} },
  { path: 'about', component: AboutComponent, data: {animation: 'AboutPage'} },
  { path: 'portfolio', loadChildren: './+portfolio/portfolio.module#PortfolioComponent', data: {animation: 'PortfolioPage'} },
  { path: '**',   redirectTo: '/', pathMatch: 'full' }
];
