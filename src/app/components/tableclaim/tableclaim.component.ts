import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tableclaim',
  templateUrl: './tableclaim.component.html',
  styleUrls: ['./tableclaim.component.css']
})
export class TableclaimComponent implements OnInit {
  claims: any[] = [];
  currentPage: number = 0;
  totalPages: number = 1;
  pageSize: number = 5;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.fetchClaims();
  }

  fetchClaims(): void {
    const tokenG = localStorage.getItem('tokenG');
    const headers = { Authorization: `Bearer ${tokenG}` };
    const url = `http://localhost:8080/reclamations/allReclamations?page=${this.currentPage}&size=${this.pageSize}`;

    this.http.get<any>(url, { headers }).subscribe(response => {
      this.claims = response.reclamations;
      this.totalPages = response.totalPages;
    });
  }

  incrementPage(): void {
    if (this.currentPage + 1 < this.totalPages) {
      this.currentPage++;
      this.fetchClaims();
    }
  }

  decrementPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.fetchClaims();
    }
  }

  navigateToInfoClaim(idReclamation: number): void {
    this.router.navigate(['/dashboardg/infoclaim'], { queryParams: { id: idReclamation } });
  }
}
