import { Component } from '@angular/core';
import { Skill } from '../../../types';
import skillsData from "../../../../data/skills.json"
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills : Skill[] = skillsData
}
