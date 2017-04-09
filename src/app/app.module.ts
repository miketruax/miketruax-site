import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routes} from './app.routes';
import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {FoodComponent} from "./food/food.component";
import {AboutComponent} from "./about/about.component";
import {ExamplesComponent} from "./examples/examples.component";

import {HomeComponent} from "./home/home.component";
import {FoodService} from "./services/food.service";
import {SkillsService} from "./services/skills.service";
import { CapitalizePipe } from './pipes/capitalize.pipe';
import {SkillsComponent} from "./skills/skills.component";





@NgModule({
  declarations: [
    AppComponent, FoodComponent, AboutComponent, ExamplesComponent, SkillsComponent, HomeComponent, CapitalizePipe],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, {
      useHash: true
    }),
  ],
  providers: [FoodService, SkillsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
