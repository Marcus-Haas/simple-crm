import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateEventComponent } from './dialog-create-event.component';

describe('DialogCreateEventComponent', () => {
  let component: DialogCreateEventComponent;
  let fixture: ComponentFixture<DialogCreateEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogCreateEventComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogCreateEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
