import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FanComicsComponent } from './fan-comics.component';

describe('FanComicsComponent', () => {
  let component: FanComicsComponent;
  let fixture: ComponentFixture<FanComicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FanComicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FanComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
