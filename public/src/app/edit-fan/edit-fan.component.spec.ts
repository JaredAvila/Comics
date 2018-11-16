import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFanComponent } from './edit-fan.component';

describe('EditFanComponent', () => {
  let component: EditFanComponent;
  let fixture: ComponentFixture<EditFanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
