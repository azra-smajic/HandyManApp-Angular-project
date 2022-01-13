import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoviangazmaniComponent } from './noviangazmani.component';

describe('NoviangazmaniComponent', () => {
  let component: NoviangazmaniComponent;
  let fixture: ComponentFixture<NoviangazmaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoviangazmaniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoviangazmaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
