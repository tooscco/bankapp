import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserdashboardComponent } from "./userdashboard/userdashboard.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserdashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bankapp';
}
