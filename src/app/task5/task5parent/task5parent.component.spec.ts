import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task5parentComponent } from './task5parent.component';

describe('Task5parentComponent', () => {
  let component: Task5parentComponent;
  let fixture: ComponentFixture<Task5parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task5parentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task5parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
