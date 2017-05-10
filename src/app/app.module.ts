import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routes} from './app.routes';
import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {FoodComponent} from "./food/food.component";
import {AboutComponent} from "./about/about.component";
import * as reducer from './reducers';
import {HomeComponent} from "./home/home.component";
import {RecipeService} from "./services/recipe.service";
import {SkillsService} from "./services/skills.service";
import { CapitalizePipe } from './pipes/capitalize.pipe';
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {TicTacToeComponent} from "./portfolio/tic-tac-toe/tictactoe.component";
import {MovieSearchComponent} from "./portfolio/movie-search/movie-search.component";
import {CategoryPipe} from "./pipes/category.pipe";
import {StoreModule} from "@ngrx/store";
import {FoodListComponent} from "./food/food-list.component";


@NgModule({
  declarations: [
    AppComponent, FoodComponent, AboutComponent,
    PortfolioComponent, HomeComponent,
    TicTacToeComponent, MovieSearchComponent, FoodListComponent, CapitalizePipe,
    CategoryPipe],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, {
      useHash: true
    }),
    StoreModule.provideStore(reducer.default),
  ],
  providers: [RecipeService, SkillsService],
  bootstrap: [AppComponent]
})
export class AppModule{

}
