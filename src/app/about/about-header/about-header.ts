import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-header',
  imports: [RouterLink,TranslatePipe],
  templateUrl: './about-header.html',
  styleUrl: './about-header.css',
})
export class AboutHeader {
  constructor(public translateService:TranslateService){}
}
