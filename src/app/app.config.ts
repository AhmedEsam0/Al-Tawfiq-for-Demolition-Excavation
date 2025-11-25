import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';

import { provideRouter, withInMemoryScrolling } from '@angular/router';

import {
  provideTranslateService,
  provideTranslateCompiler,
} from '@ngx-translate/core';

import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

import { TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';

import { routes } from './app.routes';

import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'top' })),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    provideTranslateService({
      loader: provideTranslateHttpLoader({
        prefix: '/i18n/',
        suffix: '.json',
      }),
      compiler: provideTranslateCompiler(TranslateMessageFormatCompiler),
      fallbackLang: 'en',
      lang: 'en',
    }),
  ],
};
