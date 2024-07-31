import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { IconComponent } from '@Components/icon.component';

@Component({
  selector: 'fortes-login',
  standalone: true,
  imports: [NgOptimizedImage, ReactiveFormsModule, IconComponent],
  styleUrl: 'login.component.scss',
  templateUrl: 'login.component.html',
})
export default class LoginComponent {
  private fb = inject(NonNullableFormBuilder);
  protected form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [Validators.required, Validators.maxLength(16), Validators.minLength(8)],
    ],
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
