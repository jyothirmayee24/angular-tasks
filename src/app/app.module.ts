import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Component1Component } from './task1/component1/component1.component';
import { Component2Component } from './task2/component2/component2.component';
import { ParentComponent } from './task3/parent/parent.component';
import { ChildComponent } from './task3/parent/child/child.component';
import { Task4parentComponent } from './task4/task4parent/task4parent.component';
import { Task4childComponent } from './task4/task4parent/task4child/task4child.component';
import { Task5parentComponent } from './task5/task5parent/task5parent.component';
import { Task5childComponent } from './task5/task5parent/task5child/task5child.component';
import { Task5subchildComponent } from './task5/task5parent/task5child/task5subchild/task5subchild.component';
import { Task6parentComponent } from './task6/task6parent/task6parent.component';
import { Task6child1Component } from './task6/task6child1/task6child1.component';
import { Task6child2Component } from './task6/task6child2/task6child2.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    ParentComponent,
    ChildComponent,
    Task4parentComponent,
    Task4childComponent,
    Task5parentComponent,
    Task5childComponent,
    Task5subchildComponent,
    Task6parentComponent,
    Task6child1Component,
    Task6child2Component

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
