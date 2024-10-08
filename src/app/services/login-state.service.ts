import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginState {
  private _logged = signal(false);
  private _loading = signal(false);
  private _error = signal(false);

  logged = this._logged.asReadonly();
  loading = this._loading.asReadonly();
  error = this._error.asReadonly();

  setLogged(state: boolean) {
    this._logged.set(state);
  }

  setLoading(value: boolean) {
    this._loading.set(value);
  }

  setError(value: boolean) {
    this._error.set(value);
  }
}
