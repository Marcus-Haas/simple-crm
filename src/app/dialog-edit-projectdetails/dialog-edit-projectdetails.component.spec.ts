import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditProjectdetailsComponent } from './dialog-edit-projectdetails.component';

describe('DialogEditProjectdetailsComponent', () => {
  let component: DialogEditProjectdetailsComponent;
  let fixture: ComponentFixture<DialogEditProjectdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogEditProjectdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogEditProjectdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
