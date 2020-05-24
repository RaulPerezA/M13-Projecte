import { TestBed } from '@angular/core/testing';

import { CreateExerciceService } from './routineExercise.service';

describe('CreateExerciceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateExerciceService = TestBed.get(CreateExerciceService);
    expect(service).toBeTruthy();
  });
});
