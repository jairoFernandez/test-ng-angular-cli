import { Component, OnInit } from '@angular/core';
import { User } from "../models/user";
import { SessionService } from "../services/session.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private sesionService: SessionService) { }

  ngOnInit() {
  }

  ValidateUser(user: User): string{
    var validate = this.sesionService.login(user);
    if(validate){
      return "OK";
    }else{
      return "ERROR";
    }
  }
}
