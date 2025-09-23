import { TestBed } from '@angular/core/testing';

import { FileGetterService } from './file-getter.service';

describe('FileGetterService', () => {
  let service: FileGetterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileGetterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
