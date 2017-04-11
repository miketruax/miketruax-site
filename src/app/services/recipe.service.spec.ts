import { TestBed, inject } from '@angular/core/testing';
import { RecipeService} from './recipe.service';

describe('FoodServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipeService]
    });
  });

  it('should ...', inject([RecipeService], (service: RecipeService) => {
    expect(service).toBeTruthy();
  }));
});
