import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hw-hello-world-element',
  template: `
    <p>
      hello-world-element works!
    </p>
  `,
  styles: []
})
export class HelloWorldElementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
