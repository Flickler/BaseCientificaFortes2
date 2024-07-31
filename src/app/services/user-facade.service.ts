import { inject, Injectable } from '@angular/core';

import { UserState } from './user-state.service';

@Injectable({
  providedIn: 'root',
})
export class UserFacade {
  private state = inject(UserState);

  user = this.state.user;
  setUser = this.state.setUser;
}
