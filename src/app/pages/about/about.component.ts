import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactMeComponent } from '../../components/contact-me/contact-me.component';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ContactMeComponent, FormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {

}

