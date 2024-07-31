import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Login } from '@Types/login.type';

@Injectable({
  providedIn: 'root',
})
export class LoginApi {
  private http = inject(HttpClient);
  private readonly path = '';

  auth(credentials: Login) {
    return this.http.post(this.path, credentials);
  }
}
