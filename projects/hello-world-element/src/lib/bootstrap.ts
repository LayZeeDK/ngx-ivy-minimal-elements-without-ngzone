import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';

import { HelloWorldModule } from './hello-world.module';

export function bootstrapHelloWorld(createPlatform = () => platformBrowser()) {
  try {
    enableProdMode();
  } catch {}
    
  return createPlatform().bootstrapModule(HelloWorldModule, { ngZone: 'noop' })
    .catch(err => console.error(err));
}
