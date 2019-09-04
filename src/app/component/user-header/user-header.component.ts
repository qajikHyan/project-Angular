import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {
  activSearch = false;
  dropdownStatus = false;
  lnStatus = false;
  rightMenu = false;
  constructor() { }

  ngOnInit() {
  }

  search() {
    this.activSearch = true;
  }
  dropdown() {
    this.dropdownStatus = !this.dropdownStatus;
  }
  oo() {
    this.rightMenu = !this.rightMenu;
    console.log(this.rightMenu);
  }
}
