import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthLGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const tokenL = localStorage.getItem('tokenL'); // AdminL-specific token
    if (tokenL) {
      return true; // Allow access if token exists
    } else {
      this.router.navigate(['/loginl']); // Redirect to login if no token
      return false;
    }
  }
}
