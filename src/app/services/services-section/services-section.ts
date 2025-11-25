import { Component } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-services-section',
  imports: [TranslatePipe],
  templateUrl: './services-section.html',
  styleUrl: './services-section.css',
})
export class ServicesSection {
  constructor(public translateService: TranslateService) {}
}
