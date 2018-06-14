import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExcelComponent } from './components/excel/excel.component';
import { FullcalendarComponent } from './components/fullcalendar/fullcalendar.component';

@NgModule({
  declarations: [
    AppComponent,
    ExcelComponent,
    FullcalendarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
