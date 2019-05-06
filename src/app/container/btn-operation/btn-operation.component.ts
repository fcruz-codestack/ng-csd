import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'csd-btn-operation',
  templateUrl: './btn-operation.component.html',
  styleUrls: ['./btn-operation.component.css']
})
export class BtnOperationComponent implements OnInit {

  constructor() { }

  @Input() btnLabel: string;

  ngOnInit() {
  }

}
