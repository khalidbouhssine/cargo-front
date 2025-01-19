import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // Form data object
  formData = {
    nomComplet: '',
    email: '',
    password: '',
    confirmPassword: '',
    cin: '',
    city: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  register() {
    const { nomComplet, email, password, confirmPassword, cin, city } = this.formData;

    // Validate input fields
    if (!nomComplet || !email || !password || !cin || !city) {
      alert('All fields are required!');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Prepare payload
    const payload = { nomComplet, email, password, cin, city };

    // Make HTTP POST request
    this.http.post('http://localhost:8080/clients/registerClient', payload)
      .subscribe({
        next: (response) => {
          alert('Registration successful!');
          this.router.navigate(['/login']); // Redirect to login page
        },
        error: (error) => {
          console.error(error);
          alert('Registration failed. Please try again.');
        }
      });
  }
}
