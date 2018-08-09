import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task6child2Component } from './task6child2.component';

describe('Task6child2Component', () => {
  let component: Task6child2Component;
  let fixture: ComponentFixture<Task6child2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task6child2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task6child2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
