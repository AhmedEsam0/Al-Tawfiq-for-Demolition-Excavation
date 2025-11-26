import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageSwitch {
  constructor(private translateService: TranslateService) {
    this.translateService.addLangs(['ar', 'en']);
    this.translateService.setFallbackLang('en');

    const savedLang = typeof window !== 'undefined'
      ? localStorage.getItem('lang') || 'en'
      : 'en';

    this.translateService.use(savedLang);
    if (typeof window !== 'undefined') {
      document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
    }
  }

  SwitchLang(lang: string) {
    this.translateService.use(lang);

    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', lang);
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }
  }

  getDirection() {
    return typeof window !== 'undefined'
      ? document.documentElement.dir
      : 'ltr';
  }
}
