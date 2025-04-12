import { Component } from '@angular/core';
import { AxiosService } from './axios.service';
import { LoginComponent } from "./login/login.component";

@Component({
  selector: 'app-root',
  template: `
    <app-login 
      (onSubmitLoginEvent)="onLogin($event)" 
      (onSubmitRegisterEvent)="onRegister($event)">
    </app-login>
  `,
  imports: [LoginComponent]
})
export class AppComponent {
  
  constructor(private axiosService: AxiosService) {}

  onLogin(credentials: { login: string; password: string }) {
    this.axiosService.request(
      "POST",
      "/api/auth/login", // ✅ Endpoint de login
      credentials
    ).then(response => {
      console.log("Login réussi", response);
    });
  }

  onRegister(details: { 
    firstName: string; 
    lastName: string; 
    login: string; 
    password: string 
  }) {
    this.axiosService.request(
      "POST",
      "/api/auth/register", // 🚨 Correction cruciale ici
      details
    ).then(response => {
      console.log("Inscription réussie", response);
    });
  }
}