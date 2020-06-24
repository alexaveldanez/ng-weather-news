import { TestBed } from '@angular/core/testing';

import { TechNewsService } from './tech-news.service';

describe('TechNewsService', () => {
  let service: TechNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
