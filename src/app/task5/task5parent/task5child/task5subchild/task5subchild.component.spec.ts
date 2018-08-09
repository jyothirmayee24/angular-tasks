import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Task5subchildComponent } from './task5subchild.component';

describe('Task5subchildComponent', () => {
  let component: Task5subchildComponent;
  let fixture: ComponentFixture<Task5subchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task5subchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task5subchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
