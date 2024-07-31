import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginState {
  private _logged = signal(false);

  logged = this._logged.asReadonly();

  setLogged(state: boolean) {
    this._logged.set(state);
  }
}
