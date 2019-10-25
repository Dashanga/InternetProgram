import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaspisanieComponent } from './raspisanie.component';

describe('RaspisanieComponent', () => {
  let component: RaspisanieComponent;
  let fixture: ComponentFixture<RaspisanieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaspisanieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaspisanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
