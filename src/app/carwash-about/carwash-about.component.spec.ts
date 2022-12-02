import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarwashAboutComponent } from './carwash-about.component';

describe('CarwashAboutComponent', () => {
  let component: CarwashAboutComponent;
  let fixture: ComponentFixture<CarwashAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarwashAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarwashAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
