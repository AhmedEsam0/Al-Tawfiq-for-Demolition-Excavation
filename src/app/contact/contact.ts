import { Component } from '@angular/core';
import { ContactHeader } from "./contact-header/contact-header";
import { ContactSection } from "./contact-section/contact-section";

@Component({
  selector: 'app-contact',
  imports: [ContactHeader, ContactSection],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

}
