import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {MovieSearchComponent} from './movie-search.component'

const routes: Routes = [
    { path: "portfolio/movie-search", children: [
       {path: '', component: MovieSearchComponent}
    ]}
];


export const MovieSearchRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);