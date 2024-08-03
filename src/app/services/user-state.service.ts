import { computed, Injectable, signal } from '@angular/core';

import { FortesUser } from '@Types/user.type';

@Injectable({
  providedIn: 'root',
})
export class UserState {
  private _user = signal<FortesUser | null>(null);

  id = computed(() => this._user()?.id ?? null);
  fullName = computed(() => this._user()?.name ?? null);
  firstName = computed(() => this.fullName()?.split(' ')[0] ?? null);

  setFortesUser(FortesUser: FortesUser | null) {
    this._user.set(FortesUser);
  }
}
