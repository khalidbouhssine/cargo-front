import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-resultreservation',
  templateUrl: './resultreservation.component.html',
  styleUrls: ['./resultreservation.component.css']
})
export class ResultreservationComponent implements OnInit {
  
  openDatePicker(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    inputElement.showPicker(); // Opens the date picker
  }

  availableCars: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    // Check query parameters
    this.route.queryParams.subscribe(params => {
      const startDate = params['startDate'];
      const endDate = params['endDate'];
      const city = params['city'];

      if (!startDate || !endDate || !city) {
        // If no params, redirect to /home
        this.router.navigate(['/home']);
      } else {
        // Append time to the date strings (e.g., "T00:00" for midnight)
        const formattedStartDate = `${startDate}T00:00`;
        const formattedEndDate = `${endDate}T23:59`;

        // Get token from localStorage
        const token = localStorage.getItem('token');
        
        // Create headers with the token
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`
        });

        const body = {
          startDate: formattedStartDate,
          endDate: formattedEndDate,
          cityId: city
        };

        // Make POST request to get available cars with Authorization header
        this.http.post('http://localhost:8080/reservations/available-cars', body, { headers })
          .subscribe(
            (data: any) => {
              this.availableCars = data;  // Save the response data (list of cars)
            },
            error => {
              console.error('Error fetching available cars:', error);
            }
          );
      }
    });
  }

  navigateToPayment(idCar: number): void {
    // Retrieve current query parameters from the route
    const startDate = this.route.snapshot.queryParams['startDate'];
    const endDate = this.route.snapshot.queryParams['endDate'];
    const cityId = this.route.snapshot.queryParams['city'];
  
    if (startDate && endDate && cityId) {
      // Navigate to /payment with the required parameters
      this.router.navigate(['/payment'], {
        queryParams: {
          idstartcity: cityId,
          startdate: startDate,
          enddate: endDate,
          idofcar: idCar
        }
      });
    } else {
      console.error('Missing query parameters for payment navigation.');
    }
  }
  
}
