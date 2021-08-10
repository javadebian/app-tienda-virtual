import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCientComponent } from './admin-cient.component';

describe('AdminCientComponent', () => {
  let component: AdminCientComponent;
  let fixture: ComponentFixture<AdminCientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
