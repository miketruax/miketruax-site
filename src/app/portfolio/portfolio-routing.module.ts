import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {PortfolioComponent} from "./portfolio.component"
import {TicTacToeComponent} from './tic-tac-toe/tictactoe.component'
import {WhoWasItComponent} from './who-was-it/home/who-was-it.component'

const routes: Routes = [
    { path: "portfolio", component: PortfolioComponent}, 
    { path: "portfolio/tic-tac-toe", component: TicTacToeComponent},
    { path: 'portfolio/movie-search', loadChildren: './movie-search/movie-search.module', data: {animation: 'MovieSearch'} },
    { path: "portfolio/who-was-it", component: WhoWasItComponent}, 

];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class PortfolioRoutingModule { }