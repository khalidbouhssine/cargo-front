import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard-g',
  templateUrl: './dashboard-g.component.html',
  styleUrls: ['./dashboard-g.component.css']
})
export class DashboardGComponent {

  constructor(private router: Router) {}
  logout(): void {
    // Clear the token and email from localStorage
    localStorage.removeItem('emailG');
    localStorage.removeItem('tokenG');

    // Redirect the user to the login page
    this.router.navigate(['/loging']);
  }

}
