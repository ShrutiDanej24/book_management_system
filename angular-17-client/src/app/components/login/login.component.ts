import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loginFailed: boolean = false;

  constructor(private router: Router) {}

  login(): void {
    // For simplicity, hardcoding the credentials. In a real-world app, this should be done securely.
    const validEmail = 'admin@gmail.com';
    const validPassword = 'admin123';

    if (this.email === validEmail && this.password === validPassword) {
      // Redirect to a different page on successful login.
      this.router.navigate(['/tutorials']);
    } else {
      this.loginFailed = true;
    }
  }
}
