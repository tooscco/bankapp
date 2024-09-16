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


@Component({
  selector: 'app-usersignup',
  standalone: true,
  imports: [
    MatFormFieldModule, 
    MatInputModule, 
    MatIconModule, 
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    HttpClientModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})


export class UsersignupComponent {
 constructor (public userform:FormBuilder, public http:HttpClient, public routes:Router){}
 public data:any[] =[]
 public msg='';
 public usermsg='';
 public phonemsg='';

 hide = signal(true);
 clickEvent(event: MouseEvent) {
   this.hide.set(!this.hide());
   event.stopPropagation();
 }

 public usersign=this.userform.group({
  surname:['', [Validators.required, Validators.pattern('^[A-Z].*')]],
  firstname:['', [Validators.required, Validators.pattern('^[A-Z].*')]],
  lastname:['', [Validators.required, Validators.pattern('^[A-Z].*')]],
  email:['', [Validators.required, Validators.email]],
  password:['', [Validators.required, Validators.minLength(6), Validators.pattern('^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).*$')]],
  address:['', [Validators.required, Validators.pattern('^[A-Z].*')]],
  username:['', Validators.required],
  gender:['', Validators.required],
  bdate:['', Validators.required],
  checkbox:[false, Validators.requiredTrue],
  pnumber:['', Validators.required]
 });

//  ngOnInit(){
//   this.http.get('http://localhost/bankApp/usersignupapi.php').subscribe((data:any) => {
//     this.data=data;
//   })
//  }

 btnSignup(){
  let sign={
    surname:this.usersign.value.surname,
    firstname:this.usersign.value.firstname,
    lastname:this.usersign.value.lastname,
    username:this.usersign.value.username,
    email:this.usersign.value.email,
    password:this.usersign.value.password,
    bdate:this.usersign.value.bdate,
    gender:this.usersign.value.gender,
    checkbox:this.usersign.value.checkbox,
    address:this.usersign.value.address,
    pnumber:this.usersign.value.pnumber,
  }

    this.http.post('http://localhost/bankApp/usersignup.php', sign).subscribe((data: any) => {
      console.log(data);
      if (data.status === false) {
        if (data.emailMessage) {
          this.msg = data.emailMessage;
        } else {
          this.msg = '';
        }

        if (data.usernameMessage) {
          this.usermsg = data.usernameMessage;
        } else {
          this.usermsg = ''; 
        }

        if(data.phoneMessage){
          this.phonemsg = data.phoneMessage;
        }else{
          this.phonemsg = '';
        }
      } else if (data.status === true) {
        this.routes.navigate(['/userSignin']);
      }
      
    });
  }
}
