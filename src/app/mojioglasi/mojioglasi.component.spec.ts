import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MojioglasiComponent } from './mojioglasi.component';

describe('MojioglasiComponent', () => {
  let component: MojioglasiComponent;
  let fixture: ComponentFixture<MojioglasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MojioglasiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MojioglasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
