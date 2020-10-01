import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmolpyeeModalComponent } from './add-emolpyee-modal.component';

describe('AddEmolpyeeModalComponent', () => {
  let component: AddEmolpyeeModalComponent;
  let fixture: ComponentFixture<AddEmolpyeeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmolpyeeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmolpyeeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
