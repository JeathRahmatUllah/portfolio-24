import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { BlogsComponent } from './pages/blogs/blogs.component';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'skills',
    component: SkillsComponent,
  },
  {
    path: 'resume',
    component: ResumeComponent,
  },
  {
    path: 'blogs',
    component: BlogsComponent,
  }

];
