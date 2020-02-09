import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { bootstrapHelloWorld } from 'hello-world-element';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const platform = platformBrowser();

platform.bootstrapModule(AppModule, { ngZone: 'noop' })
  .then(() => bootstrapHelloWorld(() => platform))
  .catch(err => console.error(err));
