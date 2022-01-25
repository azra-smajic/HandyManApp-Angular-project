import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationDialogYesNoComponent } from './confirmation-dialog-yes-no.component';

describe('ConfirmationDialogYesNoComponent', () => {
  let component: ConfirmationDialogYesNoComponent;
  let fixture: ComponentFixture<ConfirmationDialogYesNoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationDialogYesNoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationDialogYesNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
