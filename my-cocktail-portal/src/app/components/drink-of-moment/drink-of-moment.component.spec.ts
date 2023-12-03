import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkOfMomentComponent } from './drink-of-moment.component';

describe('DrinkOfMomentComponent', () => {
  let component: DrinkOfMomentComponent;
  let fixture: ComponentFixture<DrinkOfMomentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrinkOfMomentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrinkOfMomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
