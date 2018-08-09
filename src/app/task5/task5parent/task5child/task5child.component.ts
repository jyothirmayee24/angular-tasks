import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Task5subchildComponent } from './task5subchild/task5subchild.component';

@Component({
  selector: 'app-task5child',
  templateUrl: './task5child.component.html',
  styleUrls: ['./task5child.component.css']
})
export class Task5childComponent implements AfterViewInit {
@ViewChild(Task5subchildComponent) subchild;
  childmessage:String;

  constructor() { }

  ngAfterViewInit() {
  this.childmessage=this.subchild.subchildmessage;
  }
}
