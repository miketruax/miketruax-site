import { Routes } from '@angular/router';
import { FoodComponent } from './food/food.component';
import {AboutComponent} from "./about/about.component";
import {HomeComponent} from "./home/home.component";
import {ExamplesComponent} from "./examples/examples.component";
import {ResumeComponent} from "./resume/resume.component"
export const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'food',  component: FoodComponent},
  { path: 'about', component: AboutComponent},
  { path: 'home', component: HomeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'examples', component: ExamplesComponent},
  { path: '**',   redirectTo: '/home', pathMatch: 'full' },
];
