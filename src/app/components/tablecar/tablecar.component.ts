import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-tablecar',
  templateUrl: './tablecar.component.html',
  styleUrls: ['./tablecar.component.css']
})
export class TablecarComponent implements OnInit {
  currentPage: number = 0;
  pageSize: number = 5;
  totalPages: number = 1;
  cars: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadCars();
  }

  // Fetch cars from the API
  loadCars(): void {
    const token = localStorage.getItem('tokenG');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get<any>(`http://localhost:8080/voiture/all?page=${this.currentPage}&size=${this.pageSize}`, { headers })
      .subscribe(response => {
        this.cars = response.voitures;
        this.totalPages = response.totalPages;
      });
  }

  // Handle the increment of the page
  incrementPage(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.loadCars();
    }
  }

  // Handle the decrement of the page
  decrementPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadCars();
    }
  }

  // Delete a car
  deleteCar(idVoiture: number): void {
    const token = localStorage.getItem('tokenG');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.delete(`http://localhost:8080/voiture/delete/${idVoiture}`, { headers })
      .subscribe(() => {
        // Reload cars after deletion
        this.loadCars();
      });
  }
}
