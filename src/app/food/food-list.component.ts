import {Component, OnInit, Input} from "@angular/core";
import {Recipe} from "../stores/recipe.store";
@Component({
  selector: 'food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['../styles/app.style.scss']
})
export class FoodListComponent implements OnInit {
  activeCat: string;
  activeIdx: number;
  catRef: Object;
  @Input() recipes: Recipe[];
  constructor() {
    this.activeCat = 'breads';
    this.activeIdx = 0;
    this.catRef = {"breads": 1, "desserts": 2, "sides": 4, "entrees": 3};

  }
  getActiveArr(){
    return this.recipes.filter(v => v.category_ID === this.catRef[this.activeCat]);
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

  setCat(newCat: string){
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


  ngOnInit() {
  }

}
