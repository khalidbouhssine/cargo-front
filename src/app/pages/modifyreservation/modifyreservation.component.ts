import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-modifyreservation',
  templateUrl: './modifyreservation.component.html',
  styleUrls: ['./modifyreservation.component.css']
})
export class ModifyreservationComponent implements OnInit {
  carDetails: any; // Holds the car details fetched from the backend
  cities: any[] = []; // Holds the list of cities
  selectedCity: number | null = null; // Selected city ID for reservation

  startDate: string | null = null; // Bindable start date
  endDate: string | null = null; // Bindable end date
  totalPrice: number = 0; // Total price of the reservation

  idReservation: number | null = null; // Reservation ID from URL
  idVoiture: number | null = null; // Vehicle ID from URL

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.idReservation = Number(this.route.snapshot.queryParamMap.get('idReservation'));
    this.idVoiture = Number(this.route.snapshot.queryParamMap.get('idVoiture'));
    this.startDate = this.extractDate(this.route.snapshot.queryParamMap.get('startDate'));
    this.endDate = this.extractDate(this.route.snapshot.queryParamMap.get('endDate'));

    const cityName = this.route.snapshot.queryParamMap.get('endCity');
    if (cityName) {
      this.selectedCity = this.getCityIdByName(cityName);
    }

    if (this.idVoiture) {
      this.fetchCarDetails(this.idVoiture); // Fetch car details
    }

    this.fetchCities(); // Fetch all cities
  }

  fetchCarDetails(carId: number): void {
    const token = localStorage.getItem('token');
    const url = `http://localhost:8080/voiture/affichervoiture/${carId}`;

    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });

    this.http.get(url, { headers }).subscribe(
      (data: any) => {
        this.carDetails = data;
        this.calculateTotalPrice();
      },
      (error) => {
        console.error('Error fetching car details:', error);
      }
    );
  }

  fetchCities(): void {
    const token = localStorage.getItem('token');
    const url = 'http://localhost:8080/city/displayallcity';

    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });

    this.http.get(url, { headers }).subscribe(
      (data: any) => {
        this.cities = data;
        const cityName = this.route.snapshot.queryParamMap.get('endCity');
        if (cityName) {
          this.selectedCity = this.getCityIdByName(cityName);
        }
      },
      (error) => {
        console.error('Error fetching cities:', error);
      }
    );
  }

  calculateTotalPrice(): void {
    if (this.startDate && this.endDate && this.carDetails?.pricePerDay) {
      const start = new Date(this.startDate);
      const end = new Date(this.endDate);

      const differenceInTime = end.getTime() - start.getTime();
      const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));

      this.totalPrice = differenceInDays > 0 ? differenceInDays * this.carDetails.pricePerDay : 0;
    } else {
      this.totalPrice = 0;
    }
  }

  updateReservation(): void {
    if (!this.idReservation || !this.idVoiture || !this.startDate || !this.endDate || !this.selectedCity || !this.totalPrice) {
      console.error('Missing required data for updating reservation.');
      return;
    }

    const token = localStorage.getItem('token');
    const url = 'http://localhost:8080/reservations/updateReservation';

    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });

    const body = {
      idReservation: this.idReservation,
      idVoiture: this.idVoiture,
      endCity: this.selectedCity,
      startDate: `${this.startDate}T10:00:00`,
      endDate: `${this.endDate}T10:00:00`,
      amount: this.totalPrice
    };

    this.http.put(url, body, { headers }).subscribe(
      () => {
        console.log('Reservation updated successfully.');
        alert('Reservation updated successfully.');
      },
      (error) => {
        console.error('Error updating reservation:', error);
      }
    );
  }

  deleteReservation(): void {
    if (!this.idReservation) {
      console.error('Reservation ID is required to delete a reservation.');
      return;
    }

    const token = localStorage.getItem('token');
    const url = `http://localhost:8080/reservations/deleteReservation/${this.idReservation}`;

    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });

    this.http.delete(url, { headers }).subscribe(
      () => {
        console.log('Reservation deleted successfully.');
        alert('Reservation deleted successfully.');
        this.router.navigate(['/seereservation']); // Redirect to '/seereservation'
      },
      (error) => {
        console.error('Error deleting reservation:', error);
      }
    );
  }

  private getCityIdByName(name: string): number | null {
    const city = this.cities.find(city => city.nameCity === name);
    return city ? city.id : null;
  }

  private extractDate(dateStr: string | null): string | null {
    if (!dateStr) return null;
    const date = new Date(dateStr);
    return date.toISOString().split('T')[0];
  }
}
