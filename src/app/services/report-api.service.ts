import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

import { environment } from '@Environments/environment';
import { FortesManagerResponse } from '@Types/manager.type';
import { FortesReport } from '@Types/report.type';

@Injectable({
  providedIn: 'root',
})
export class ReportApi {
  private http = inject(HttpClient);
  private path = environment.apiUrl + 'report';

  getReport(id: string, start: string, end: string) {
    return this.http.get<FortesReport[]>(this.path, {
      params: {
        managerId: id,
        startDate: start,
        closingDate: end,
      },
    });
  }

  getManagers() {
    return this.http
      .get<FortesManagerResponse[]>(environment.apiUrl + 'manager/all')
      .pipe(
        map((res) =>
          res.map((user) => {
            return {
              value: user.id,
              viewValue: user.user.name,
            };
          })
        )
      );
  }
}
