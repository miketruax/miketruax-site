import {Component, Input, OnInit} from "@angular/core";
import {Recipe} from "../stores/recipe.store";
import {fadeInAnimation} from "../animations/fade-in.animation";
@Component({
  selector: 'food-list',
  templateUrl: './food-list.component.html',
  animations: [fadeInAnimation]
})
export class FoodListComponent implements OnInit{
  activeCat: number = 1;
  activeIdx: number;
  activeArr: Recipe[];

  @Input() recipes: Recipe[];
  constructor() {
    this.activeIdx = 0;
  }

  cycleNext(i: number){
    this.activeIdx = i+1 > this.activeArr.length ? 0 : i+1;
    if(i+1 === this.activeArr.length){
      this.activeIdx = 0;
      return;
    }
    this.activeIdx = i+1;
  }

  cyclePrev(i: number){
    this.activeIdx = i-1 < 0 ? this.activeArr.length -1 : i-1;
  }

  setCat(newCat: number){
    this.activeCat = newCat;
    this.activeIdx = 0;
    this.activeArr = this.recipes.filter(v => v.category_ID === this.activeCat);
  }

  ngOnInit(){
    this.activeArr = this.recipes.filter(v => v.category_ID === this.activeCat);
  }
}
