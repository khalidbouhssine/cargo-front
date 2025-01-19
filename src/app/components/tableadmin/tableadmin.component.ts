import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-tableadmin',
  templateUrl: './tableadmin.component.html',
  styleUrls: ['./tableadmin.component.css']
})
export class TableadminComponent implements OnInit {
  currentPage: number = 0;
  totalPages: number = 1;
  admins: any[] = [];
  token: string | null = localStorage.getItem('tokenG'); // Retrieve token

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchAdmins(this.currentPage);
  }

  fetchAdmins(page: number): void {
    if (!this.token) {
      console.error('Token is missing!');
      return;
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    const url = `http://localhost:8080/adminLocal/displayall?page=${page}&size=5`;

    this.http.get<any>(url, { headers }).subscribe(
      (response) => {
        this.admins = response.adminsLocaux;
        this.currentPage = response.currentPage;
        this.totalPages = response.totalPages;
      },
      (error) => {
        console.error('Error fetching admins:', error);
      }
    );
  }

  incrementPage(): void {
    if (this.currentPage + 1 < this.totalPages) {
      this.currentPage++;
      this.fetchAdmins(this.currentPage);
    }
  }

  decrementPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.fetchAdmins(this.currentPage);
    }
  }

  deleteAdmin(adminId: number): void {
    if (!this.token) {
      console.error('Token is missing!');
      return;
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    const url = `http://localhost:8080/adminLocal/delete/${adminId}`;

    this.http.delete(url, { headers }).subscribe(
      () => {
        console.log(`Admin with ID ${adminId} deleted successfully.`);
        // Refresh the admin list after deletion
        this.fetchAdmins(this.currentPage);
      },
      (error) => {
        console.error('Error deleting admin:', error);
      }
    );
  }
}
