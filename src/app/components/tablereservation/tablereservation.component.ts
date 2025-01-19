import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tablereservation',
  templateUrl: './tablereservation.component.html',
  styleUrls: ['./tablereservation.component.css']
})
export class TablereservationComponent implements OnInit {

  currentPage: number = 0;
  totalPages: number = 1;
  reservations: any[] = []; // Store fetched reservations
  token: string | null = localStorage.getItem('tokenG'); // Fetch token from localStorage

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.fetchReservations();
  }

  fetchReservations(): void {
    const url = `http://localhost:8080/reservations/allReservations?page=${this.currentPage}&size=5`;
    const headers = { 'Authorization': `Bearer ${this.token}` };

    this.http.get<any>(url, { headers }).subscribe({
      next: (response) => {
        this.reservations = response.reservations;
        this.totalPages = response.totalPages;
      },
      error: (error) => {
        console.error('Error fetching reservations:', error);
      }
    });
  }

  incrementPage(): void {
    if (this.currentPage + 1 < this.totalPages) {
      this.currentPage++;
      this.fetchReservations();
    }
  }

  decrementPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.fetchReservations();
    }
  }

  navigateToInfoReservation(reservation: any): void {
    // Navigate to '/dashboardg/inforeservation' with query parameters (or state if preferred)
    this.router.navigate(['/dashboardg/inforeservation'], {
      queryParams: { id: reservation.idReservation },
      state: { reservation }
    });
  }
}
