import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-g',
  templateUrl: './login-g.component.html',
  styleUrls: ['./login-g.component.css']
})
export class LoginGComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    const loginUrl = 'http://localhost:8080/adminGlobal/login';
    const loginData = { email: this.email, password: this.password };

    this.http.post(loginUrl, loginData).subscribe(
      (response: any) => {
        if (response && response.token) {
          localStorage.setItem('emailG', this.email);
          localStorage.setItem('tokenG', response.token);
          this.router.navigate(['/dashboardg']); 
        } else {
          alert('Login not successful'); 
        }
      },
      (error) => {
        alert('Login not successful'); 
        console.error('Login error:', error);
      }
    );
  }
}
