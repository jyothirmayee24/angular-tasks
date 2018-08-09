import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task7childComponent } from './task7child.component';

describe('Task7childComponent', () => {
  let component: Task7childComponent;
  let fixture: ComponentFixture<Task7childComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task7childComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task7childComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
