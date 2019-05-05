import { Component, OnInit, Input, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material';

@Component({
  selector: 'portfolio-info-component',
  templateUrl: 'portfolio-info.component.html',
  styleUrls: ['./portfolio-info.component.scss']
})
export class PortfolioInfoComponent implements OnInit {

    constructor(@Inject(MAT_SNACK_BAR_DATA) public portfolioItem: any, private _snackRef: MatSnackBarRef<PortfolioInfoComponent>) {
     }

     dismiss(){
       this._snackRef.dismiss();
     }
     get internalLink(){
      if(this.portfolioItem){
          return  !/^((http|https):\/\/)/.test(this.portfolioItem.link)
      }
      return false;
  }
  ngOnInit() {
  }

}
