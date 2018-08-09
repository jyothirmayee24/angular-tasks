import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task5subchild',
  templateUrl: './task5subchild.component.html',
  styleUrls: ['./task5subchild.component.css']
})
export class Task5subchildComponent implements OnInit {

subchildmessage="message from subchild"
  constructor() { }

  ngOnInit() {
  }

}
