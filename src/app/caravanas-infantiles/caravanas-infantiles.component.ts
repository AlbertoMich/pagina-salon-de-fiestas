import { Component } from '@angular/core';
import { BotonWhatsappComponent } from '../complementos/boton-whatsapp/boton-whatsapp.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-caravanas-infantiles',
  standalone: true,
  imports: [BotonWhatsappComponent, CommonModule],
  templateUrl: './caravanas-infantiles.component.html',
  styleUrl: './caravanas-infantiles.component.css'
})
export class CaravanasInfantilesComponent {
  images = [
    { src: 'img/cursoverano/0.jpg', alt: 'Imagen 1' },
    { src: 'img/cursoverano/0.jpg', alt: 'Imagen 2' },
    { src: 'img/cursoverano/0.jpg', alt: 'Imagen 2' },
    { src: 'img/cursoverano/0.jpg', alt: 'Imagen 2' },
    { src: 'img/cursoverano/0.jpg', alt: 'Imagen 2' },
    { src: 'img/cursoverano/0.jpg', alt: 'Imagen 2' },
   
  ];
  selectedImage: { src: string; alt: string } | null = null;

  openImage(image: { src: string; alt: string }) {
    this.selectedImage = image;
  }

  closeImage() {
    this.selectedImage = null;
  }
}
