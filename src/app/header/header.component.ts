import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  display = "none";

  constructor() {}

  ngOnInit() {}

  openModalDialog() {
    this.display = "block"; //Set block css
  }

  closeModalDialog() {
    this.display = "none"; //set none css after close dialog
  }
}
