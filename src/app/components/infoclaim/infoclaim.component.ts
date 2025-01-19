import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-infoclaim',
  templateUrl: './infoclaim.component.html',
  styleUrls: ['./infoclaim.component.css']
})
export class InfoclaimComponent implements OnInit {
  claimData: any = {}; // Store claim data
  isLoading: boolean = true; // Loading indicator
  errorMessage: string | null = null; // Error message

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    // Get ID from the URL
    const id = this.route.snapshot.queryParamMap.get('id');

    if (id) {
      this.fetchClaimData(id);
    } else {
      this.errorMessage = 'Claim ID is missing in the URL.';
      this.isLoading = false;
    }
  }

  fetchClaimData(id: string) {
    const tokenG = localStorage.getItem('tokenG'); // Retrieve token
    const url = `http://localhost:8080/reclamations/reclamationDetails?idReclamation=${id}`;

    this.http.get(url, { headers: { Authorization: `Bearer ${tokenG}` } })
      .subscribe({
        next: (data: any) => {
          this.claimData = data;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error fetching claim data:', error);
          this.errorMessage = 'Failed to fetch claim data.';
          this.isLoading = false;
        }
      });
  }
}
