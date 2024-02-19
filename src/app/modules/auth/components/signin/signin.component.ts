import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LoginForm } from '../../models/account.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
})
export class SigninComponent implements OnInit {
  authService = inject(AuthService);
  form: LoginForm;

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(): void {
    if (this.form.invalid) return;
    this.authService.login(this.form.getRawValue()).subscribe((res) => {});
  }

  initForm(): void {
    this.form = new FormGroup({
      email: new FormControl('test@t.com', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('123456', [Validators.required]),
    });
  }
}
