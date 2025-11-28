import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-services-header',
  imports: [TranslatePipe,RouterLink],
  templateUrl: './services-header.html',
  styleUrl: './services-header.css',
})
export class ServicesHeader {
    constructor(public translateService: TranslateService) {}

}
