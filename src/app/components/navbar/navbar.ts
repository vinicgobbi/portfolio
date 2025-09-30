import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  imports: [NgbCollapse, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  isCollapsed = true;
  activeSection: string = 'header'; // Seção ativa começa como 'header'

  // Lista dos IDs das seções na ordem em que aparecem na página
  sectionIds: string[] = ['header', 'about', 'experience', 'stacks', 'projects', 'contact'];

  // O decorador @HostListener "ouve" o evento de scroll na janela do navegador
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    let currentSection: string = this.sectionIds[0]; // Começa com o primeiro item
    const navbarHeight = document.getElementById('main-navbar')?.offsetHeight ?? 75;
    const offset = navbarHeight + 50;

    // Lógica principal para todas as seções, exceto a última
    for (const sectionId of this.sectionIds) {
      const section = document.getElementById(sectionId);
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= offset) {
          currentSection = sectionId;
        }
      }
    }

    // --- CORREÇÃO PARA A ÚLTIMA SEÇÃO ---
    // Condição especial para detectar se o usuário chegou ao final da página
    const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 2; // -2px para uma pequena tolerância

    if (atBottom) {
      // Se estiver no final, força a ativação da última seção da nossa lista
      currentSection = this.sectionIds[this.sectionIds.length - 1]; 
    }

    this.activeSection = currentSection;
  }

  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (!element) return;

    const navbar = document.getElementById('main-navbar');
    const navbarHeight = navbar?.offsetHeight ?? 0;
    
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - navbarHeight - 15; // Ajuste o -15 se necessário

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    this.isCollapsed = true;
  }
}
