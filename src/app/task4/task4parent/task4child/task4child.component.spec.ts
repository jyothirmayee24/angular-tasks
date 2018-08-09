import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task4childComponent } from './task4child.component';

describe('Task4childComponent', () => {
  let component: Task4childComponent;
  let fixture: ComponentFixture<Task4childComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task4childComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task4childComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
