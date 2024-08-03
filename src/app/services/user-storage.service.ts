import { Injectable } from '@angular/core';

import { FortesUser } from '@Types/user.type';

@Injectable({
  providedIn: 'root',
})
export class UserStorage {
  private readonly key = 'fortes-user';

  getUserStorage() {
    const storage = localStorage.getItem(this.key);
    if (storage) return JSON.parse(storage) as FortesUser;
    return;
  }

  updateUserStorage(user: FortesUser) {
    localStorage.setItem(this.key, JSON.stringify(user));
  }

  deleteUserStorage() {
    localStorage.removeItem(this.key);
  }
}
