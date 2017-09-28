import { TestBed, inject } from '@angular/core/testing';

import { CardManagementService } from './card-management.service';

describe('CardManagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardManagementService]
    });
  });

  it('should be created', inject([CardManagementService], (service: CardManagementService) => {
    expect(service).toBeTruthy();
  }));
});
