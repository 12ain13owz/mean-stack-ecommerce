import { Form, FormControl, FormGroup } from '@angular/forms';

export interface Login {
  email: string;
  password: string;
}

export interface LoginForm
  extends FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
  }> {}

export interface SignUp {
  name: string;
  email: string;
  password: string;
}

export interface SignUpForm
  extends FormGroup<{
    name: FormControl<string>;
    email: FormControl<string>;
    password: FormControl<string>;
    check: FormControl<boolean>;
  }> {}

export interface User {
  id: number;
}

export interface ResponseAuth {
  success: boolean;
  token: string;
}
