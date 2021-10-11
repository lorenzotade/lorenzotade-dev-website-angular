import { Component } from '@angular/core';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  valid: boolean = true;

  constructor(public authService: AuthService) { }

  logIn(formData: any) {
    this.valid = false;
    const email = formData.email;
    const password = formData.password;
    if (email && password) {
      this.valid = true;
      this.authService.login(email, password);
    }
  }

}
