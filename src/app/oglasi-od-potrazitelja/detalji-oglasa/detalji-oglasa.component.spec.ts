import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaljiOglasaComponent } from './detalji-oglasa.component';

describe('DetaljiOglasaComponent', () => {
  let component: DetaljiOglasaComponent;
  let fixture: ComponentFixture<DetaljiOglasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaljiOglasaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaljiOglasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
