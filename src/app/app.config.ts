import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withViewTransitions } from '@angular/router';

import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import Aura from '@primeuix/themes/aura';
import { providePrimeNG } from 'primeng/config';
import { loadingInterceptor } from '../core/interceptors/loading-interceptor';
import { routes } from './app.routes';
import { MessageService } from 'primeng/api';



export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes,   withViewTransitions() , withInMemoryScrolling( {anchorScrolling : 'enabled' })   ),
    MessageService,
    provideHttpClient(withFetch(), withInterceptors([loadingInterceptor])),
    provideAnimations(),
    providePrimeNG({
      theme: {
        preset: Aura
      }
    }),
  ]
};
