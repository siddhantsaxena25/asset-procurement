import { TestBed } from '@angular/core/testing';

import { ApprovalFormDataService } from './approval-form-data.service';

describe('ApprovalFormDataService', () => {
  let service: ApprovalFormDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApprovalFormDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
