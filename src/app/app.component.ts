import { Component } from '@angular/core';
import { fadeAnimation } from './animations';
import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation]
})
export class AppComponent {
  ngOnInit() {
    AOS.init({
      duration: 1000, // values from 0 to 3000, with step 50ms
      anchorPlacement: 'to-top',
    });
  }
}
