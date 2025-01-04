import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class UserStatusService {
  private isLogin = false;
  private userNumber = '';

  constructor() { }


  getIsLogin(): boolean {
    return this.isLogin;
  }
  setIsLogin(value: boolean) {
    this.isLogin = value;
  }
  
  getUserNumber(): string {
    return this.userNumber;
  }
  setUserNumber(value: string) {
    this.userNumber = value;
  }

}
