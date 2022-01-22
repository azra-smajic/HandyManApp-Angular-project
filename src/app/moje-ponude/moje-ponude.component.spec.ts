import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MojePonudeComponent } from './moje-ponude.component';

describe('MojePonudeComponent', () => {
  let component: MojePonudeComponent;
  let fixture: ComponentFixture<MojePonudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MojePonudeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MojePonudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
