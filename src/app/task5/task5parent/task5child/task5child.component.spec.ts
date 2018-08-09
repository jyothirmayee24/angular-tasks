import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task5childComponent } from './task5child.component';

describe('Task5childComponent', () => {
  let component: Task5childComponent;
  let fixture: ComponentFixture<Task5childComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task5childComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task5childComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
