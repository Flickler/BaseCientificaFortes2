import { inject, Injectable } from '@angular/core';

import { UserState } from '@Services/user-state.service';
import { UserStorage } from '@Services/user-storage.service';
import { TeamFacade } from '@Services/team-facade.service';
import { FortesUser } from '@Types/user.type';

@Injectable({
  providedIn: 'root',
})
export class UserFacade {
  private state = inject(UserState);
  private storage = inject(UserStorage);
  private teamFacade = inject(TeamFacade);

  id = this.state.id;
  fullName = this.state.fullName;
  firstName = this.state.firstName;

  constructor() {
    const storage = this.storage.getUserStorage();
    if (storage) {
      this.setFortesUser(storage);
    }
  }

  setFortesUser(user: FortesUser | null) {
    if (user) {
      this.storage.updateUserStorage(user);
      this.teamFacade.getTeams(user.id);
    } else this.storage.deleteUserStorage();
    this.state.setFortesUser(user);
  }
}
