import { inject, Injectable } from '@angular/core';

import { LoginApi } from './login-api.service';
import { LoginState } from './login-state.service';
import { Login } from '@Types/login.type';

@Injectable({
  providedIn: 'root',
})
export class LoginFacade {
  private api = inject(LoginApi);
  private state = inject(LoginState);

  logged = this.state.logged;

  login(form: Login) {
    this.api.auth(form);
  }

  logout() {
    this.state.setLogged(false);
  }
}
