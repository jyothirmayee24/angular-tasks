import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task7parentComponent } from './task7parent/task7parent.component';
import { Task7childComponent } from './task7child/task7child.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Task7parentComponent, Task7childComponent]
})
export class Task7Module { }
