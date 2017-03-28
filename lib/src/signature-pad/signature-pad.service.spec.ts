/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SignaturePadService } from './signature-pad.service';

describe('Service: SignaturePad', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignaturePadService]
    });
  });

  it('should ...', inject([SignaturePadService], (service: SignaturePadService) => {
    expect(service).toBeTruthy();
  }));
});