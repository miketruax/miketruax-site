import { TestBed, inject } from '@angular/core/testing';
import { ResumeService } from './skills.service';

describe('ResumeServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResumeService]
    });
  });

  it('should ...', inject([ResumeService], (service: ResumeService) => {
    expect(service).toBeTruthy();
  }));
});
