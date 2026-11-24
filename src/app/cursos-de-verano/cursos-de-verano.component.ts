
import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotonWhatsappComponent } from '../complementos/boton-whatsapp/boton-whatsapp.component';

@Component({
  selector: 'app-cursos-de-verano',
  standalone: true,
  imports: [ CommonModule, BotonWhatsappComponent],
  templateUrl: './cursos-de-verano.component.html',
  styleUrl: './cursos-de-verano.component.css'
})
export class CursosDeVeranoComponent {
  images = [
    { src: 'img/cursoverano/01.jpg', alt: 'Imagen 1' },
    { src: 'img/cursoverano/01.jpg', alt: 'Imagen 2' },
    { src: 'img/cursoverano/01.jpg', alt: 'Imagen 2' },
    { src: 'img/cursoverano/01.jpg', alt: 'Imagen 2' },
    { src: 'img/cursoverano/01.jpg', alt: 'Imagen 2' },
    { src: 'img/cursoverano/01.jpg', alt: 'Imagen 2' },
   
  ];
  selectedImage: { src: string; alt: string } | null = null;

  openImage(image: { src: string; alt: string }) {
    this.selectedImage = image;
  }

  closeImage() {
    this.selectedImage = null;
  }
}
