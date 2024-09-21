import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected styleUrls property
})
export class AppComponent implements OnInit {
  title = 'SAT_CSP';
  user: any;
  loggedIn:any;

  constructor(private authService: SocialAuthService, private router: Router) {}

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);
      
      // Redirect to the home page if the user is logged in
      if (this.loggedIn) {
        this.router.navigate(['/service']); // Replace '/home' with your actual home route
      }
    });
  }
}
