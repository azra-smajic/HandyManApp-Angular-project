import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngazmanComponent } from './angazman.component';

describe('AngazmanComponent', () => {
  let component: AngazmanComponent;
  let fixture: ComponentFixture<AngazmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngazmanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngazmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
