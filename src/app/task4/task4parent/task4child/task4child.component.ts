import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task4child',
  templateUrl: './task4child.component.html',
  styleUrls: ['./task4child.component.css']
})
export class Task4childComponent implements OnInit {
private childtext="message from child";
  constructor() { }

  ngOnInit() {
  }

}
