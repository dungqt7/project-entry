import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormLoginComponent } from './form-login/form-login.component';
import { HeroesComponent } from './heroes/heroes.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    FormLoginComponent,
    HeroesComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  entryComponents: [ FormLoginComponent, RegisterComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
