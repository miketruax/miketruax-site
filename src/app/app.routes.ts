import { Routes } from '@angular/router';
import { FoodComponent } from './food/food.component';
import {AboutComponent} from "./about/about.component";
import {HomeComponent} from "./home/home.component";
import {SkillsComponent} from "./skills/skills.component"
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {MovieSearchComponent} from "./portfolio/movie-search/movie-search.component";
import {TicTacToeComponent} from "./portfolio/tic-tac-toe/tictactoe.component";
export const routes: Routes = [
  { path: '',   component: HomeComponent },
  { path: 'food',  component: FoodComponent},
  { path: 'about', component: AboutComponent},
  { path: 'skills', component: SkillsComponent },
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'portfolio/movie-search', component: MovieSearchComponent},
  { path: 'portfolio/tic-tac-toe', component: TicTacToeComponent},
  { path: '**',   redirectTo: '/', pathMatch: 'full' }
];
