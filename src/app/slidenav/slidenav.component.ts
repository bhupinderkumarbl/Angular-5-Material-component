import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';


@Component({
  selector: 'app-slidenav',
  templateUrl: './slidenav.component.html',
  styleUrls: ['./slidenav.component.scss'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class SlidenavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
