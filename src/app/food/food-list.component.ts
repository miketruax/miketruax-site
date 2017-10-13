import {Component, OnInit, Input} from "@angular/core";
import {Recipe} from "../stores/recipe.store";
@Component({
  selector: 'food-list',
  templateUrl: './food-list.component.html'
})
export class FoodListComponent{
  activeCat: number = 1;
  activeIdx: number;
  @Input() recipes: Recipe[];
  constructor() {
    this.activeIdx = 0;
  }
  getActiveArr(): Recipe[]{
    return this.recipes.filter(v => v.category_ID === this.activeCat);
  }
  cycleRight(i: number){
    let actArr = this.getActiveArr();
    if(i+1 === actArr.length){
      this.activeIdx = 0;
      return;
    }
    this.activeIdx = i+1;
  }

  cycleLeft(i: number){
    let actArr = this.getActiveArr();
    if(i-1 <0){
      this.activeIdx = actArr.length-1;
      return;
    }
    this.activeIdx = i-1;
  }

  setCat(newCat: number){
    this.activeCat = newCat;
    this.activeIdx = 0;
  }

  getNext(i: number){
    let actArr = this.getActiveArr();
    if(i+1 === actArr.length){
      return actArr[0];
    }
    return actArr[i+1];
  }

  getPrev(i: number){
    let actArr = this.getActiveArr();
    if(i-1 < 0){
      return actArr[actArr.length-1];
    }
    return actArr[i-1];
  }
  setID(i: number){
    this.activeIdx = i;
  }

}
