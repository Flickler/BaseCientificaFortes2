import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { environment } from '@Environments/environment';
import { FortesTeam } from '@Types/team.type';

@Injectable({
  providedIn: 'root',
})
export class TeamApi {
  private http = inject(HttpClient);
  private readonly path = environment.apiUrl + 'team-management/';

  getTeams(id: string) {
    return this.http.get<FortesTeam[]>(this.path + id + '/teams');
  }
}
