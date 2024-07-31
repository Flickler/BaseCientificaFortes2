import { inject, Injectable } from '@angular/core';
import { LoginFacade } from './login-facade.service';
import { MenuState } from './menu-state.service';
import { Router } from '@angular/router';
import { MaskFacade } from './mask-facade.service';

@Injectable({
  providedIn: 'root',
})
export class MenuFacade {
  private router = inject(Router);
  private state = inject(MenuState);
  private loginFacade = inject(LoginFacade);
  private maskFacade = inject(MaskFacade);

  active = this.state.active;

  open() {
    this.maskFacade.open();
    this.state.open();
  }

  close() {
    this.state.close();
    this.maskFacade.close();
  }

  toggle() {
    if (this.active()) return this.close();
    return this.open();
  }

  logout() {
    this.state.close();
    this.loginFacade.logout();
  }

  about() {
    this.router.navigate(['about']);
  }
}
