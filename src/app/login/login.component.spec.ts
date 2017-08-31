import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { User } from "../models/user";
import { SessionService } from "../services/session.service";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ], providers: [SessionService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('Validate correct login User', () => {
    var user: User = new User();
    user.name = "Jhon";
    user.password = "123456";
    let fixture = component.ValidateUser(user);
    expect(fixture).toBe("OK");
  })

  it('Validate fail in login user', () => {
    var user: User = new User();
    user.name = "Jhon";
    user.password = "*******";
    let resource = component.ValidateUser(user);
    expect(resource).toBe("ERROR");
  })
});
