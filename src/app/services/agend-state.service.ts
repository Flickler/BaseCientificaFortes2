import { computed, Injectable, signal } from '@angular/core';
import { Week } from '@Types/calendar.type';

import {
  getCurrentDate,
  getCurrentHour,
  getISODate,
  nextWeek,
  previousWeek,
  setWeekDay,
} from '@Utils/date';

@Injectable({
  providedIn: 'root',
})
export class AgendState {
  private _currCalendar = signal(new Date());
  private _targetCalendar = signal(new Date());

  currHour = computed(() => getCurrentHour(this._currCalendar()));
  targetWeek = computed(() => this._targetCalendar().getDay());
  targetWeekText = computed(() => Week[this._targetCalendar().getDay()]);
  targetDateISO = computed(() => getISODate(this._targetCalendar()));
  targetDateText = computed(() => getCurrentDate(this._targetCalendar()));

  constructor() {
    setInterval(() => this._currCalendar.set(new Date()), 5000);
  }

  nextWeek() {
    this._targetCalendar.set(nextWeek(this._targetCalendar()));
  }

  previousWeek() {
    this._targetCalendar.set(previousWeek(this._targetCalendar()));
  }

  setWeekDay(target: number) {
    this._targetCalendar.set(setWeekDay(this._targetCalendar(), target));
  }
}
