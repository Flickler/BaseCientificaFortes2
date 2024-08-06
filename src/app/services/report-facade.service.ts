import { computed, inject, Injectable, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of, take } from 'rxjs';

import { ReportApi } from '@Services/report-api.service';
import { WeekAgend } from '@Types/calendar.type';
import { FortesReport } from '@Types/report.type';
import { getISODate } from '@Utils/date';

@Injectable({
  providedIn: 'root',
})
export class ReportFacade {
  private api = inject(ReportApi);
  private _data = signal<FortesReport[] | null>(null);
  private _loading = signal(false);
  private _error = signal(false);

  private _range = signal<WeekAgend | null>(null);
  private _managerId = signal<string | null>(null);
  private _paramsValid = computed(() => !!this._range() && !!this._managerId());

  data = this._data.asReadonly();
  loading = this._loading.asReadonly();
  error = this._error.asReadonly();
  managers = toSignal(this.api.getManagers());

  getReport() {
    if (!this._paramsValid()) return;
    this._loading.set(true);
    this._error.set(false);
    this._data.set(null);
    this.api
      .getReport(
        this._managerId()!,
        getISODate(this._range()!.start),
        getISODate(this._range()!.end)
      )
      .pipe(
        take(1),
        catchError(() => {
          this._error.set(true);
          return of(null);
        })
      )
      .subscribe((res) => {
        if (res) this._data.set(res);
        this._loading.set(false);
      });
  }

  setRange(weekAgend: WeekAgend) {
    this._range.set(weekAgend);
  }

  setManagerId(id: string) {
    this._managerId.set(id);
  }
}
