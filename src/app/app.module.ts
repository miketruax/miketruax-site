import {BrowserModule} from '@angular/platform-browser';
import { ParticlesModule } from 'angular-particle';
import {NgModule, APP_INITIALIZER} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {routes} from './app.routes';
import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {FoodComponent} from "./food/food.component";
import {AboutComponent} from "./about/about.component";
import {reducers} from './store/reducers';
import {HomeComponent} from "./home/home.component";
import {RecipeService} from "./services/recipe.service";
import {StoreModule} from "@ngrx/store";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SectionBackgroundFade} from "./directives/section-background-fade";
import {SlideBox} from "./directives/container-box-slide";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { MaterialModule } from './material.module';
import {PortfolioModule} from './portfolio/portfolio.module'
import { SharedModule } from './shared/components/shared.module';



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
    AppComponent, FoodComponent, AboutComponent, HomeComponent,

    //Directives
    SectionBackgroundFade, SlideBox
      ],
  imports: [
    BrowserModule, PortfolioModule,
    BrowserAnimationsModule,
    FormsModule, ParticlesModule,
    HttpClientModule, MaterialModule, SharedModule,
    RouterModule.forRoot(routes, {
      useHash: false
    }),
    StoreModule.forRoot(reducers),
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: startUpRecipes,
    deps: [RecipeService, HttpClient],
    multi: true
  }, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
