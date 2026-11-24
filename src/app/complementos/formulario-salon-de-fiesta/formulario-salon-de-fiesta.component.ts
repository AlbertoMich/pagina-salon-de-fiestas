import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formulario-salon-de-fiesta',
  standalone: true,
  imports: [FormsModule, CommonModule  ],
  templateUrl: './formulario-salon-de-fiesta.component.html',
  styleUrl: './formulario-salon-de-fiesta.component.css'
})
export class FormularioSalonDeFiestaComponent {
  cargando = false;

  enviarCita(citaForm: NgForm): void {
    if (citaForm.valid) {
      const { nombre, telefono, confirmarTelefono, fecha, hora } = citaForm.value;

      if (!nombre || !telefono || !confirmarTelefono || !fecha || !hora) {
        alert('Por favor, complete todos los campos antes de enviar la cita.');
        return;
      }

      const regexTelefono = /^\d{10}$/;
     
if (isNaN(telefono) || isNaN(confirmarTelefono)) {
  alert('El número de teléfono debe ser numérico.');
  return;
}


if (!regexTelefono.test(telefono) || !regexTelefono.test(confirmarTelefono)) {
  alert('El número de teléfono debe contener exactamente 10 dígitos.');
  return;
}

      if (telefono !== confirmarTelefono) {
        alert('Los números de teléfono no coinciden.');
        return;
      }

      this.cargando = true; 

      const fechaObj = new Date(fecha);
      const fechaFormateada = `${fechaObj.getDate()}/${fechaObj.getMonth() + 1}/${fechaObj.getFullYear()}`;
      const [horaInput, minutos] = hora.split(':');
      let hora12 = parseInt(horaInput);
      let ampm = 'AM';

      if (hora12 === 0) {
        hora12 = 12;
      } else if (hora12 >= 12) {
        if (hora12 > 12) hora12 -= 12;
        ampm = 'PM';
      }

      const horaFormateada = `${hora12}:${minutos} ${ampm}`;
      const numeroWhatsApp = '+525636069170';
      const mensaje = `*Hola, mi nombre es ${nombre}*  \n\nQuisiera visitar el salón el día ${fechaFormateada} a las ${horaFormateada}. \n\nMi número de teléfono es: ${telefono}`;
      const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

      setTimeout(() => {
        this.cargando = false; 
        window.location.href = enlaceWhatsApp;
      }, 2000); 
    } else {
      alert('Por favor, complete todos los campos antes de enviar la cita.');
    }
  }
}
