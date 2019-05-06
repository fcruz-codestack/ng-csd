import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../model/student';

@Component({
  selector: 'csd-user-info-display',
  templateUrl: './user-info-display.component.html',
  styleUrls: ['./user-info-display.component.css']
})
export class UserInfoDisplayComponent implements OnInit {

  @Input() userInput: Student;
  constructor() {
  }

  ngOnInit() {
  }

  test() {
    console.log(this.userInput.first);
  }
}
