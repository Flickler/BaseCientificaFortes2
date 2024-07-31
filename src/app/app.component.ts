import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MaskComponent } from '@Components/mask.component';

@Component({
  selector: 'fortes-root',
  standalone: true,
  imports: [RouterOutlet, MaskComponent],
  template: '<router-outlet /><fortes-mask/>',
})
export class RootComponent {}
