import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A0TopBarComponent } from './a0-top-bar.component';

describe('A0TopBarComponent', () => {
  let component: A0TopBarComponent;
  let fixture: ComponentFixture<A0TopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A0TopBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A0TopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
