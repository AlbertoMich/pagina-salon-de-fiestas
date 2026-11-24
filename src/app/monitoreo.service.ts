import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonitoreoService {
  private performanceData = new BehaviorSubject<any>({
    loadTime: 0,
    fps: 0,
    clicks: 0,
    sectionClicks: { section1: 0, section2: 0, section3: 0 },
    timeSpent: { section1: 0, section2: 0, section3: 0 },
    windowState: 'visible',
  });

  performanceData$ = this.performanceData.asObservable();

  private sectionStartTime: { [key: string]: number } = {};

  constructor() {
    this.collectPerformanceMetrics();
    this.trackUserInteractions();
    this.trackWindowVisibility();
  }

  private collectPerformanceMetrics() {
    
    window.onload = () => {
      const timing = performance.timing;
      const loadTime = timing.loadEventEnd - timing.navigationStart;
      this.updateData({ loadTime });
    };

    // FPS
    let lastTime = performance.now();
    let frameCount = 0;

    const calculateFPS = () => {
      const now = performance.now();
      frameCount++;
      if (now - lastTime >= 1000) {
        const fps = frameCount;
        frameCount = 0;
        lastTime = now;
        this.updateData({ fps });
      }
      requestAnimationFrame(calculateFPS);
    };
    calculateFPS();
  }

  private trackUserInteractions() {
    // Contador de clics
    let clicks = 0;
    document.addEventListener('click', (event) => {
      clicks++;
      this.updateData({ clicks });

      // Contar clics por sección
      const section = this.getSectionFromClick(event.target as HTMLElement);
      if (section) {
        const sectionClicks = { ...this.performanceData.value.sectionClicks };
        sectionClicks[section]++;
        this.updateData({ sectionClicks });
        this.startTimeSpent(section); // Iniciar tiempo de permanencia
      }
    });

    // Rastreo de navegación
    const navigations: string[] = [];
    window.onpopstate = () => {
      navigations.push(window.location.pathname);
      this.updateData({ navigations });
    };
  }

  private getSectionFromClick(target: HTMLElement): string | null {
    // Aquí, mapeamos clics en diferentes secciones de la página
    if (target.id === 'home') return 'home';
    if (target.id === 'section2') return 'section2';
    if (target.id === 'section3') return 'section3';
    return null;
  }

  private startTimeSpent(section: string) {
    // Medir el tiempo de permanencia en una sección
    if (!this.sectionStartTime[section]) {
      this.sectionStartTime[section] = performance.now();
    }
  }

  private trackWindowVisibility() {
    // Detectar si la ventana está en segundo plano o no
    document.addEventListener('visibilitychange', () => {
      const windowState = document.hidden ? 'hidden' : 'visible';
      this.updateData({ windowState });
    });
  }

  private updateData(newData: Partial<any>) {
    const currentData = this.performanceData.value;
    this.performanceData.next({ ...currentData, ...newData });
  }

  private updateTimeSpent() {
    // Actualizar el tiempo de permanencia en cada sección
    const currentTime = performance.now();
    for (const section in this.sectionStartTime) {
      if (this.sectionStartTime.hasOwnProperty(section)) {
        const timeSpent = currentTime - this.sectionStartTime[section];
        const timeSpentData = { ...this.performanceData.value.timeSpent };
        timeSpentData[section] = timeSpent;
        this.updateData({ timeSpent: timeSpentData });
      }
    }
  }

  public stopTimeTracking() {
    this.updateTimeSpent(); // Actualizar tiempo de permanencia antes de detener
  }
}
