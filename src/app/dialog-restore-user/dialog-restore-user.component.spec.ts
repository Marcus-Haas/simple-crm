import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRestoreUserComponent } from './dialog-restore-user.component';

describe('DialogRestoreUserComponent', () => {
  let component: DialogRestoreUserComponent;
  let fixture: ComponentFixture<DialogRestoreUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogRestoreUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogRestoreUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
