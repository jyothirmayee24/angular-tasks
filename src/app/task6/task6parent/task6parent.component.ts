import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Task6child1Component } from '../task6child1/task6child1.component';

@Component({
  selector: 'app-task6parent',
  templateUrl: './task6parent.component.html',
  styleUrls: ['./task6parent.component.css']
})
export class Task6parentComponent implements AfterViewInit {
@ViewChild(Task6child1Component) child1
parentmessage:String;
  constructor() { }

  ngAfterViewInit() {
this.parentmessage=this.child1.message;
  }

}
