import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { BotonWhatsappComponent } from '../complementos/boton-whatsapp/boton-whatsapp.component';
@Component({
  selector: 'app-quienes-somos',
  standalone: true,
  imports: [BotonWhatsappComponent  ],
  templateUrl: './quienes-somos.component.html',
  styleUrl: './quienes-somos.component.css'
})
export class QuienesSomosComponent {
 
}
