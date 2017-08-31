import { TestBed, inject } from '@angular/core/testing';

import { SessionService } from './session.service';
import { User } from "../models/user";

describe('SessionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SessionService]
    });
  });

  it('should be created', inject([SessionService], (service: SessionService) => {
    expect(service).toBeTruthy();
  }));

  it('Conect to service', inject([SessionService], (service: SessionService) => {
    var user = new User();
    let resource = service.login(user);
  }))
});
