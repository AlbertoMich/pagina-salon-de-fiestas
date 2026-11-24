import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselSalonComponent } from './carrusel-salon.component';

describe('CarruselSalonComponent', () => {
  let component: CarruselSalonComponent;
  let fixture: ComponentFixture<CarruselSalonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarruselSalonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarruselSalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
