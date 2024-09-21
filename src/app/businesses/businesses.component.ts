import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';  // Import Location for history manipulation

@Component({
  selector: 'app-businesses',
  templateUrl: './businesses.component.html',
  styleUrls: ['./businesses.component.css']
})
export class BusinessesComponent implements OnInit {
  isMenuOpen = false;
  isProfileMenuOpen = false;
  lastScrollTop = 0;

  constructor(private router: Router, private location: Location) {}  // Inject Location service

  logout(): void {
    if (confirm('Are you sure you want to logout?')) {
      // Clear any stored user data (e.g., tokens or credentials)
      localStorage.clear();
      sessionStorage.clear();

      // Redirect to the login page
      this.router.navigate(['/login']).then(() => {
        // Prevent going back to the home page by clearing history state
        this.location.replaceState('/login');  // Clear the browser's history stack
      });
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleProfileMenu() {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }

  ngOnInit() {
    // Ensure the initial scroll position is set
    this.lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = document.querySelector('.navbar') as HTMLElement;
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > this.lastScrollTop) {
      navbar.classList.add('navbar-hidden');
    } else {
      navbar.classList.remove('navbar-hidden');
    }
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
  }
}
