import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSheetFormComponent } from './time-sheet-form.component';

describe('TimeSheetFormComponent', () => {
  let component: TimeSheetFormComponent;
  let fixture: ComponentFixture<TimeSheetFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeSheetFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeSheetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
