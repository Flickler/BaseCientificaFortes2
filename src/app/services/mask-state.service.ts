import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MaskState {
  private _active = signal(false);

  active = this._active.asReadonly();

  open() {
    this._active.set(true);
  }

  close() {
    this._active.set(false);
  }
}
