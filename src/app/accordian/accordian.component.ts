import { Component, OnInit } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss']
})
export class AccordianComponent implements OnInit {
  panelOpenState: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
