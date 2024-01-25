import { Component } from '@angular/core';
import { ContactMeComponent } from '../../components/contact-me/contact-me.component';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { CommonModule } from '@angular/common';

emailjs.init('aFEIOhltbeJE9Tmnf');

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ContactMeComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  public successMessage: string = '';

  public sendEmail(event: Event) {
    event.preventDefault();

    emailjs
      .sendForm(
        'service_9v8f4rk',
        'template_qduhdkn',
        event.target as HTMLFormElement,
        'aFEIOhltbeJE9Tmnf'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
          this.successMessage = 'Message sent successfully, Thank you';
        },
        (error) => {
          console.log(error.text);
          this.successMessage = 'Failed to send message';
        }
      );

    const form = event.target as HTMLFormElement;
    form.reset();
  }
}
