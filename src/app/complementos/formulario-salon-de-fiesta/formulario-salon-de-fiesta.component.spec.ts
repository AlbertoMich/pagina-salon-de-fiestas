import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioSalonDeFiestaComponent } from './formulario-salon-de-fiesta.component';

describe('FormularioSalonDeFiestaComponent', () => {
  let component: FormularioSalonDeFiestaComponent;
  let fixture: ComponentFixture<FormularioSalonDeFiestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioSalonDeFiestaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioSalonDeFiestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
