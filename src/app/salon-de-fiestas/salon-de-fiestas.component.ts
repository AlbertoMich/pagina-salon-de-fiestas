import { Component } from '@angular/core';
import { PieDePaginaComponent } from '../complementos/pie-de-pagina/pie-de-pagina.component';
import { CommonModule } from '@angular/common';
import { FormularioSalonDeFiestaComponent } from "../complementos/formulario-salon-de-fiesta/formulario-salon-de-fiesta.component";
import { CarruselSalonComponent } from '../complementos/carrusel-salon/carrusel-salon.component';

@Component({
  selector: 'app-salon-de-fiestas',
  standalone: true,
  imports: [CommonModule, FormularioSalonDeFiestaComponent, CarruselSalonComponent ],
  templateUrl: './salon-de-fiestas.component.html',
  styleUrl: './salon-de-fiestas.component.css'
})
export class SalonDeFiestasComponent {
  modalAbierto = false;
  imagenSeleccionada: string = '';

  paquetes = [
    { nombre: 'Paquete 1', imagen: 'img/salon/renta_salon.jpg' },
    { nombre: 'Paquete 2', imagen: 'img/salon/Paquete_Galactico.jpg' },
    { nombre: 'Paquete 3', imagen: 'img/salon/Paquete_Estelar.jpg' },
  ];

  abrirModal(imagen: string) {
    this.imagenSeleccionada = imagen;
    this.modalAbierto = true;
  }

  cerrarModal() {
    this.modalAbierto = false;
  }

  servicios = [
    { imagen: 'img/salon/Servicios_Adicionales_01.jpg' },
    { imagen: 'img/salon/Servicios_Adicionales_02.jpg' }
    
];

}
