import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditEventdateComponent } from './dialog-edit-eventdate.component';

describe('DialogEditEventdateComponent', () => {
  let component: DialogEditEventdateComponent;
  let fixture: ComponentFixture<DialogEditEventdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogEditEventdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogEditEventdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
