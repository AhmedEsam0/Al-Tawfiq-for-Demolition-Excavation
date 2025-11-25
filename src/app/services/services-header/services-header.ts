import { Component } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-services-header',
  imports: [TranslatePipe],
  templateUrl: './services-header.html',
  styleUrl: './services-header.css',
})
export class ServicesHeader {
    constructor(public translateService: TranslateService) {}

}
