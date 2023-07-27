import { TestBed } from '@angular/core/testing';

import { ApprovalRequestDataService } from './approval-request-data.service';

describe('ApprovalRequestDataService', () => {
  let service: ApprovalRequestDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApprovalRequestDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
