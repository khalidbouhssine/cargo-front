import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    const loginData = { email: this.email, password: this.password };
    this.http.post('http://localhost:8080/clients/login', loginData).subscribe(
      (response: any) => {
        // Save token and email in local storage
        localStorage.setItem('token', response.token);
        localStorage.setItem('email', this.email);

        // Navigate to home page
        this.router.navigate(['/home']);
      },
      (error) => {
        alert('Login failed');
      }
    );
  }
}
