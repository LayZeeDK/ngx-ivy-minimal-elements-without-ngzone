import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { HelloWorldModule } from 'hello-world-element';

enableProdMode();

platformBrowser().bootstrapModule(HelloWorldModule, { ngZone: 'noop' })
  .catch(err => console.error(err));
