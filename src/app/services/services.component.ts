import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
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
