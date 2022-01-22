import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPonudaComponent } from './add-ponuda.component';

describe('AddPonudaComponent', () => {
  let component: AddPonudaComponent;
  let fixture: ComponentFixture<AddPonudaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPonudaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPonudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
