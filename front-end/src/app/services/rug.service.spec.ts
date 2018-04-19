import { TestBed, inject } from '@angular/core/testing';

import { DishService } from './rug.service';

describe('DishService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DishService]
    });
  });

  it('should be created', inject([DishService], (service: DishService) => {
    expect(service).toBeTruthy();
  }));
});
