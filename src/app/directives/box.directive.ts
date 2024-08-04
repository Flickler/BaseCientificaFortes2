import {
  Directive,
  ElementRef,
  inject,
  input,
  numberAttribute,
  OnChanges,
} from '@angular/core';

@Directive({
  selector: '[fortesBox]',
  standalone: true,
})
export class BoxDirective implements OnChanges {
  private el = inject(ElementRef).nativeElement as HTMLElement;
  height = input.required({ transform: numberAttribute });

  ngOnChanges() {
    this.el.style.height = `${this.height()}px`;
  }
}
