import { Component, signal, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { whatsAppUrl } from './whatsapp.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly platformId = inject(PLATFORM_ID);

  protected readonly menuOpen = signal(false);
  protected readonly carouselIndex = signal(0);

  protected readonly whatsappHref = whatsAppUrl();
  protected readonly currentYear = new Date().getFullYear();

  protected readonly navLinks = [
    { id: 'metodo', label: 'Método I9' },
    { id: 'resultados', label: 'Resultados' },
    { id: 'consultoria', label: 'Consultoria' },
  ];

  protected readonly resultSlides = [
    { caption: 'Antes e depois — aluna 1' },
    { caption: 'Antes e depois — aluna 2' },
    { caption: 'Antes e depois — aluna 3' },
    { caption: 'Antes e depois — aluna 4' },
    { caption: 'Antes e depois — aluna 5' },
  ];

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected prevSlide(): void {
    const len = this.resultSlides.length;
    this.carouselIndex.update((i) => (i - 1 + len) % len);
  }

  protected nextSlide(): void {
    const len = this.resultSlides.length;
    this.carouselIndex.update((i) => (i + 1) % len);
  }

  protected goToSlide(index: number): void {
    this.carouselIndex.set(index);
  }

  protected scrollTo(sectionId: string): void {
    this.closeMenu();
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
