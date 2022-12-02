import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarwashProductsComponent } from './carwash-products.component';

describe('CarwashProductsComponent', () => {
  let component: CarwashProductsComponent;
  let fixture: ComponentFixture<CarwashProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarwashProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarwashProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
