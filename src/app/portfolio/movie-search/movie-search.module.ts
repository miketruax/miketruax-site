
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../../material.module';
import { MovieSearchComponent } from './movie-search.component';
import { MovieAboutComponent } from './about/movie-about.component';
import { MoviePosterComponent } from './poster/movie-poster.component';
import { MovieSearchRoutingModule } from './movie-search-routing.module';
import { PaginationComponent } from '../../shared/pagination/pagination.component';


@NgModule({
  declarations: [
    MovieSearchComponent, MovieAboutComponent, MoviePosterComponent, PaginationComponent
  ],
  imports: [CommonModule, MovieSearchRoutingModule, MaterialModule, 
    FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [MovieSearchComponent], 
  exports: [MovieSearchComponent, MovieAboutComponent, MoviePosterComponent]
})
export class MovieSearchModule {}