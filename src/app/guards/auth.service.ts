import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  OptionLog = new Subject<boolean>();

  private isLoggedIn: boolean = false;

  login(email: string, password: string): boolean{
    if(email === "luis@gmail.com" && password === "12345"){
      this.isLoggedIn = true;
    }else{
      this.isLoggedIn = false;
    }
    return this.isLoggedIn;
  }

  isUserLoggedIn(): boolean{
    return this.isLoggedIn;
  }

  userLogOut(){
    this.OptionLog.next(false);
    this.isLoggedIn = false;
  }
  constructor() { }
}
