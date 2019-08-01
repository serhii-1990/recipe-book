import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-main-header",
  templateUrl: "./main-header.component.html",
  styleUrls: ["./main-header.component.css"]
})
export class MainHeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();

  constructor() {}

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
  ngOnInit() {}
}
