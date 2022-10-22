import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A0PopupComponent } from './a0-popup.component';

describe('A0PopupComponent', () => {
  let component: A0PopupComponent;
  let fixture: ComponentFixture<A0PopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A0PopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A0PopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
