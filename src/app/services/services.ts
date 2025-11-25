import { Component } from '@angular/core';
import { ServicesSection } from "./services-section/services-section";
import { ServicesHeader } from "./services-header/services-header";

@Component({
  selector: 'app-services',
  imports: [ServicesSection, ServicesHeader],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {

}
