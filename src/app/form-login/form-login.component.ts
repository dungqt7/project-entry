import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  constructor() { }
  usernameFormControl = new FormControl('', [
    Validators.required,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);
  login(event) {
    if (this.usernameFormControl.value !== '' && this.passwordFormControl.value !== '') {
      alert('Dang nhap thanh cong');
    }
  }
  ngOnInit() {
  }

}
