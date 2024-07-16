import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditRevenueComponent } from './dialog-edit-revenue.component';

describe('DialogEditRevenueComponent', () => {
  let component: DialogEditRevenueComponent;
  let fixture: ComponentFixture<DialogEditRevenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogEditRevenueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogEditRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
