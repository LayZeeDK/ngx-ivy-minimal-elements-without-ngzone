import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement, NgElementConstructor } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { HelloWorldComponent } from './hello-world.component';

@NgModule({
  declarations: [HelloWorldComponent],
  imports: [BrowserModule],
})
export class HelloWorldModule implements DoBootstrap {
  HelloWorldElement: NgElementConstructor<HelloWorldComponent> =
    createCustomElement(HelloWorldComponent, { injector: this.injector });

  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    customElements.define('hw-element', this.HelloWorldElement);
  }
}
