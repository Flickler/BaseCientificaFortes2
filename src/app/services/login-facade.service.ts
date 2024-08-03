import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of, take } from 'rxjs';

import { LoginApi } from './login-api.service';
import { LoginState } from './login-state.service';
import { UserFacade } from './user-facade.service';
import { LoginSchema } from './login-schema.service';
import { Login } from '@Types/login.type';

@Injectable({
  providedIn: 'root',
})
export class LoginFacade {
  private router = inject(Router);
  private api = inject(LoginApi);
  private state = inject(LoginState);
  private schema = inject(LoginSchema);
  private userFacade = inject(UserFacade);

  form = this.schema.form;
  loading = this.state.loading;
  logged = this.state.logged;

  constructor() {
    if (this.userFacade.id()) this.state.setLogged(true);
  }

  login() {
    this.state.setError(false);
    this.state.setLoading(true);
    this.api
      .auth(this.form.value as Login)
      .pipe(
        take(1),
        catchError(() => {
          this.state.setError(true);
          return of(null);
        })
      )
      .subscribe((res) => {
        this.state.setLoading(false);
        if (res === null) return;

        this.userFacade.setFortesUser({
          id: res.id,
          name: res.user.name,
        });
        this.state.setLogged(true);
        this.router.navigate(['/']);
      });
  }

  logout() {
    this.userFacade.setFortesUser(null);
    this.state.setLogged(false);
    this.router.navigate(['login']);
  }
}
