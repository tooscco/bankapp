import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersigninService } from '../services/usersignin.service';



@Component({
  selector: 'app-userdashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './userdashboard.component.html',
  styleUrl: './userdashboard.component.css'
})
export class UserdashboardComponent {
  constructor( public service : UsersigninService){}

  public userData: any ={};

  // @ViewChild('scrollableContent') scrollableContent: ElementRef | undefined;


//   scrollUp(): void {
//     if (this.scrollableContent) {
//       this.scrollableContent.nativeElement.scrollBy({ top: -100, behavior: 'smooth' });
//     }
//   }

//   scrollDown(): void {
//     if (this.scrollableContent) {
//       this.scrollableContent.nativeElement.scrollBy({ top: 100, behavior: 'smooth' });
//     }
//   }

ngOnInit(){
 this.userData= this.service.getSavedUserData();
 console.log(this.service.getSavedUserData());
 
}

}
