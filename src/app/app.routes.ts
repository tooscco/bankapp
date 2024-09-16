import { Routes } from '@angular/router';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { UsersigninComponent } from './usersignin/usersignin.component';
import { HomeComponent } from './home/home.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'userSignup', component: UsersignupComponent},
    { path: 'userSignin', component: UsersigninComponent},
    { path: 'userDashboard', component: UserdashboardComponent},
    { path: 'adminSignup', component: AdminsignupComponent},
];
