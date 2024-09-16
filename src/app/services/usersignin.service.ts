import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class UsersigninService {
  private userData: any = null;  // To store user data

  constructor() {}

  // Method to fetch the user data from the backend
  // getUserData(){
  //   return this.http.get('http://localhost/bankApp/usersignin.php');
  // }

  // Method to save the user data
  saveUserData(data: any){
    this.userData = data;
  }

  // Method to retrieve the stored user data
  getSavedUserData(){
    return this.userData;
  }

}
