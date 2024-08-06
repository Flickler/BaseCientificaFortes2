import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

import { MenuComponent } from '@Components/menu.component';
import { WeekAgendComponent } from '@Components/week-agend.component';
import { IconComponent } from '@Components/icon.component';
import { ReportFacade } from '@Services/report-facade.service';
import { SelectComponent } from '@Components/select.component';
import { WeekAgend } from '@Types/calendar.type';

@Component({
  selector: 'fortes-relatory',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MenuComponent,
    WeekAgendComponent,
    IconComponent,
    SelectComponent,
  ],
  templateUrl: 'report.component.html',
  styleUrl: 'report.component.scss',
})
export default class ReportComponent {
  private reportFacade = inject(ReportFacade);
  protected managers = this.reportFacade.managers;
  protected data = this.reportFacade.data;

  setRange(range: WeekAgend) {
    this.reportFacade.setRange(range);
    this.reportFacade.getReport();
  }

  setManagerId(id: string) {
    this.reportFacade.setManagerId(id);
    this.reportFacade.getReport();
  }
}
