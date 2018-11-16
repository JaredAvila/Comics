import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFanComponent } from './new-fan.component';

describe('NewFanComponent', () => {
  let component: NewFanComponent;
  let fixture: ComponentFixture<NewFanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
