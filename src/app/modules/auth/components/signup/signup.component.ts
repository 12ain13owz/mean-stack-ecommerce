import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { SignUp, SignUpForm } from '../../models/account.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  authService = inject(AuthService);
  form: SignUpForm;
  isCheck: boolean = false;

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(): void {
    if (this.form.invalid) return;
    if (!this.form.value.check) return;

    const payload: SignUp = {
      name: this.form.value.name,
      email: this.form.value.email,
      password: this.form.value.password,
    };

    this.authService.signup(payload).subscribe((res) => {
      console.log(res);
    });
  }

  initForm(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
      check: new FormControl(false, [Validators.required]),
    });
  }
}
