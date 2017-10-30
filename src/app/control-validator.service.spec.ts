import { TestBed, inject } from '@angular/core/testing';

import { ControlValidatorService } from './control-validator.service';

describe('ControlValidatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ControlValidatorService]
    });
  });

  it('should be created', inject([ControlValidatorService], (service: ControlValidatorService) => {
    expect(service).toBeTruthy();
  }));
});
