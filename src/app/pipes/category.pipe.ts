import { Pipe, PipeTransform } from '@angular/core';
import {Recipe} from "../stores/recipe.store";

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(allRecipes: Recipe[], catID: number): any {
      return allRecipes.filter(v => v.category_ID === catID);
  }

}
