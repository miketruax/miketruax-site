import { Routes } from '@angular/router';
import { FoodComponent } from './food/food.component';
import {AboutComponent} from "./about/about.component";
import {HomeComponent} from "./home/home.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {MovieSearchComponent} from "./portfolio/movie-search/movie-search.component";
import {TicTacToeComponent} from "./portfolio/tic-tac-toe/tictactoe.component";
import {WhoWasItComponent} from "./portfolio/who-was-it/home/who-was-it.component";
import {TableComponent} from "./portfolio/periodic-table/table/table.component";
export const routes: Routes = [
  { path: '',   component: HomeComponent },
  { path: 'food',  component: FoodComponent},
  { path: 'about', component: AboutComponent},
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'portfolio/movie-search', component: MovieSearchComponent},
  { path: 'portfolio/tic-tac-toe', component: TicTacToeComponent},
  { path: 'portfolio/who-was-it', component: WhoWasItComponent},
  // { path: 'portfolio/periodic-table', component: TableComponent},
  { path: '**',   redirectTo: '/', pathMatch: 'full' }
];
