import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, NgbModalModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  // 1. Injete o NgbModal no construtor
  constructor(private modalService: NgbModal) {}

  // 2. Crie a função 'open' que será chamada pelo botão
  open(content: any) {
    this.modalService.open(content, { 
      ariaLabelledBy: 'projectLinksModalLabel',
      size: 'lg', // 'lg' para large, 'sm' para small
      centered: true // Para centralizar o modal na tela
    });
  }
}
