import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployCostFormComponent } from './employ-cost-form.component';

describe('EmployCostFormComponent', () => {
  let component: EmployCostFormComponent;
  let fixture: ComponentFixture<EmployCostFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployCostFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployCostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
