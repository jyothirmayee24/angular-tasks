import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task6child1',
  templateUrl: './task6child1.component.html',
  styleUrls: ['./task6child1.component.css']
})
export class Task6child1Component implements OnInit {
message="Message from child1"
  constructor() { }

  ngOnInit() {
  }

}
