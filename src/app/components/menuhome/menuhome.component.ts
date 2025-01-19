import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menuhome',
  templateUrl: './menuhome.component.html',
  styleUrls: ['./menuhome.component.css']
})
export class MenuhomeComponent {
  isMenuVisible = false;
  constructor(private router: Router) {}


  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }
  
  openLocation() {
    window.open('https://maps.app.goo.gl/TBwwNs44WESR3Qhw6', '_blank');
  }

  logout() {
    // Clear local storage and navigate to login
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    this.router.navigate(['/login']);
  }
}
