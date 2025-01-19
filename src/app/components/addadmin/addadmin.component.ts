import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})
export class AddadminComponent implements OnInit {
  adming = {
    nomComplet: '',
    email: '',
    password: '',
    city: '' // This will now hold the selected city's ID
  };

  cities: Array<{ id: number; nameCity: string }> = []; // Array to store city data

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchCities(); // Fetch cities on component initialization
  }

  fetchCities(): void {
    const token = localStorage.getItem('tokenG');
    if (!token) {
      alert('Token not found. Please log in as Admin Global.');
      return;
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url = 'http://localhost:8080/city/displayallcity';

    this.http.get<Array<{ id: number; nameCity: string }>>(url, { headers })
      .subscribe(
        (response) => {
          this.cities = response;
        },
        (error) => {
          console.error('Error fetching cities:', error);
          alert('Failed to fetch city data.');
        }
      );
  }

  registerAdminLocal(): void {
    const token = localStorage.getItem('tokenG');
    if (!token) {
      alert('Token not found. Please log in as Admin Global.');
      return;
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url = 'http://localhost:8080/adminLocal/createAdminLocalAccount';

    this.http.post(url, this.adming, { headers })
      .subscribe(
        (response) => {
          console.log('Admin local created successfully:', response);
          alert('Admin Local added successfully!');
          this.resetForm();
        },
        (error) => {
          console.error('Error creating admin local:', error);
          alert('Failed to create Admin Local. Please try again.');
        }
      );
  }

  resetForm(): void {
    this.adming = {
      nomComplet: '',
      email: '',
      password: '',
      city: '' // Reset selected city
    };
  }
}
