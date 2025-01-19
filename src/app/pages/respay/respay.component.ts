import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-respay',
  templateUrl: './respay.component.html',
  styleUrls: ['./respay.component.css']
})
export class RespayComponent implements OnInit {
  cities: any[] = []; // To store the list of cities
  carDetails: any = null; // Holds the car details
  totalDays: number = 0; // Number of rental days
  totalPrice: number = 0; // Total price based on carDetails.pricePerDay
  months: number[] = []; // Array to store months (1 to 12)
  years: number[] = []; // Array to store the next 10 years
  selectedCity: string = ''; // Declare `selectedCity` property
  selectedCardType: string = ''; // To store the selected card type
  cardNumber: string = '';

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.fetchCities();
    this.initializeMonthsAndYears(); // Populate months and years

    // Extract the parameters from the URL
    const carId = this.route.snapshot.queryParamMap.get('idofcar');
    const startDateParam = this.route.snapshot.queryParamMap.get('startdate');
    const endDateParam = this.route.snapshot.queryParamMap.get('enddate');

    if (carId) {
      this.fetchCarDetails(carId);
    }

    if (startDateParam && endDateParam) {
      const startDate = new Date(startDateParam);
      const endDate = new Date(endDateParam);

      // Calculate the difference in days
      this.totalDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24));
    }
  }

  // Initialize months and years
  initializeMonthsAndYears(): void {
    this.months = Array.from({ length: 12 }, (_, i) => i + 1); // Generate months 1-12
    const currentYear = new Date().getFullYear();
    this.years = Array.from({ length: 10 }, (_, i) => currentYear + i); // Generate the next 10 years
  }

  // Fetch car details from the backend
  fetchCarDetails(carId: string): void {
    const token = localStorage.getItem('token'); // Retrieve the token from localStorage
    const url = `http://localhost:8080/voiture/affichervoiture/${carId}`;

    // Set the Authorization header with the token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    this.http.get(url, { headers }).subscribe(
      (data: any) => {
        this.carDetails = data;

        // Calculate the total price once car details are fetched
        if (this.totalDays && this.carDetails?.pricePerDay) {
          this.totalPrice = this.totalDays * this.carDetails.pricePerDay;
        }
      },
      (error) => {
        console.error('Error fetching car details:', error);
      }
    );
  }

  // Fetch cities
  fetchCities(): void {
    const url = 'http://localhost:8080/city/displayallcity';
    const token = localStorage.getItem('token'); // Retrieve the token from localStorage
    
    // Add the token to the headers
    const headers = {
      Authorization: `Bearer ${token}`,
    };
  
    this.http.get<any[]>(url, { headers }).subscribe({
      next: (response) => {
        this.cities = response; // Assign fetched cities to the `cities` array
      },
      error: (err) => {
        console.error('Error fetching cities:', err);
      }
    });
  }

  onCardNumberInput(event: any) {
    // Only allow numeric input
    const inputValue = event.target.value.replace(/\D/g, ''); // Remove non-digit characters
    this.cardNumber = inputValue; // Store only the numeric value
  }

  paymentNow(): void {
    // Retrieve the query parameters
    const idStartCity = this.route.snapshot.queryParamMap.get('idstartcity');
    const startDateParam = this.route.snapshot.queryParamMap.get('startdate');
    const endDateParam = this.route.snapshot.queryParamMap.get('enddate');
    const idOfCar = this.route.snapshot.queryParamMap.get('idofcar');
    const token = localStorage.getItem('token');

    const formattedStartDate = startDateParam ? `${startDateParam}T09:00:00` : null;
    const formattedEndDate = endDateParam ? `${endDateParam}T18:00:00` : null;

    const payload = {
      idVoiture: Number(idOfCar),
      startCity: Number(idStartCity),
      endCity: Number(this.selectedCity),
      startDate: formattedStartDate,
      endDate: formattedEndDate,
      amount: this.totalPrice,
      payementMethod: this.selectedCardType,
    };

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    this.http.post('http://localhost:8080/reservations/addReservationAndPayment', payload, { headers }).subscribe({
      next: (response) => {
        console.log('Payment successful:', response);
        alert('Payment successful');
      },
      error: (error) => {
        console.error('Payment failed:', error);
        alert('Payment failed');
      },
    });
  }
}
