import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { A0TopBarComponent } from './a0-top-bar/a0-top-bar.component';
import { A0PopupComponent } from './a0-popup/a0-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    A0TopBarComponent,
    A0PopupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
