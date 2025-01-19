import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-tableclient',
  templateUrl: './tableclient.component.html',
  styleUrls: ['./tableclient.component.css']
})
export class TableclientComponent implements OnInit {
  currentPage: number = 0;  // Start with page 0 (internally, but display it as page 1)
  pageSize: number = 5;     // Show 5 elements per page
  totalPages: number = 1;
  clients: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadClients(); // Load the clients when the component initializes
  }

  // Fetch clients from the API
  loadClients(): void {
    const token = localStorage.getItem('tokenG');  // Get the token from localStorage
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get<any>(`http://localhost:8080/clients/allClients?page=${this.currentPage}&size=${this.pageSize}`, { headers })
      .subscribe(response => {
        this.clients = response.clients;
        this.totalPages = response.totalPages;
      });
  }

  // Handle the increment of the page
  incrementPage(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.loadClients();
    }
  }

  // Handle the decrement of the page
  decrementPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadClients();
    }
  }
}
