import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformWithPipeComponent } from './transform-with-pipe.component';

describe('TransformWithPipeComponent', () => {
  let component: TransformWithPipeComponent;
  let fixture: ComponentFixture<TransformWithPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransformWithPipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformWithPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
