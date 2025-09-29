import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectsService } from '../../services/projects-service';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  projetos: any[] = [];

  constructor(private projetosService: ProjectsService) {}

  ngOnInit(): void {
    this.projetosService.getProjetos().subscribe(data => {
      this.projetos = data;
    });
  }
}
