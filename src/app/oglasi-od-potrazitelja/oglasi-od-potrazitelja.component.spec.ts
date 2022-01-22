import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OglasiOdPotraziteljaComponent } from './oglasi-od-potrazitelja.component';

describe('OglasiOdPotraziteljaComponent', () => {
  let component: OglasiOdPotraziteljaComponent;
  let fixture: ComponentFixture<OglasiOdPotraziteljaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OglasiOdPotraziteljaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OglasiOdPotraziteljaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
