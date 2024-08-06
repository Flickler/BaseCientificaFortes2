import { Component, input, output, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

import { FortesOption } from '@Types/option.type';

@Component({
  selector: 'fortes-select',
  standalone: true,
  imports: [NgOptimizedImage],
  styleUrl: 'select.component.scss',
  templateUrl: 'select.component.html',
})
export class SelectComponent {
  label = input('Selecione uma opção');
  options = input.required<FortesOption[] | null>();
  onSelectChange = output<FortesOption>();
  protected value = signal<null | FortesOption>(null);
  protected active = signal(false);

  toggle() {
    this.active.update((curr) => !curr);
  }

  setValue(value: FortesOption) {
    this.value.set(value);
  }

  onChoice(option: FortesOption) {
    this.setValue(option);
    this.onSelectChange.emit(option);
    this.toggle();
  }
}
