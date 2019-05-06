import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'csd-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  userObject: object;

  constructor() { }

  ngOnInit() {
  }

  arbitration(inComing: object) {
    this.userObject = inComing;
    console.log(this.userObject);
 }
}
