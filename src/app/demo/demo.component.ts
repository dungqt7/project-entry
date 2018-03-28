import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  nameFormControl = new FormControl('', [
    Validators.required
  ]);
  // tslint:disable-next-line:member-ordering
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  // tslint:disable-next-line:member-ordering
  titleFormControl = new FormControl('', [
    Validators.required,
  ]);
  // tslint:disable-next-line:member-ordering
  messageFormControl = new FormControl('', [
    Validators.required,
  ]);
  isvalid;
  send(event) {
    // tslint:disable-next-line:max-line-length
    if (this.nameFormControl.value !== '' && this.emailFormControl.value !== '' && this.emailFormControl.value !== Validators.email && this.titleFormControl.value === '' && this.messageFormControl.value !== '') {
      alert('Gui thong tin lien lac thanh cong');
    }
    this.isvalid = true;
  }
  constructor() { }
  ngOnInit() {
  }

}
