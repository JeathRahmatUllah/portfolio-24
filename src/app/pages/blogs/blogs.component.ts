import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {
  showFullContent: boolean = false;
  showFullContent2: boolean = false;
  toggleContent() {
    this.showFullContent = !this.showFullContent;
  }
  toggleContent2() {
    this.showFullContent2 = !this.showFullContent2;
  }


}


