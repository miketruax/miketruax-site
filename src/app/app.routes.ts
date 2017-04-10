import { Routes } from '@angular/router';
import { FoodComponent } from './food/food.component';
import {AboutComponent} from "./about/about.component";
import {HomeComponent} from "./home/home.component";
import {ExamplesComponent} from "./examples/examples.component";
import {SkillsComponent} from "./skills/skills.component"
export const routes: Routes = [
  { path: '',   component: HomeComponent },
  { path: 'food',  component: FoodComponent},
  { path: 'about', component: AboutComponent},
  { path: 'skills', component: SkillsComponent },
  { path: 'examples', component: ExamplesComponent},
  { path: '**',   redirectTo: '/', pathMatch: 'full' },
];
