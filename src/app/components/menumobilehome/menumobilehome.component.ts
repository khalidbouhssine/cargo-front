import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menumobilehome',
  templateUrl: './menumobilehome.component.html',
  styleUrls: ['./menumobilehome.component.css']
})
export class MenumobilehomeComponent {
  isMenuVisible: boolean = false;
  constructor(private router: Router) {}


  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }
  
    logout() {
      // Clear local storage and navigate to login
      localStorage.removeItem('token');
      localStorage.removeItem('email');
      this.router.navigate(['/login']);
    }
}
