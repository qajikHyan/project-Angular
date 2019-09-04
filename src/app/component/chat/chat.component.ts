import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  menuActive = false;
  notMessanger = true;
  src = '';
  userName2 = '';
  constructor() { }

  ngOnInit() {
  }
  openChat(event) {
    if (event.target.src || event.target.title) {
      this.notMessanger = false;
      this.src = event.target.src;
      this.userName2 = event.target.title;
      this.menuActive = true;
    }
  }
}
