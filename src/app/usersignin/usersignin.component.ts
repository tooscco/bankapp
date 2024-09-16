import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterLink } from '@angular/router';
import { UsersigninService } from '../services/usersignin.service';

@Component({
  selector: 'app-usersignin',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule,  MatFormFieldModule, 
    MatInputModule, 
    MatIconModule, 
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    HttpClientModule,
  ],
  templateUrl: './usersignin.component.html',
  styleUrl: './usersignin.component.css'
})
export class UsersigninComponent {
  public msg='';

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

 constructor(public SigninForm:FormBuilder, public routes:Router, public http:HttpClient, public service : UsersigninService){}

 public usersignin=this.SigninForm.group({
  email:['', Validators.required],
  password:['', [Validators.required, Validators.minLength(6), Validators.pattern('^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).*$')]],
 })


 btnSignin(){
  let signinobj={
    emailOrUsername:this.usersignin.value.email,
    password:this.usersignin.value.password,
  }
  this.http.post('http://localhost/bankApp/usersignin.php', signinobj).subscribe((data:any)=> {
    console.log(data.user);
    
    if(data.status===false){
      if(data.message){
        this.msg=data.message;
      }
      else{
        this.msg='';
      }
    }
     else if(data.status===true){
      this.service.saveUserData(data.user)
      this.routes.navigate(['/userDashboard']);
    }
  })
 }

}
