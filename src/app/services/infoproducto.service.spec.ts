import { TestBed } from '@angular/core/testing';

import { InfoproductoService } from './infoproducto.service';

describe('InfoproductoService', () => {
  let service: InfoproductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoproductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
