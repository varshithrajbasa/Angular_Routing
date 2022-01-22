import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `<h1>404 - Not Found</h1>`,
  styles: [`h1{color:red}`],
})
export class NotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
