import {
  computed,
  Directive,
  HostBinding,
  HostListener,
  input,
  signal,
} from '@angular/core';
import { IconNames } from '@Types/icons.type';

@Directive({
  selector: '[fortesTab]',
  standalone: true,
})
export class TabDirective {
  @HostBinding('tabindex') index = 0;
  @HostBinding('class.active') get isActive() {
    return this.active();
  }

  @HostListener('mouseenter') onMouseEnter() {
    this._hover.set(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this._hover.set(false);
  }

  @HostListener('focusin') onFocusIn() {
    this._focus.set(true);
  }

  @HostListener('focusout') onFocusOut() {
    this._focus.set(false);
  }

  private _hover = signal(false);
  private _focus = signal(false);

  icon = input.required<IconNames>();
  label = input.required<string>();
  custom = input(false);

  active = computed(() => this._hover() || this._focus() || this.custom());
}
