import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cities: any[] = [];
  startDate: string = '';
  endDate: string = '';
  selectedCity: string = '';
  
  // Variables for reclamation
  reclamationObjet: string = '';
  reclamationMessage: string = '';
  reclamationTelephone: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.fetchCities();
  }

  fetchCities(): void {
    const url = 'http://localhost:8080/city/displayallcity';
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };

    this.http.get<any[]>(url, { headers }).subscribe({
      next: (response) => {
        this.cities = response;
      },
      error: (err) => {
        console.error('Error fetching cities:', err);
      }
    });
  }

  search(): void {
    if (this.startDate && this.endDate && this.selectedCity) {
      this.router.navigate(['/result'], {
        queryParams: {
          startDate: this.startDate,
          endDate: this.endDate,
          city: this.selectedCity
        }
      });
    } else {
      alert('Please fill in all fields!');
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    this.router.navigate(['/login']);
  }

  openDatePicker(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    inputElement.showPicker();
  }

  submitReclamation(): void {
    if (this.reclamationObjet && this.reclamationMessage && this.reclamationTelephone) {
      const url = 'http://localhost:8080/reclamations/addReclamation';
      const token = localStorage.getItem('token');
      const headers = { Authorization: `Bearer ${token}` };
      const body = {
        objetReclamation: this.reclamationObjet,
        message: this.reclamationMessage,
        telephone: this.reclamationTelephone
      };

      this.http.post(url, body, { headers }).subscribe({
        next: (response) => {
          alert('Reclamation submitted successfully!');
          // Reset the form
          this.reclamationObjet = '';
          this.reclamationMessage = '';
          this.reclamationTelephone = '';
        },
        error: (err) => {
          console.error('Error submitting reclamation:', err);
          alert('Failed to submit reclamation. Please try again.');
        }
      });
    } else {
      alert('Please fill in all fields!');
    }
  }
}
