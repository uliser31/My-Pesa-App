import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HolaMundo} from './primercomponente/primer.component';
import { UserComponent } from './user/user.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    HolaMundo,
    UserComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule
  ],
   
  bootstrap: [AppComponent]
})
export class AppModule { }
