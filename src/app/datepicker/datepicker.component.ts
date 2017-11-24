import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {FormControl} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
  myControl: FormControl = new FormControl();
  options = [
    'January',
    'Fabuary',
    'March'
  ];
  constructor() { }

  ngOnInit() {
  }

}
