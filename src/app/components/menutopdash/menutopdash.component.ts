import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menutopdash',
  templateUrl: './menutopdash.component.html',
  styleUrls: ['./menutopdash.component.css']
})
export class MenutopdashComponent {
  @Input() title: string = 'Dashboard'; // Default value

    constructor(private router: Router) {}
    logout(): void {
      // Clear the token and email from localStorage
      localStorage.removeItem('emailG');
      localStorage.removeItem('tokenG');
  
      // Redirect the user to the login page
      this.router.navigate(['/loging']);
    }
}
