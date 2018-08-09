import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Task4childComponent } from './task4child/task4child.component';

@Component({
  selector: 'app-task4parent',
  templateUrl: './task4parent.component.html',
  styleUrls: ['./task4parent.component.css']
})
export class Task4parentComponent implements AfterViewInit {
@ViewChild(Task4childComponent) child;
parenttext:string
  constructor() { }

  ngAfterViewInit() {
this.parenttext=this.child.childtext;
  }

}