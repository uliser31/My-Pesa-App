import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HolaMundo} from './primercomponente/primer.component';

@NgModule({
  declarations: [
    AppComponent,
    HolaMundo
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
