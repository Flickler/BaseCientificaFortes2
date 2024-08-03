import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@Environments/environment';

import { Login, LoginResponse } from '@Types/login.type';

@Injectable({
  providedIn: 'root',
})
export class LoginApi {
  private http = inject(HttpClient);
  private readonly path = environment.apiUrl + 'login/manager';

  auth(credentials: Login) {
    return this.http.post<LoginResponse>(this.path, credentials);
  }
}
