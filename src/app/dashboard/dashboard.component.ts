
import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MonitoreoService } from '../monitoreo.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit, OnDestroy {
  performanceData: any;

  constructor(private monitoreoService: MonitoreoService) {}

  ngOnInit(): void {
    this.monitoreoService.performanceData$.subscribe((data) => {
      this.performanceData = data;
    });
  }

  ngOnDestroy(): void {
    this. monitoreoService.stopTimeTracking(); // Detener seguimiento de tiempo al destruir el componente
  }
}