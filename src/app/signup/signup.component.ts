import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signup: FormGroup;

  constructor() {
    this.signup = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.min(8),
        Validators.max(32),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        // this.validatePass,
      ]),
    });
  }

  // validatePass() {
  //   if (this.password?.value != null && this.confirmPassword?.value != null) {
  //     if (this.password.value === this.confirmPassword.value) {
  //       return { validatePass: true };
  //     }
  //   }
  //   return null;
  // }

  signupSubmit() {
    console.log(this.signup);
  }

  get signupFormControl() {
    return this.signup.controls;
  }

  get fullName() {
    return this.signup.get('fullName');
  }

  get username() {
    return this.signup.get('username');
  }
  get email() {
    return this.signup.get('email');
  }
  get password() {
    return this.signup.get('password');
  }
  get confirmPassword() {
    return this.signup.get('confirmPassword');
  }
  ngOnInit(): void {}
}
