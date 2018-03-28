import { Component, OnInit, Inject } from '@angular/core';
import { AbstractControl, Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
export function forbiddenUsername(users = []) {
  return (c: AbstractControl) => {
    return (users.includes(c.value)) ? {
      invalidusername: true
    } : null;
  };
}
export function forbiddenEmail(email = []) {
  return (c: AbstractControl) => {
    return (email.includes(c.value)) ? {
      invalidemail: true
    } : null;
  };
}
export function comparePassword(c: AbstractControl) {
  const v = c.value;
  return (v.password === v.confirmPassword) ? null : {
    passwordnotmatch: true
  };
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  ispecial;
  favoriteSeason: string;
  isvalid;
  seasons = [
    'Men',
    'Women',
  ];
  // tslint:disable-next-line:no-unused-expression
emailFormControl = new FormControl('', [
  Validators.required,
  Validators.email,
]);
nameFormControl = new FormControl('', [
  Validators.required
]);
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef <  RegisterComponent >,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', [Validators.required, forbiddenUsername(['dung', 'dat'])]],
      email: ['', [forbiddenEmail(['admin@gmail.com', 'admin1@gmail.com'])]],
      pw: this.fb.group({
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
      }, {
          validator: comparePassword
        })
    });
  }

}
