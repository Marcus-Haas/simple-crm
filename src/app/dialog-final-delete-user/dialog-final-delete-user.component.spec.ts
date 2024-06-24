import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFinalDeleteUserComponent } from './dialog-final-delete-user.component';

describe('DialogFinalDeleteUserComponent', () => {
  let component: DialogFinalDeleteUserComponent;
  let fixture: ComponentFixture<DialogFinalDeleteUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogFinalDeleteUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogFinalDeleteUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
