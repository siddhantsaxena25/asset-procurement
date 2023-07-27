import { TestBed } from '@angular/core/testing';

import { ApprovalDataService } from './approval-data.service';

describe('ApprovalDataService', () => {
  let service: ApprovalDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApprovalDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
