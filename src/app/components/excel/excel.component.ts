import { Component, OnInit } from '@angular/core';
import zipcelx from 'zipcelx';

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.css']
})
export class ExcelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const config = {
      filename: 'general-ledger-Q1',
      sheet: {
        data: [
          [{
            value: 'Raymond',
            type: 'string',
            background: 'red',
          }, {
            value: 1000,
            type: 'number'
          }]
        ]
      }
    };
    // zipcelx(config);
  }

}
