import { TestBed } from '@angular/core/testing';

import { GeneralRutineService } from './general-rutine.service';

describe('GeneralRutineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeneralRutineService = TestBed.get(GeneralRutineService);
    expect(service).toBeTruthy();
  });
});
