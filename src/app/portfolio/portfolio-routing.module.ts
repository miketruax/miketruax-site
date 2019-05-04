import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {PortfolioComponent} from "./portfolio.component"
import {TicTacToeComponent} from './tic-tac-toe/tictactoe.component'
import {WhoWasItComponent} from './who-was-it/who-was-it.component'
import { TileSlideGame } from "./tile-slide-game/tile-slide-game.component";

const routes: Routes = [
        { path: "portfolio",  children: [
        { path: '', component: PortfolioComponent},
        { path: "tic-tac-toe", component: TicTacToeComponent},
        { path: 'movie-search', loadChildren: './movie-search/movie-search.module#MovieSearch', data: {animation: 'MovieSearch'} },
        { path: "who-was-it", component: WhoWasItComponent}, 
        { path: "tile-slide", component: TileSlideGame}, 
    ]}, 
    

];

export const PortfolioRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);