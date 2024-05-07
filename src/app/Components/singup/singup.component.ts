import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-singup',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.css',
})
export class SingupComponent {
  constructor(private authService: AuthService) {}

  register(regForm: NgForm) {
    console.log(regForm.value);
    this.authService.registerUser(regForm.value.email, regForm.value.password);
  }
}
