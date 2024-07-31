import { computed, Injectable, signal } from '@angular/core';
import { Week } from '@Types/calendar.type';

@Injectable({
  providedIn: 'root',
})
export class AgendState {
  private _currCalendar = signal(new Date());
  private _targetCalendar = signal(new Date());

  currHour = computed(() => {
    const hour = String(this._currCalendar().getHours()).padStart(2, '0');
    const minute = String(this._currCalendar().getMinutes()).padStart(2, '0');
    return `${hour}:${minute}`;
  });

  targetWeek = computed(() => this._targetCalendar().getDay());
  targetWeekText = computed(() => Week[this._targetCalendar().getDay()]);

  targetDate = computed(() => {
    const day = String(this._targetCalendar().getDate()).padStart(2, '0');
    const month = String(this._targetCalendar().getMonth() + 1).padStart(2, '0');
    const year = String(this._targetCalendar().getFullYear()).padStart(2, '0');
    return `${day}/${month}/${year}`;
  });

  nextWeek() {
    this._targetCalendar.set(
      new Date(
        this._targetCalendar().getFullYear(),
        this._targetCalendar().getMonth(),
        this._targetCalendar().getDate() + 7
      )
    );
  }

  previousWeek() {
    this._targetCalendar.set(
      new Date(
        this._targetCalendar().getFullYear(),
        this._targetCalendar().getMonth(),
        this._targetCalendar().getDate() - 7
      )
    );
  }

  setWeekDay(target: number) {
    this._targetCalendar.set(
      new Date(
        this._targetCalendar().getFullYear(),
        this._targetCalendar().getMonth(),
        this._targetCalendar().getDate() +
          (target - this._targetCalendar().getDay())
      )
    );
  }
}
