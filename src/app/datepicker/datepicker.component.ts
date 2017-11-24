import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {FormControl} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDatepickerInputEvent} from '@angular/material';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
  events: string[] = [];

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }
  startDate = new Date(1990, 0, 1);
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
