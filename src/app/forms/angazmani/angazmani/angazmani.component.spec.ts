import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngazmaniComponent } from './angazmani.component';

describe('AngazmaniComponent', () => {
  let component: AngazmaniComponent;
  let fixture: ComponentFixture<AngazmaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngazmaniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngazmaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
