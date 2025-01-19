import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-inforeservation',
  templateUrl: './inforeservation.component.html',
  styleUrls: ['./inforeservation.component.css']
})
export class InforeservationComponent implements OnInit {
  reservationData: any = {}; // To store reservation details
  reservationId: string | null = null; // To store the reservation ID

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.reservationId = params.get('id'); // Extract the 'id' parameter
      if (this.reservationId) {
        this.getReservationDetails(this.reservationId);
      }
    });
  }

  getReservationDetails(id: string): void {
    const tokenG = localStorage.getItem('tokenG'); // Retrieve token
    const headers = new HttpHeaders().set('Authorization', `Bearer ${tokenG}`); // Add Authorization header

    this.http
      .get(`http://localhost:8080/reservations/reservationDetails/${id}`, { headers })
      .subscribe(
        (response: any) => {
          this.reservationData = response; // Store the retrieved data
        },
        (error) => {
          console.error('Error fetching reservation details:', error); // Handle errors
        }
      );
  }

  confirmReservation(): void {
    if (this.reservationId) {
      const tokenG = localStorage.getItem('tokenG'); // Retrieve token
      const headers = new HttpHeaders().set('Authorization', `Bearer ${tokenG}`); // Add Authorization header

      this.http
        .put(`http://localhost:8080/reservations/confirmReservation/${this.reservationId}`, null, { headers })
        .subscribe(
          () => {
            alert('Reservation confirmed successfully!');
            this.router.navigate(['/dashboardg/reservation']); // Navigate to /reservation after confirmation
          },
          (error) => {
            console.error('Error confirming reservation:', error); // Handle errors
            alert('Failed to confirm reservation. Please try again.');
          }
        );
    } else {
      alert('Invalid reservation ID. Cannot confirm.');
    }
  }

  deleteReservation(): void {
    if (this.reservationId) {
      const tokenG = localStorage.getItem('tokenG'); // Retrieve token
      const headers = new HttpHeaders().set('Authorization', `Bearer ${tokenG}`); // Add Authorization header

      this.http
        .delete(`http://localhost:8080/reservations/deleteReservation/${this.reservationId}`, { headers })
        .subscribe(
          () => {
            alert('Reservation deleted successfully!');
            this.router.navigate(['/dashboardg/reservation']); // Navigate to /reservation after deletion
          },
          (error) => {
            console.error('Error deleting reservation:', error); // Handle errors
            alert('Failed to delete reservation. Please try again.');
          }
        );
    } else {
      alert('Invalid reservation ID. Cannot delete.');
    }
  }
}
