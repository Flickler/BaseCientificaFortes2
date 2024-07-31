import { inject, Injectable } from '@angular/core';

import { MaskState } from './mask-state.service';

@Injectable({
  providedIn: 'root',
})
export class MaskFacade {
  private state = inject(MaskState);

  active = this.state.active;

  open() {
    this.state.open();
  }

  close() {
    this.state.close();
  }
}
