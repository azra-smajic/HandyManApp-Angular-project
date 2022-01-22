import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlanjePonudeComponent } from './slanje-ponude.component';

describe('SlanjePonudeComponent', () => {
  let component: SlanjePonudeComponent;
  let fixture: ComponentFixture<SlanjePonudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlanjePonudeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlanjePonudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
