import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  constructor(public authServise: AuthService) {}

  ngOnInit(): void {}

  loginsubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.authServise.loginuser(form.value.email, form.value.password);
  }
}
