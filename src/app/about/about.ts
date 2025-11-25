import { Component } from '@angular/core';
import { Features } from '../features/features';
import { AboutHeader } from './about-header/about-header';
import { AboutSection } from './about-section/about-section';
import { FeaturesSection } from '../features/features-section/features-section';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  imports: [AboutHeader, AboutSection, FeaturesSection],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
