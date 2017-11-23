import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
  myControl: FormControl = new FormControl();
  options = [
    'One',
    'Two',
    'Three'
  ];
  constructor() { }

  ngOnInit() {
  }

}
