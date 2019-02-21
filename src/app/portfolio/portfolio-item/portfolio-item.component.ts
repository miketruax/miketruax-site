import { Component, OnInit, Input, Inject } from '@angular/core';
import { PortfolioItem } from '../portfolioItem.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'portfolio-item-component',
  templateUrl: 'portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss']
})
export class PortfolioItemComponent implements OnInit {
portfolioItem: PortfolioItem

    constructor(public dialogRef: MatDialogRef<PortfolioItemComponent>, @Inject(MAT_DIALOG_DATA) public data: PortfolioItem) {
        this.portfolioItem = data['portfolioItem']
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
