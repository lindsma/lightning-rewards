import { TestBed, inject } from '@angular/core/testing';

import { CardCalculationsService } from './card-calculations.service';

describe('CardCalculationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardCalculationsService]
    });
  });

  it('should be created', inject([CardCalculationsService], (service: CardCalculationsService) => {
    expect(service).toBeTruthy();
  }));
});
