import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-tablecity',
  templateUrl: './tablecity.component.html',
  styleUrls: ['./tablecity.component.css']
})
export class TablecityComponent implements OnInit {
  cities: any[] = []; // To hold the list of cities

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadCities();
  }

  loadCities(): void {
    const token = localStorage.getItem('tokenG'); // Retrieve the token from localStorage

    if (!token) {
      alert('Token not found! Please log in again.');
      return;
    }

    // Set the Authorization header with the token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    // Fetch cities from the backend with the token
    this.http.get<any[]>('http://localhost:8080/city/displayallcity', { headers }).subscribe(
      (data) => {
        this.cities = data;
      },
      (error) => {
        console.error('Error fetching cities:', error);
      }
    );
  }

  deleteCity(id: number): void {
    const token = localStorage.getItem('tokenG');

    if (!token) {
      alert('Token not found! Please log in again.');
      return;
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    this.http.delete(`http://localhost:8080/adminGlobal/deleteCityWithValidation/${id}`, { headers }).subscribe(
      () => {
        alert('City deleted successfully!');
        this.loadCities(); // Reload cities after deletion
      },
      (error) => {
        console.error('Error deleting city:', error);
        alert('Failed to delete city. Please try again.');
      }
    );
  }
}