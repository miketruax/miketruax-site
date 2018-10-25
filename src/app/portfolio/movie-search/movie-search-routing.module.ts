import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {MovieSearchComponent} from './movie-search.component'

const routes: Routes = [
    { path: "movie-search", component: MovieSearchComponent}
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class MovieSearchRoutingModule { }