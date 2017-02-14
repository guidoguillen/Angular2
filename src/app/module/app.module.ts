import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from '../component/app.component';
import { HttpModule } from '@angular/http';

@NgModule({
  imports:      [ BrowserModule ,HttpModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
