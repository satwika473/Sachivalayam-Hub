import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}

  logout(): void {
    if (confirm('Are you sure you want to logout?')) {
      // Add your logout logic here, e.g., clearing localStorage or sessionStorage
      // localStorage.clear();
      // sessionStorage.clear();
      
      this.router.navigate(['/login']);
    }
}
}
