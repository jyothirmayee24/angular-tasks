import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task6child1Component } from './task6child1.component';

describe('Task6child1Component', () => {
  let component: Task6child1Component;
  let fixture: ComponentFixture<Task6child1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task6child1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task6child1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
