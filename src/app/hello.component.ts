import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Home Page..!</h1>`,
  styles: [``]
})
export class HelloComponent  {
  @Input() name: string;
}
