import { Component } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-features-header',
  imports: [TranslatePipe],
  templateUrl: './features-header.html',
  styleUrl: './features-header.css',
})
export class FeaturesHeader {
  constructor(public translateService: TranslateService) {}

}
