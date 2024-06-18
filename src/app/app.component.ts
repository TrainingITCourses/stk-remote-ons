import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `
    <h3>Welcome to {{ title }}!</h3>
    <p>This is a widget that is part of a larger application.</p>
  `,
  styles: [],
})
export class AppComponent {
  title = 'lab-remote-one';
}
