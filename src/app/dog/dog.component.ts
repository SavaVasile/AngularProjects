import {Component, Input, OnInit} from '@angular/core';
import {showWarningOnce} from "tslint/lib/error";

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']

})
export class DogComponent implements OnInit {
  isActive = true;

  @Input()items;

  title="Hide";
  handleClick(event){
    console.log("show/hide me");
    this.isActive =!this.isActive;
    if (this.isActive){
      this.title="Hide";
    }else {
      this.title = "Show";
    }
  }
  constructor() { }

  ngOnInit() {
    console.log('message');
  }

}
