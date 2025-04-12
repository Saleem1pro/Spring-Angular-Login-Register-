import { Component } from '@angular/core';
import { DashboardComponent } from "../dashboard/dashboard.component";
import { LoginComponent } from "../login/login.component";
import { AxiosService } from '../axios.service';
@Component({
  selector: 'app-content',
  imports: [LoginComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  constructor(private axiosService: AxiosService){}
  onLogin(input: any): void{
    this.axiosService.request(
      "POST",
      "/login",
      {
        login: input.login,
        password: input.password
      }
    );
  };
  onRegister(input:any): void{
    this.axiosService.request(
      "POST",
      "/register",
      {
        firstName:input.firstName,
        lastName:input.lastName,
        login:input.login,
        password:input.password
      }
    );
  }

}
