import { TestBed } from '@angular/core/testing';

import { HelloWorldElementService } from './hello-world-element.service';

describe('HelloWorldElementService', () => {
  let service: HelloWorldElementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelloWorldElementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
