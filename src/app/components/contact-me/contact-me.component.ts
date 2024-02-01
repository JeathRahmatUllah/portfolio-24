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
  styleUrl: './contact-me.component.css',
})
export class ContactMeComponent implements OnInit {
  public successMessage: string = '';

  public selectedCountry = 0;

  public phoneCode = '';
  public maxPhoneLen = 0;

  countries: any[] = [];
  filteredCountries: any[] = [];

  countryListShown = false;

  public formErrors: any = {};

  public sendEmail(event: Event) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const requiredFields = ['user_name', 'user_email', 'phone_number'];

    // Reset form errors
    this.formErrors = {};

    // Validate required fields and show error messages
    requiredFields.forEach((fieldName) => {
      const field = form.elements.namedItem(fieldName);
      const value = (field as HTMLInputElement).value.trim();

      if (value === '') {
        this.formErrors[fieldName] = 'This field is required';
      }
    });

    // Check if any errors exist
    const hasErrors = Object.keys(this.formErrors).length > 0;

    if (hasErrors) {
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

    form.reset();
  }

  ngOnInit() {
    this.countries = countryCodes;
    this.filteredCountries = countryCodes;
  }

  handlePhoneIpBoxFocus() {
    console.log('pressed');
    this.countryListShown = true;
  }
  handlePhoneIpBoxFocusOut() {
    console.log('out');
    setTimeout(() => {
      this.countryListShown = false;
      this.filteredCountries = this.countries;
    }, 500);
  }
  selectCountry(country: any) {
    // console.log(i)
    // this.selectedCountry = i
    this.phoneCode = country.phone[0];
    this.maxPhoneLen = country.phoneLength;
  }
  handlePhoneType(event: any) {
    console.log(event.target.value);
    const val = event.target.value;

    this.filteredCountries = this.countries.filter((item) => {
      return item.phone[0].includes(val);
    });
  }
}
