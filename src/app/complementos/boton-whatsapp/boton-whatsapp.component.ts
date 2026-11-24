import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-boton-whatsapp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './boton-whatsapp.component.html',
  styleUrl: './boton-whatsapp.component.css'
})
export class BotonWhatsappComponent {
  

 isChatVisible: boolean = false;
 isLoading: boolean = true; 


 toggleChat(): void {
   this.isChatVisible = !this.isChatVisible;

 
   if (this.isChatVisible) {
     this.isLoading = true;  

     setTimeout(() => {
       this.isLoading = false; 
     }, 1000);
   } else {
   
     this.isLoading = true;
   }
 }


 closeChat(): void {
   this.isChatVisible = false;
   this.isLoading = true;
 }
 currentTime: string = '';

 ngOnInit(): void {
   this.updateTime();
  
   setInterval(() => {
     this.updateTime();
   }, 60000);
 }

 updateTime(): void {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const amPm = hours >= 12 ? 'PM' : 'AM';


  hours = hours % 12 || 12;
  this.currentTime = `${hours}:${minutes} ${amPm}`;
}
}  


