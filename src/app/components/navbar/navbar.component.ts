import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  routes : any[] = [
    {
      path: '',
      name: "Home"
    },

    {
      path: 'skills',
      name: "Skills"
    },
    {
      path: 'about',
      name: "About"
    },
    {
      path: 'resume',
      name: "Resume"
    },
    {
      path: 'blogs',
      name: "Blogs"
    },
  ]
}
