import { Component, inject, OnInit, output } from '@angular/core';

import { WeekAgendFacade } from '@Services/week-agend-facade.service';
import { IconComponent } from '@Components/icon.component';
import { WeekAgend } from '@Types/calendar.type';

@Component({
  selector: 'fortes-week-agend',
  standalone: true,
  imports: [IconComponent],
  styleUrl: 'week-agend.component.scss',
  templateUrl: 'week-agend.component.html',
  providers: [WeekAgendFacade],
})
export class WeekAgendComponent implements OnInit {
  protected weekAgendFacade = inject(WeekAgendFacade);
  onAgendChange = output<WeekAgend>();

  ngOnInit() {
    this.onAgendChange.emit(this.weekAgendFacade.weekCalendar());
  }
}
