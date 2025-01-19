import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-dispprofile',
  templateUrl: './dispprofile.component.html',
  styleUrls: ['./dispprofile.component.css']
})
export class DispprofileComponent implements OnInit {
  profile: any = {}; // Object to hold profile data

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchProfile();
  }

  fetchProfile() {
    const token = localStorage.getItem('token'); // Retrieve the token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}` // Add the token to the headers
    });

    this.http.get('http://localhost:8080/clients/profileWithCounts', { headers })
      .subscribe(
        (data: any) => {
          this.profile = data; // Assign data to the profile object
        },
        (error) => {
          console.error('Error fetching profile:', error);
        }
      );
  }
}
