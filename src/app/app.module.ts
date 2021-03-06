import { GeneralComponent } from './general/general.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTreeModule, MatIconModule, MatButtonModule } from '@angular/material';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent , GeneralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTreeModule ,
    MatIconModule, 
    MatButtonModule,
    CommonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
