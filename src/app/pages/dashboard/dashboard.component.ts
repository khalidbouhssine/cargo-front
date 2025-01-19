import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router: Router) {}

  logout(): void {
    // Clear the token and email from localStorage
    localStorage.removeItem('tokenL');
    localStorage.removeItem('emailL');

    // Redirect the user to the login page
    this.router.navigate(['/loginl']);
  }
}
