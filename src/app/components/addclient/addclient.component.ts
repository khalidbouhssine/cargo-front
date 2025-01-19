import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class AddclientComponent {
  client = {
    nomComplet: '',
    email: '',
    password: '',
    cin: '',
    city: ''
  };

  constructor(private http: HttpClient) {}

  registerClient(): void {
    const token = localStorage.getItem('tokenG'); // Retrieve the token from localStorage
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.post('http://localhost:8080/clients/registerClient', this.client, { headers })
      .subscribe(
        response => {
          console.log('Client registered successfully:', response);
          alert('Client added successfully!');
        },
        error => {
          console.error('Error registering client:', error);
          alert('Failed to register the client. Please try again.');
        }
      );
  }
}
