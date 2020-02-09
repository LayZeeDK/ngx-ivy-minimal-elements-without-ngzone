import { NgElement, WithProperties } from '@angular/elements';

import { HelloWorldComponent } from './hello-world.component';

export type HelloWorldElement = NgElement & WithProperties<HelloWorldComponent>;
