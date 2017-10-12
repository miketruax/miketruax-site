import { Pipe, PipeTransform } from '@angular/core';
import {Recipe} from "../stores/recipe.store";

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(allRecipes: Recipe[], catName: string): any {
    let catID;
      switch (catName) {
        case "breads": {
          catID = 1;
          break;
        }
        case "desserts": {
          catID = 2;
          break;
        }
        case "entrees": {
          catID = 3;
          break;
        }
        case "sides": {
          catID = 4;
          break;
        }

        default: {
          catID = 0;
          break;
        }
      }
      return allRecipes.filter(v => v.category_ID === catID);
  }

}
