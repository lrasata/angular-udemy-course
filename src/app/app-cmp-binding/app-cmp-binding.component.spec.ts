import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCmpBindingComponent } from './app-cmp-binding.component';

describe('AppCmpBindingComponent', () => {
  let component: AppCmpBindingComponent;
  let fixture: ComponentFixture<AppCmpBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppCmpBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCmpBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
