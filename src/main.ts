import { provide } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { provideRouter } from '@angular/router';
import { App } from './components/app';
import { routes } from './components/app.routes';
import { HTTP_PROVIDERS } from '@angular/http';

bootstrap(App, [
  HTTP_PROVIDERS,
  provideRouter(routes),
  provide(LocationStrategy, { useClass: PathLocationStrategy })
]);
