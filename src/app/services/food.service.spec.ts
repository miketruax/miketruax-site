import { TestBed, inject } from '@angular/core/testing';
import { FoodService} from './food.service';

describe('FoodServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoodService]
    });
  });

  it('should ...', inject([FoodService], (service: FoodService) => {
    expect(service).toBeTruthy();
  }));
});
