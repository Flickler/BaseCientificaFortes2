import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuState {
  private _active = signal(false);

  active = this._active.asReadonly();

  toggle() {
    this._active.update((curr) => !curr);
  }

  open() {
    this._active.set(true);
  }

  close() {
    this._active.set(false);
  }
}
