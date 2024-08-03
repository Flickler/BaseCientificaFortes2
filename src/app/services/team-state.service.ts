import { Injectable, signal } from '@angular/core';
import { FortesTeam } from '@Types/team.type';

@Injectable({
  providedIn: 'root',
})
export class TeamState {
  private _teams = signal<FortesTeam[]>([]);
  private _loading = signal(false);
  private _error = signal(false);

  teams = this._teams.asReadonly();
  loading = this._loading.asReadonly();
  error = this._error.asReadonly();

  updateTeams(teams: FortesTeam[]) {
    this._teams.set(teams);
  }

  setLoading(value: boolean) {
    this._loading.set(value);
  }

  setError(value: boolean) {
    this._error.set(value);
  }
}
