import { Component } from '@angular/core';
import { FeaturesHeader } from "./features-header/features-header";
import { FeaturesSection } from "./features-section/features-section";

@Component({
  selector: 'app-features',
  imports: [FeaturesHeader, FeaturesSection],
  templateUrl: './features.html',
  styleUrl: './features.css',
})
export class Features {

}
