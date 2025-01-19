import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seereservation',
  templateUrl: './seereservation.component.html',
  styleUrls: ['./seereservation.component.css']
})
export class SeereservationComponent implements OnInit {
  reservations: any[] = []; // Holds the fetched reservations
  filter = {
    startDate: '',
    endDate: ''
  };
  apiUrl = 'http://localhost:8080/reservations/myReservations/filter';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.fetchReservations();
  }

  fetchReservations(): void {
    const token = localStorage.getItem('token'); // Retrieve token from localStorage
    if (token) {
      this.http
        .get(this.apiUrl.replace('/filter', ''), {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .subscribe(
          (data: any) => {
            this.reservations = data; // Assign fetched reservations
          },
          (error) => {
            console.error('Error fetching reservations:', error);
          }
        );
    } else {
      console.error('Token not found in localStorage');
    }
  }

  applyFilter(): void {
    const token = localStorage.getItem('token'); // Retrieve token from localStorage
    if (token && this.filter.startDate && this.filter.endDate) {
      const body = {
        startDate: `${this.filter.startDate}T00:00:00`,
        endDate: `${this.filter.endDate}T23:59:59`
      };
  
      console.log('Request Body:', body); // Debugging
      console.log('Token:', token); // Debugging
  
      this.http
        .post(this.apiUrl, body, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .subscribe(
          (data: any) => {
            console.log('Response Data:', data); // Debugging
            this.reservations = data; // Assign filtered reservations
          },
          (error) => {
            console.error('Error applying filter:', error); // Debugging
          }
        );
    } else {
      console.error('Token or filter data is missing');
    }
  }
  

  navigateToModify(reservation: any): void {
    this.router.navigate(['/modifyreservation'], {
      queryParams: {
        idReservation: reservation.idReservation,
        idVoiture: reservation.voiture.idVoiture,
        endCity: reservation.endCity.nameCity,
        startDate: reservation.startDate,
        endDate: reservation.endDate,
        pricePerDay: reservation.voiture.pricePerDay
      }
    });
  }

  calculateDays(startDate: string, endDate: string): number {
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Reset time to 00:00:00 for both dates
    start.setHours(0, 0, 0, 0);
    end.setHours(0, 0, 0, 0);

    // Calculate the difference in days
    return Math.ceil((end.getTime() - start.getTime()) / (1000 * 3600 * 24));
  }
}
