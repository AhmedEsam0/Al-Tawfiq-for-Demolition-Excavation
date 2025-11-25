import { Component } from '@angular/core';

import { TranslatePipe, TranslateDirective } from '@ngx-translate/core';

import { RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, RouterLink, TranslatePipe],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {}
