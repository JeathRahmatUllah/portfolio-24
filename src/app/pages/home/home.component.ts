import { Component, OnInit } from '@angular/core';
import { Certificate, Project } from '../../../types';
import certifcatesData from '../../../../data/certificates.json'
import { CommonModule } from '@angular/common';
import projectsData from '../../../../data/projects.json'
import { ProjectCardComponent } from '../../components/project-card/project-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  certificates : Certificate[] = certifcatesData
  projects: Project[] = projectsData
}

