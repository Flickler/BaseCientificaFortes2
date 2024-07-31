import {
  computed,
  Directive,
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

  active = computed(() => this._hover() || this._focus());
}
