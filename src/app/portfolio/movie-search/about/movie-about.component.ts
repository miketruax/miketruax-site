import {Component, OnInit } from '@angular/core';
import { PortfolioStoreFacade } from '../../store';
import { Observable } from 'rxjs';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'movie-about',
  templateUrl: 'movie-about.component.html',
  styleUrls: ['./movie-about.component.scss']
})
export class MovieAboutComponent implements OnInit {
  movie: Observable<Object>;
  constructor(private portfolioStore: PortfolioStoreFacade, private _dialogRef: MatDialogRef<MovieAboutComponent>) {
    this.movie = this.portfolioStore.selectedMovie$;
  }
  dismiss(){
    this._dialogRef.close();
  }
  ngOnInit() {
  }


}

