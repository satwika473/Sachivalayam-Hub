interface Volunteer {
  name: string;
  role:string;
  email: string;
  phoneno: string;
}
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  registrations: any[] = [];
  volunteerDetails: Volunteer[] = []; // Array to hold volunteer details
  showVolunteerDetails = false;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Initialize the registrations array or other necessary data
  }

  getRegistrations() {
    this.http.get<any[]>('http://localhost:8081/user/registration').subscribe(
      data => {
        this.registrations = data;
      },
      error => {
        console.error('Error fetching registration:', error);
      }
    );
    this.showVolunteerDetails = false;
  }
  getDetails() {
    // Logic to get volunteer details
    this.volunteerDetails = [
      // Example data, replace with actual data fetching logic
      { name: 'Anjali',role:'Ward Education & Data Processing Secretary', email: 'anjali123@gmail.com', phoneno: '7672066509' },
      { name: 'Sujatha',role:'Ward Amenities Secretary (Grade-II)', email: 'sujatha756@gmail.com', phoneno: '9493443786' },
    ];
    
    this.showVolunteerDetails = true; // Show the volunteer details table
  }
  updateRegistration(registration: any) {
    if(confirm('confirm updating')){
    this.http.patch(`http://localhost:8080/user/registration/${registration.username}`, registration).subscribe(
      response => {
        console.log('Registration updated:', response);
        // Optionally, you can fetch the updated list of registrations here
        this.getRegistrations();
      },
      error => {
        console.error('Error updating registration:', error);
      }
    );
  }
  }

  deleteRegistration(username: string) {
    if(confirm('confirm to delete')){
    this.http.delete(`http://localhost:8080/user/registration/${username}`).subscribe(
      response => {
        console.log('Registration deleted:', response);
        // Remove the deleted registration from the array
        this.registrations = this.registrations.filter(r => r.username !== username);
      },
      error => {
        console.error('Error deleting registration:', error);
      }
    );
  }
}
}
