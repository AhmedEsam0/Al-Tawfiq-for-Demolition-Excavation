import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-about-section',
  imports: [RouterLink,TranslatePipe],
  templateUrl: './about-section.html',
  styleUrl: './about-section.css',
})
export class AboutSection {

}
