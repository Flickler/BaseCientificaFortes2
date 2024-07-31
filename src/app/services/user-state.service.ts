import { Injectable, signal } from '@angular/core';

import { FortesUser } from '@Types/user.type';

@Injectable({
  providedIn: 'root',
})
export class UserState {
  private _FortesUser = signal<FortesUser | null>(null);

  FortesUser = this._FortesUser.asReadonly();

  setFortesUser(FortesUser: FortesUser | null) {
    this._FortesUser.set(FortesUser);
  }
}
