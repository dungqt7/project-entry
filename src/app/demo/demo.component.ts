import { Component, OnInit, HostListener } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { FormLoginComponent } from '../form-login/form-login.component';
import { RegisterComponent } from '../register/register.component';

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
  block;
  background;
  ul;
  hover;
  hiden = false;
  isvalid;
  send(event) {
    // tslint:disable-next-line:max-line-length
    if (this.nameFormControl.value !== '' && this.emailFormControl.value !== '' && this.emailFormControl.value !== Validators.email && this.titleFormControl.value === '' && this.messageFormControl.value !== '') {
      alert('Gui thong tin lien lac thanh cong');
    }
    this.isvalid = true;
  }

  constructor(public dialog: MatDialog) { }
  open(): void {
    const dialogRef = this.dialog.open(FormLoginComponent, {
      width: '700px',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  open1(): void {
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '700px',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 40) {
      this.hiden = true;
      this.block = true;
      this.background = true;
      this.ul = true;
      this.hover = true;
    } else {
      this.hiden = false;
      this.block = false;
      this.background = false;
      this.ul = false;
      this.hover = false;
    }
  }
  ngOnInit() {
  }

}
