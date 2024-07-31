import { Injectable, signal } from '@angular/core';

import { User } from '@Types/user.type';

@Injectable({
  providedIn: 'root',
})
export class UserState {
  private _user = signal<User | null>(null);

  user = this._user.asReadonly();

  setUser(user: User | null) {
    this._user.set(user);
  }
}
