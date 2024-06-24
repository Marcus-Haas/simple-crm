import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRecycleUserComponent } from './dialog-recycle-user.component';

describe('DialogRecycleUserComponent', () => {
  let component: DialogRecycleUserComponent;
  let fixture: ComponentFixture<DialogRecycleUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogRecycleUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogRecycleUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
