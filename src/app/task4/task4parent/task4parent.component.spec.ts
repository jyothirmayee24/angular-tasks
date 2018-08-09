import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task4parentComponent } from './task4parent.component';

describe('Task4parentComponent', () => {
  let component: Task4parentComponent;
  let fixture: ComponentFixture<Task4parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task4parentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task4parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
