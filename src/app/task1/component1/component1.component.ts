import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
  // template:`<button (click)="onClick()">Print</button>{{text}}` 
})
export class Component1Component  {
  title="Task 1"
private text;
  // constructor() { }
  printText(text){
    console.log(text);
  }


}
