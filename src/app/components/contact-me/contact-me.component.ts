import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { CommonModule } from '@angular/common';
import countryCodes from '../../../../data/countryCodesNew.json';
import { FormsModule } from '@angular/forms';
emailjs.init('aFEIOhltbeJE9Tmnf');


@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, ContactMeComponent, FormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css'
})
export class ContactMeComponent implements OnInit {
  public successMessage: string = '';

  public selectedCountry = 0;

  countries: any[] = [];

  public sendEmail(event: Event) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const requiredFields = ['user_name', 'user_email', 'phone_number'];

    // Validate required fields
    const isValid = requiredFields.every((fieldName) => {
      const field = form.elements.namedItem(fieldName);

      return (field as HTMLInputElement).value.trim() !== '';
    });

    if (!isValid) {
      // Display an error message to the user
      alert('Please fill in all required fields.');
      return;
    }

    emailjs
      .sendForm(
        'service_9v8f4rk',
        'template_qduhdkn',
        form,
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

    // form.reset(); 
  }

  ngOnInit() {
    this.countries = countryCodes;
  }
}