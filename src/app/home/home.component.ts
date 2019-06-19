import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  message = "";
  messageText =
    "Click the spacebar to jump And dont hit the trash or you will get tangled and die The Goal is Not to die...";
  showMessage = false;

  constructor() {}

  ngOnInit() {}

  onMessageHidden() {
    this.showMessage = false;
  }

  showMessageNow() {
    this.message = this.messageText;
    this.showMessage = true;
  }
}
