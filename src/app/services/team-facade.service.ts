import { inject, Injectable } from '@angular/core';
import { catchError, of, take } from 'rxjs';

import { TeamApi } from '@Services/team-api.service';
import { TeamState } from '@Services/team-state.service';

@Injectable({
  providedIn: 'root',
})
export class TeamFacade {
  private api = inject(TeamApi);
  private state = inject(TeamState);

  teams = this.state.teams;
  loading = this.state.loading;
  error = this.state.error;

  getTeams(id: string) {
    this.state.setError(false);
    this.state.setLoading(true);

    this.api
      .getTeams(id)
      .pipe(
        take(1),
        catchError(() => {
          this.state.setError(true);
          return of(null);
        })
      )
      .subscribe((res) => {
        if (res) this.state.updateTeams(res);
        this.state.setLoading(false);
      });
  }
}
