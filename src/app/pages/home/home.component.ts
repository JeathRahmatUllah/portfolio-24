import { Component, OnInit } from '@angular/core';
//import { Certificate, Project } from '../../../types';
//import certifcatesData from '../../../../data/certificates.json';
import { CommonModule } from '@angular/common';
//import projectsData from '../../../../data/projects.json';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  // certificates : Certificate[] = certifcatesData
  // projects: Project[] = projectsData
  skills: any;
  certificates: any;
  projects:any;

  constructor(firebaseService: FirebaseService) {
    this.projects = firebaseService.getProjects();
    this.certificates = firebaseService.getCertificates();
    
  }
}
