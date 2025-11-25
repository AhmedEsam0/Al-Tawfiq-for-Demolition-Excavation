import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-header',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './contact-header.html',
  styleUrl: './contact-header.css',
})
export class ContactHeader {
  constructor(public translateService: TranslateService) {}
}
