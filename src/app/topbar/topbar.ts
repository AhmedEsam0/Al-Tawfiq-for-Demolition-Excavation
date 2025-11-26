import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageSwitch } from '../../Services/language-switch';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topbar',
  imports: [TranslatePipe, CommonModule],
  templateUrl: './topbar.html',
  styleUrl: './topbar.css',
})
export class Topbar {
  constructor(public switchLangService: LanguageSwitch) {}

  get isRtl() {
  return document.documentElement.dir === 'rtl';
}

  switchLang(lang: string) {
    this.switchLangService.SwitchLang(lang);
  }
}
