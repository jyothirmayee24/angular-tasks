import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task6parentComponent } from './task6parent/task6parent.component';
import { Task6child1Component } from './task6child1/task6child1.component';
import { Task6child2Component } from './task6child2/task6child2.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Task6parentComponent, Task6child1Component, Task6child2Component],
  exports:[Task6parentComponent, Task6child1Component, Task6child2Component]
})
export class Task6Module { }
