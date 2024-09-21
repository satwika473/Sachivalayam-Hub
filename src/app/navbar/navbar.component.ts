import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {
  constructor(private router: Router) {}

  logout(): void {
    if (confirm('Are you sure you want to logout?')) {
      // Add your logout logic here, e.g., clearing localStorage or sessionStorage
      // localStorage.clear();
      // sessionStorage.clear();
      
      this.router.navigate(['/login']);
    }
  }
/*
  isMenuOpen = false;
  isProfileMenuOpen = false;
  lastScrollTop = 0;

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
  }*/
}