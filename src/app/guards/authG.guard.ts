import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const tokenG = localStorage.getItem('tokenG'); // AdminL-specific token
    if (tokenG) {
      return true; // Allow access if token exists
    } else {
      this.router.navigate(['/loging']); // Redirect to login if no token
      return false;
    }
  }
}
