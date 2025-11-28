import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-section',
  imports: [TranslatePipe, FormsModule],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.css',
})
export class ContactSection {
  formSubmitted(form: HTMLFormElement) {
    emailjs
      .sendForm(
        'service_7o7u43u',
        'template_sgfwfyo',
        form, // HTMLFormElement حقيقي
        { publicKey: 'yOIAzAxlvxcsr2S8a' }
      )
      .then(
        () => console.log('SUCCESS!'),
        (error) => console.log('FAILED...', error.text)
      );
  }
}
