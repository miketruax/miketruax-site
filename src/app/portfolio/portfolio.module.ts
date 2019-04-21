import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../material.module';
import { TicTacToeComponent } from './tic-tac-toe/tictactoe.component';
import { WhoWasItComponent } from './who-was-it/home/who-was-it.component';
import { PortfolioComponent } from './portfolio.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { MovieSearchModule } from './movie-search/movie-search.module';
import { WhoWasItService } from './who-was-it/services/who-was-it.service';
import { reducers } from './store/reducers';
import { StoreModule } from '@ngrx/store';
import { PortfolioStoreFacade } from './store';
import { WhoWasItAboutComponent } from './who-was-it/about/who-was-it-about.component';
import { WhoWasItResultsComponent } from './who-was-it/home/who-was-it-results.component';
import { SharedModule } from '../shared/components/shared.module';
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { TileSlideBoard } from './tile-slide-game/tile-slide-board/tile-slide-board.component';
import { TileSlideGame } from './tile-slide-game/tile-slide-game.component';



@NgModule({
  declarations: [ TileSlideBoard, TileSlideGame,
    TicTacToeComponent, WhoWasItComponent, PortfolioComponent,WhoWasItResultsComponent , WhoWasItAboutComponent, PortfolioItemComponent
  ],
  imports: [CommonModule, PortfolioRoutingModule, MaterialModule, 
    FormsModule, SharedModule,
    HttpClientModule, StoreModule.forFeature('portfolio', reducers)
  ],
  providers: [WhoWasItService, PortfolioStoreFacade, {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}],
  bootstrap: [PortfolioComponent], 
  entryComponents: [PortfolioItemComponent],
  exports: [PortfolioComponent, TicTacToeComponent, WhoWasItComponent, MovieSearchModule, PortfolioItemComponent]
})
export class PortfolioModule { }