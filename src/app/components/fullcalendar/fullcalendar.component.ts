import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'fullcalendar';

@Component({
  selector: 'app-fullcalendar',
  templateUrl: './fullcalendar.component.html',
  styleUrls: ['./fullcalendar.component.css']
})
export class FullcalendarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#calendar').fullCalendar({
      // put your options and callbacks here
    });

  }

}
