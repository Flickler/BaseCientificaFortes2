import { inject, Injectable } from '@angular/core';
import { AgendState } from './agend-state.service';

@Injectable({
  providedIn: 'root',
})
export class AgendFacade {
  private state = inject(AgendState);

  currHour = this.state.currHour;
  targetWeek = this.state.targetWeek;
  targetWeekText = this.state.targetWeekText;
  targetDate = this.state.targetDate;

  nextWeek() {
    this.state.nextWeek();
  }

  previousWeek() {
    this.state.previousWeek();
  }

  setWeekDay(target: number) {
    this.state.setWeekDay(target);
  }
}
