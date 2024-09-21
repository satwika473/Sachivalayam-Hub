import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BusinessesComponent } from './businesses/businesses.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SettingsComponent } from './settings/settings.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { RegisterComponent } from './register/register.component';
import { UserService } from './user.service';  // Import UserService
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LogoutComponent } from './logout/logout.component';
import { ServicesComponent } from './services/services.component';
import { MservicesComponent } from './mservices/mservices.component';
import { DepartmentComponent } from './department/department.component';
import { ResourcesComponent } from './resources/resources.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { NewsComponent } from './news/news.component';
import { TeamComponent } from './team/team.component';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from '@abacritt/angularx-social-login';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BusinessesComponent,
    ContactComponent,
    AboutComponent,
    LoginComponent,
    ProfileComponent,
    SearchResultsComponent,
    SettingsComponent,
    NotFoundComponent,
    ImageSliderComponent,
    RegisterComponent,
    LogoutComponent,
    ServicesComponent,
    MservicesComponent,
    DepartmentComponent,
    ResourcesComponent,
    VolunteerComponent,
    NewsComponent,
    TeamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SocialLoginModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        lang: 'en',
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '400788154128-7660g3tctc2jljn6jd51gid66tf7l8j3.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('clientId')
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    },
    UserService,  // Provide UserService
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
