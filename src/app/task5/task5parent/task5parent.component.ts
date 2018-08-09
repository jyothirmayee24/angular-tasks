import { Component,  ViewChild, AfterViewInit } from '@angular/core';
import { Task5childComponent } from './task5child/task5child.component';

@Component({
  selector: 'app-task5parent',
  templateUrl: './task5parent.component.html',
  styleUrls: ['./task5parent.component.css']
})
export class Task5parentComponent implements AfterViewInit {
@ViewChild(Task5childComponent) child;
message:String;
  constructor() { }

 ngAfterViewInit() {
    this.message=this.child.childmessage;
  }

}
