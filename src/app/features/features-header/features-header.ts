import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-features-header',
  imports: [TranslatePipe,RouterLink],
  templateUrl: './features-header.html',
  styleUrl: './features-header.css',
})
export class FeaturesHeader {
  constructor(public translateService: TranslateService) {}

}
