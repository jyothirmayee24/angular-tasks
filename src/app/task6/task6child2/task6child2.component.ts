import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task6child2',
  templateUrl: './task6child2.component.html',
  styleUrls: ['./task6child2.component.css']
})
export class Task6child2Component implements OnInit {
@Input() child2message:String;
  constructor() { }

  ngOnInit() {
  }

}
