import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task5parentComponent } from './task5parent/task5parent.component';
import { Task5childComponent } from './task5parent/task5child/task5child.component';
import { Task5subchildComponent } from './task5parent/task5child/task5subchild/task5subchild.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Task5parentComponent,Task5childComponent,Task5subchildComponent],
  exports:[Task5parentComponent,Task5childComponent,Task5subchildComponent]
})
export class Task5Module { }
