import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-l',
  templateUrl: './login-l.component.html',
  styleUrls: ['./login-l.component.css']
})
export class LoginLComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    const apiUrl = 'http://localhost:8080/adminLocal/login';
    const loginData = { email: this.email, password: this.password };

    this.http.post(apiUrl, loginData).subscribe({
      next: (response: any) => {
        if (response.token) {
          localStorage.setItem('tokenL', response.token);
          localStorage.setItem('emailL', this.email);
          this.router.navigate(['/dashboard']);
        } else {
          alert('Invalid response from server.');
        }
      },
      error: (error) => {
        alert('Login failed');
      }
    });
  }
}
