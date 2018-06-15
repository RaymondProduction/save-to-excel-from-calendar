import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExcelComponent } from './components/excel/excel.component';
import { FullcalendarComponent } from './components/fullcalendar/fullcalendar.component';
import { FullCalendarModule } from 'ng-fullcalendar';

@NgModule({
  declarations: [
    AppComponent,
    ExcelComponent,
    FullcalendarComponent
  ],
  imports: [
    FullCalendarModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
