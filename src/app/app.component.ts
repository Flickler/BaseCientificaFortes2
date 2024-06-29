import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'fortes-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet />',
})
export class RootComponent {}
