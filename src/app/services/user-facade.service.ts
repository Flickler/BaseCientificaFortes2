import { inject, Injectable } from '@angular/core';

import { UserState } from '@Services/user-state.service';

@Injectable({
  providedIn: 'root',
})
export class UserFacade {
  private state = inject(UserState);

  FortesUser = this.state.FortesUser;
  setFortesUser = this.state.setFortesUser;
}
