import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-addcity',
  templateUrl: './addcity.component.html',
  styleUrls: ['./addcity.component.css']
})
export class AddcityComponent {
  city = { name: '' }; // Object to hold the city name input

  constructor(private http: HttpClient) {}

  addCity() {
    // Retrieve token from localStorage
    const tokenG = localStorage.getItem('tokenG');

    if (!tokenG) {
      alert('Token not found!');
      return;
    }

    // Define headers
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${tokenG}`,
      'Content-Type': 'application/json'
    });

    // Define request body
    const body = { nameCity: this.city.name };

    // Make the POST request
    this.http.post('http://localhost:8080/adminGlobal/addCityWithValidation', body, { headers })
      .subscribe(
        (response) => {
          console.log('City added successfully:', response);
          alert('City added successfully!');
        },
        (error) => {
          console.error('Error adding city:', error);
          alert('Failed to add city. Please try again.');
        }
      );
  }
}