import {BrowserModule} from '@angular/platform-browser';
import {NgModule, APP_INITIALIZER} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {routes} from './app.routes';
import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {FoodComponent} from "./food/food.component";
import {AboutComponent} from "./about/about.component";
import {reducers} from './reducers';
import {HomeComponent} from "./home/home.component";
import {RecipeService} from "./services/recipe.service";
import {MovieService} from "./services/movie.service";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {TicTacToeComponent} from "./portfolio/tic-tac-toe/tictactoe.component";
import {MovieSearchComponent} from "./portfolio/movie-search/movie-search.component";
import {StoreModule} from "@ngrx/store";
import {FoodListComponent} from "./food/food-list.component";
import {MovieSearchImageComponent} from "./portfolio/movie-search/image/movie-search-image.component";
import {MovieMoreInfoComponent} from "./portfolio/movie-search/more-info/movie-more-info.component";
import {PaginationComponent} from "./shared/pagination/pagination.component";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {WhoWasItComponent} from "./portfolio/who-was-it/home/who-was-it.component";
import {WhoWasItAboutComponent} from "./portfolio/who-was-it/about/who-was-it-about.component";
import {WhoWasItResultsComponent} from "./portfolio/who-was-it/home/who-was-it-results.component";
import {EtaTimeUntilComponent} from "./shared/eta-until-end/eta-time-until.component";
import {SectionBackgroundFade} from "./directives/section-background-fade";
import {SlideBox} from "./directives/container-box-slide";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { MaterialModule } from './material.module';


export function startUpRecipes(startUpService: RecipeService, http: HttpClient): Function {
  return () => {
    let backgrounds = ["beginning.gif", "home-logo.png", "consultation.gif", "design.gif", "food.gif",
      "home-logo.png", "passions.gif", "philosophy.gif", "planning.gif", "portfolio.gif",
      "programming.gif", "retail.gif", "school.gif", "timedate.gif"];
    backgrounds.forEach((v) => {
      http.get(`/assets/img/background/${v}`)
    });

    startUpService.getRecipes()
  };
}

@NgModule({
  declarations: [
    //Main Components
    AppComponent, FoodComponent, AboutComponent, PortfolioComponent, HomeComponent, FoodListComponent,

    //Portfolio Components
    TicTacToeComponent, MovieSearchComponent,

      //WhoWasIt Components
          WhoWasItComponent, WhoWasItAboutComponent, WhoWasItResultsComponent,

      //Movie Search Components
          MovieSearchImageComponent, MovieMoreInfoComponent,

    //Shared Components
    PaginationComponent, EtaTimeUntilComponent,

    //Directives
    SectionBackgroundFade, SlideBox
      ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule, MaterialModule,
    RouterModule.forRoot(routes, {
      useHash: true
    }),
    StoreModule.forRoot(reducers),
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: startUpRecipes,
    deps: [RecipeService, HttpClient],
    multi: true
  }, RecipeService, MovieService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
