import { CanActivateFn, Router } from '@angular/router';

import { inject } from '@angular/core';
import { LoginFacade } from '@Services/login-facade.service';

export const authGuard: CanActivateFn = () => {
  return inject(LoginFacade).logged()
    ? true
    : inject(Router).navigate(['login']);
};
