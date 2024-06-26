import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditBirthdayComponent } from './dialog-edit-birthday.component';

describe('DialogEditBirthdayComponent', () => {
  let component: DialogEditBirthdayComponent;
  let fixture: ComponentFixture<DialogEditBirthdayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogEditBirthdayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogEditBirthdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
