import { Injectable } from '@angular/core';
import { User } from "../models/user";

const Users: User[] = [
  {
    name: "Jhon",
    password: "123456"
  }
];

@Injectable()
export class SessionService {

  constructor() { }

  login(user: User):boolean{
    var search = Users.find(x => x.name == user.name);
    
    if(search){
      if(user.password == search.password){
        return true;
      }else{
        return false;
      }
    }else{
      return false;
    }   
  }
}
