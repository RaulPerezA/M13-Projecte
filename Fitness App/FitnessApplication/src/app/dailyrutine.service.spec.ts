import { TestBed } from '@angular/core/testing';

import { DailyrutineService } from './dailyrutine.service';

describe('DailyrutineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DailyrutineService = TestBed.get(DailyrutineService);
    expect(service).toBeTruthy();
  });
});
