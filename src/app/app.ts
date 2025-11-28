import { Component, inject, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { TranslateService, TranslatePipe, TranslateDirective } from '@ngx-translate/core';

import { Navbar } from './navbar/navbar';
import { Topbar } from './topbar/topbar';
import { Copyright } from './copyright/copyright';
import { BackToTop } from './back-to-top/back-to-top';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterModule,
    Navbar,
    Topbar,
    Copyright,
    BackToTop,
    Footer
],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Al-Tawfiq');


}
