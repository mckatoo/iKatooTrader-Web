import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoloniexComponent } from './poloniex.component';

describe('PoloniexComponent', () => {
  let component: PoloniexComponent;
  let fixture: ComponentFixture<PoloniexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoloniexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoloniexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
