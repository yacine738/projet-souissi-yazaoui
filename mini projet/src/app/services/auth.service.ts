import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  state: string = 'disconnected';

  constructor() {}
login(username:string,password:string){
   if(username=="iyed" && password=="iyed"){
    localStorage.setItem("state","connected")
  
    return true;
  }
  else{
    localStorage.setItem("state","disconnected")
    return false;
  }
 
}
public logout(){
  localStorage.removeItem('state')
}
}

