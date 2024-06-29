import { Component, OnInit, input, signal } from '@angular/core';

import { IconColors, IconNames } from '@Types/icons.type';

@Component({
  selector: 'fortes-icon',
  standalone: true,
  templateUrl: 'icon.component.html',
  styleUrl: 'icon.component.scss',
})
export class IconComponent implements OnInit {
  name = input.required<IconNames>();
  color = input<IconColors>('naviBlue');
  size = input(16, {
    transform: (value: string | number) =>
      typeof value === 'string' ? parseInt(value) : value,
  });

  fill = signal<string | null>(null);
  path = signal<string | null>(null);

  ngOnInit() {
    import('@Utils/icons').then((icons) => this.path.set(icons[this.name()]));
    import('@Utils/colors').then((colors) =>
      this.fill.set(colors[this.color()])
    );
  }
}
